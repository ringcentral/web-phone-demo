import { auto } from "manate/react";
import type InboundCallSession from "ringcentral-web-phone/call-session/inbound";
import type CallSession from "ringcentral-web-phone/call-session/index";
import type OutboundCallSession from "ringcentral-web-phone/call-session/outbound";

import type { Store } from "../../store";

import InboundSession from "./inbound";
import OutboundSession from "./outbound";

const Session = auto((props: { callSession: CallSession; store: Store }) => {
  const { callSession, store } = props;
  return callSession.direction === "inbound" ? (
    <InboundSession session={callSession as InboundCallSession} store={store} />
  ) : (
    <OutboundSession session={callSession as OutboundCallSession} />
  );
});

export default Session;
