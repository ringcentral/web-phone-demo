import { describe, expect, it } from "vitest";

import {
  canSubmitOutboundCall,
  type OutboundCapability,
  resolveOutboundCapability,
} from "./outbound-call-policy";

describe("canSubmitOutboundCall", () => {
  const eligibilityCases: Array<{
    capability: OutboundCapability;
    destination: string;
    expected: boolean;
  }> = [
    {
      capability: "loading",
      destination: "16502530000",
      expected: false,
    },
    {
      capability: "disabled",
      destination: "16502530000",
      expected: false,
    },
    {
      capability: "enabled",
      destination: " 12 ",
      expected: false,
    },
    {
      capability: "enabled",
      destination: " 16502530000 ",
      expected: true,
    },
  ];

  it.each(eligibilityCases)(
    "$capability capability with '$destination' → $expected",
    ({ capability, destination, expected }) => {
      expect(canSubmitOutboundCall(capability, destination)).toBe(expected);
    },
  );
});

describe("resolveOutboundCapability", () => {
  const normalizationCases: Array<{
    outboundCallsEnabled: boolean | undefined;
    expected: "enabled" | "disabled";
  }> = [
    { outboundCallsEnabled: false, expected: "disabled" },
    { outboundCallsEnabled: true, expected: "enabled" },
    { outboundCallsEnabled: undefined, expected: "enabled" },
  ];

  it.each(normalizationCases)(
    "outboundCallsEnabled $outboundCallsEnabled → $expected",
    ({ outboundCallsEnabled, expected }) => {
      expect(resolveOutboundCapability(outboundCallsEnabled)).toBe(expected);
    },
  );
});
