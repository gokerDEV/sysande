import { jwtVerify } from "jose";
import type { RouteAuthRule, TokenPayload } from "./types.ts";

export class ApiGateway {
  private routes: Map<string, RouteAuthRule> = new Map();
  private jwtSecret: Uint8Array;

  constructor(secret: string, openApiDoc: unknown) {
    this.jwtSecret = new TextEncoder().encode(secret);
    this.parseOpenApi(openApiDoc);
  }

  private parseOpenApi(doc: unknown): void {
    if (typeof doc !== "object" || doc === null) return;
    const rawDoc = doc as Record<string, unknown>;
    const paths = rawDoc.paths as Record<string, Record<string, unknown>> | undefined;

    if (!paths) return;

    for (const [path, methods] of Object.entries(paths)) {
      for (const [method, config] of Object.entries(methods)) {
        const typedMethod = method.toUpperCase() as RouteAuthRule["method"];
        const security = (config as Record<string, unknown>).security as Record<string, string[]>[] | undefined;

        const requiredScopes: string[] = [];
        if (security) {
          for (const secRequirement of security) {
            for (const scopes of Object.values(secRequirement)) {
              requiredScopes.push(...scopes);
            }
          }
        }

        const routeKey = `${typedMethod}:${path}`;
        this.routes.set(routeKey, { path, method: typedMethod, requiredScopes });
      }
    }
  }

  public async handleRequest(request: Request, upstreamUrl: string): Promise<Response> {
    const url = new URL(request.url);
    const routeKey = `${request.method.toUpperCase()}:${url.pathname}`;
    const rule = this.routes.get(routeKey);

    if (!rule) {
      return new Response("Not Found or Undefined in OpenAPI", { status: 404 });
    }

    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response("Unauthorized: Missing Token", { status: 401 });
    }

    const token = authHeader.substring(7);
    let payload: TokenPayload;

    try {
      const { payload: verified } = await jwtVerify(token, this.jwtSecret);
      payload = verified as unknown as TokenPayload;
    } catch {
      return new Response("Unauthorized: Invalid Token", { status: 401 });
    }

    const hasAccess = rule.requiredScopes.every((scope) => payload.scopes.includes(scope));
    if (!hasAccess) {
      return new Response("Forbidden: Insufficient Scopes", { status: 403 });
    }

    const startTime = performance.now();
    const upstreamHeaders = new Headers(request.headers);
    upstreamHeaders.set("X-Project-Id", payload.projectId);
    upstreamHeaders.set("X-User-Id", payload.userId);
    upstreamHeaders.set("X-User-Scopes", payload.scopes.join(","));

    try {
      const proxyResponse = await fetch(`${upstreamUrl}${url.pathname}${url.search}`, {
        method: request.method,
        headers: upstreamHeaders,
        body: request.body,
        // @ts-ignore
        duplex: "half",
      });

      const duration = performance.now() - startTime;
      this.emitTelemetry(payload.projectId, rule.path, request.method, proxyResponse.status, duration);
      return proxyResponse;
    } catch {
      return new Response("Bad Gateway", { status: 502 });
    }
  }

  private emitTelemetry(
    projectId: string,
    path: string,
    method: string,
    status: number,
    durationMs: number
  ): void {
    const logData = {
      projectId,
      path,
      method,
      status,
      durationMs,
      timestamp: new Date().toISOString(),
    };
    console.log(JSON.stringify(logData));
  }
}
