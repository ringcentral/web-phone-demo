# RingCentral WebPhone Demo 2

This is the official demo for RingCentral Web Phone SDK 2.0.

## Answering inbound calls

**Answer** uses the Web Phone SDK’s normal answering operation. **API Answer**,
available as the last action while an inbound call is ringing, demonstrates the
[Call Control REST API](https://developers.ringcentral.com/api-reference/Call-Control/answerCallParty)
outside the SDK’s core features. It targets the current browser phone using its
provisioned device ID.

For API Answer, the SIP server cancels the original ringing call and sends a new
INVITE with auto-answer signaling. The SDK handles this replacement call using
the demo’s existing auto-answer configuration; once connected, the usual
answered-call controls apply.

The base app permissions are **VoipCalling** and **ReadAccounts**. Add
**CallControl** for the optional Call Control API demonstrations, including API
Answer. Normal SDK Answer does not require this additional permission.
