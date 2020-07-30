import { ServerOptions } from 'subscriptions-transport-ws';
import WebSocket from 'ws';

export type Settings = ServerOptions & {
  ws: WebSocket.ServerOptions;
};

export const initialSettings = {
  ws: { path: '/subscriptions' },
};
