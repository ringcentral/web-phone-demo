import React, { useEffect } from 'react';
import { auto } from 'manate/react';
import { Button, Divider, Empty, Form, Input, Select, Space, Typography } from 'antd';
import type { Managed } from 'manate/models';
import { autoRun } from 'manate';

import type { Store } from '../store';
import CallSession from './call-session';

const Phone = auto((props: { store: Managed<Store> }) => {
  const { store } = props;
  const [callee, setCallee] = React.useState<string>('');
  const [callerId, setCallerId] = React.useState<string>('');
  useEffect(() => {
    const { start, stop } = autoRun(store, () => {
      if (callerId === '' && store.callerIds.length > 0) {
        setCallerId(store.callerIds[0]);
      }
    });
    start();
    return () => stop();
  }, []);
  return (
    <>
      <Button id="logout-btn" onClick={() => store.logout()}>
        Log out
      </Button>
      <Space direction="vertical" style={{ display: 'flex' }}>
        <Divider>Inbound Call</Divider>
        <Typography.Text>
          Logged in as{' '}
          <strong>
            {store.extInfo?.contact?.firstName} {store.extInfo?.contact?.lastName}
          </strong>
          . You may dial <strong>{store.primaryNumber}</strong> to reach this web phone.
        </Typography.Text>
        <Divider>Outbound Call</Divider>
        <Space>
          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Form.Item label="From">
              <Select
                value={callerId}
                onChange={(value) => setCallerId(value)}
                style={{ width: '10rem' }}
                options={store.callerIds.map((n) => ({ value: n, label: <span>{n}</span> }))}
              />
            </Form.Item>
            <Form.Item label="To">
              <Input
                placeholder="16501234567"
                style={{ width: '10rem' }}
                onChange={(e) => setCallee(e.target.value.trim())}
                value={callee}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                onClick={() => store.webPhone.call(callee, callerId)}
                disabled={callee.trim().length < 3}
                block
              >
                Call
              </Button>
            </Form.Item>
          </Form>
        </Space>
        <Divider>Call Sessions</Divider>
        {store.webPhone && (
          <>
            {store.webPhone.callSessions.map((callSession) => (
              <div key={callSession.callId}>
                <CallSession callSession={callSession} />
              </div>
            ))}
            {store.webPhone.callSessions.length === 0 && (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No sessions" />
            )}
            {!store.webPhone.callSessions.find((s) => s.isConference) && (
              <>
                <Divider />
                <Button onClick={() => store.startConference()}>Start a conference</Button>
              </>
            )}
          </>
        )}
      </Space>
    </>
  );
});

export default Phone;
