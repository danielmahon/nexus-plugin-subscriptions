import { GraphQLSchema } from 'graphql';
import { ServerOptions } from 'subscriptions-transport-ws';
import WebSocket from 'ws';

export type Settings = {
  onAfterBuild?: (schema: GraphQLSchema) => void;
  server: WebSocket.ServerOptions['server'];
  path?: WebSocket.ServerOptions['path'];
  onConnect?: ServerOptions['onConnect'];
  onDisconnect?: ServerOptions['onDisconnect'];
  onOperation?: ServerOptions['onOperation'];
};

export const initialSettings = {
  path: '/graphql',
};
