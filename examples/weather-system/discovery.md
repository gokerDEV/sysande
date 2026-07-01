# Discovery Summary

## System purpose

The Weather System provides current weather conditions and short-term forecasts for a location selected by the user. It retrieves forecast data from an external weather provider, caches recent results, and returns a simplified response through a web interface.

## Primary actors and stakeholders

| Name | Role | Goal | Direct interaction |
|---|---|---|---|
| Visitor | Public user | Search for a location and view a forecast | Yes |
| Product owner | Stakeholder | Provide a simple and reliable forecast experience | No |
| Operations team | Stakeholder | Operate the service and investigate failures | No |

## System boundary

### Inside the boundary

- public web application,
- weather API,
- forecast refresh worker,
- forecast cache,
- refresh job queue,
- basic operational logging.

### Outside the boundary

- weather observation and forecast generation,
- geographic search data ownership,
- user accounts and personalization,
- severe-weather emergency alerting,
- long-term climate analysis.

## External systems and dependencies

| External dependency | Purpose | Direction | Confirmed exchange |
|---|---|---|---|
| Weather Provider | Supplies current conditions and forecast data | Weather System → Provider → Weather System | HTTPS request and forecast response |

## Constraints

### Technology and platform

- The example remains implementation-neutral except for the conceptual containers.
- The public interface is web based.

### Security and privacy

- No user account or personal profile is required.
- Location searches may be processed but are not retained as user history in this example.

### Availability and performance

- Cached forecasts should be returned when sufficiently fresh.
- A provider failure should not make a still-usable cached forecast unavailable.

### Cost and operations

- External provider calls should be reduced through caching.
- Refresh work should be asynchronous when cached data can be returned.

## Quality priorities

1. Simplicity
2. Reliability
3. Low response latency
4. Low external-provider usage
5. Maintainability

## Existing materials

- sysande workflow and coverage definitions,
- LikeC4 DSL,
- D2 DSL and sysande default D2 theme.

## Confirmed facts

- Visitors request forecasts by location.
- Forecast data comes from an external provider.
- Recent forecasts are cached.
- Stale or missing data can trigger an asynchronous refresh job.
- A worker fetches provider data and updates the cache.

## Assumptions

- A stale cached forecast may be returned while refresh happens in the background.
- Only one weather provider is used in the initial design.
- The queue provides at-least-once delivery.
- The cache is shared by API and worker containers.

## Open questions

- What freshness duration should apply to cached forecasts? Non-blocking for the architecture example.
- How many refresh retries should be attempted? Non-blocking for the architecture example.
- Is geographic location resolution handled by the same provider? Deferred.

## Initial terminology

- **Forecast:** Simplified current and short-term weather data returned to the visitor.
- **Fresh forecast:** Cached forecast that remains within the accepted freshness interval.
- **Stale forecast:** Cached forecast outside the freshness interval but still usable as a fallback.
- **Refresh job:** Asynchronous request to retrieve and store updated provider data.
