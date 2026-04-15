import { notification, Typography } from "antd";
import { auto } from "manate/react";
import React from "react";

import { RINGCENTRAL_WEB_PHONE_VERSION } from "../generated/versions";
import type { Store } from "../store";
import Login from "./login";
import Phone from "./phone";

const App = auto((props: { store: Store }) => {
  const { store } = props;
  const [api, contextHolder] = notification.useNotification();
  globalThis.notifier = api;
  return (
    <>
      {contextHolder}
      <Typography.Title>
        RingCentral Web Phone SDK {RINGCENTRAL_WEB_PHONE_VERSION} Demo
      </Typography.Title>
      {store.rcToken === "" ? <Login store={store} /> : <Phone store={store} />}
    </>
  );
});

export default App;
