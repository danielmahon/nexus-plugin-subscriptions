import { plugin } from '@nexus/schema';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { Settings } from './settings';
import { execute, subscribe } from 'graphql';
import { RuntimeLens } from 'nexus/plugin';

export const schemaPlugin = (
  { ws, ...settings }: Settings,
  project: RuntimeLens
) => {
  return plugin({
    name: 'Nexus Schema Subscription Plugin',
    onAfterBuild: (schema) => {
      const wss = new SubscriptionServer(
        {
          schema,
          execute,
          subscribe,
          ...settings,
        },
        { ...ws }
      );
      wss.server.on('listening', function () {
        project.log.info(`Subscription server is listening on ${ws.path}`);
      });
      wss.server.on('close', function () {
        project.log.info(`Subscription server closed.`);
      });
    },
  });
};
