import * as HTTP from 'http';
import { GraphQLSchema } from 'graphql';

export type Settings = {
  httpServer: HTTP.Server;
  path?: string;
  onAfterBuild?: (schema: GraphQLSchema) => void;
  onConnect?: () => void;
  onDisconnect?: () => void;
};

export const initialSettings = {
  path: '/graphql',
};
