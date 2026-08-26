export type OutboundCapability = "loading" | "enabled" | "disabled";

export const resolveOutboundCapability = (
  outboundCallsEnabled: boolean | undefined,
): Exclude<OutboundCapability, "loading"> =>
  outboundCallsEnabled === false ? "disabled" : "enabled";

export const canSubmitOutboundCall = (
  capability: OutboundCapability,
  destination: string,
): boolean => capability === "enabled" && destination.trim().length >= 3;
