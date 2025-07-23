import { auto } from "manate/react";
import React from "react";
import type CallSession from "ringcentral-web-phone/call-session/index";
import type InboundCallSession from "ringcentral-web-phone/call-session/inbound";
import type OutboundCallSession from "ringcentral-web-phone/call-session/outbound";

import InboundSession from "./inbound";
import OutboundSession from "./outbound";

const Session = auto((props: { callSession: CallSession }) => {
  const { callSession } = props;
  return callSession.direction === "inbound"
    ? <InboundSession session={callSession as InboundCallSession} />
    : <OutboundSession session={callSession as OutboundCallSession} />;
});

export default Session;
