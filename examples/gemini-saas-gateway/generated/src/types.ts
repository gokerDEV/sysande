export type SupportedProvider = "google" | "apple" | "github";
export type MailProvider = "sendgrid" | "mailgun" | "smtp";
export type SmsProvider = "twilio" | "infobip";

export interface ProviderCredentials {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export interface ProjectConfig {
  id: string;
  ownerId: string;
  socialProviders: Record<SupportedProvider, ProviderCredentials | null>;
  mailConfig: {
    type: MailProvider;
    apiKey: string;
  } | null;
  smsConfig: {
    type: SmsProvider;
    apiKey: string;
  } | null;
}

export interface RouteAuthRule {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  requiredScopes: string[];
}

export interface TokenPayload {
  projectId: string;
  userId: string;
  scopes: string[];
  exp: number;
}
