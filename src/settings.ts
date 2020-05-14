import { GraphQLSchema } from 'graphql';
import { ServerOptions } from 'subscriptions-transport-ws';
import WebSocket from 'ws';

export type Settings = ServerOptions & {
  onAfterBuild?: (schema: GraphQLSchema) => void;
  ws: WebSocket.ServerOptions;
};

export const initialSettings = {
  ws: { path: '/subscriptions' },
};
