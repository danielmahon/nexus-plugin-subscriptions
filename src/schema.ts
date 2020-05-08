import { plugin } from '@nexus/schema';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { Settings } from './settings';
import { execute, subscribe } from 'graphql';
import { RuntimeLens } from 'nexus/plugin';

export const schemaPlugin = (settings: Settings, project: RuntimeLens) => {
  return plugin({
    name: 'Nexus Schema Subscription Plugin',
    onAfterBuild: (schema) => {
      if (settings.onAfterBuild) {
        settings.onAfterBuild(schema);
      } else {
        const wss = SubscriptionServer.create(
          {
            schema,
            execute,
            subscribe,
            onConnect: settings.onConnect,
            onDisconnect: settings.onDisconnect,
          },
          { server: settings.httpServer, path: settings.path }
        );
        wss.server.on('listening', function () {
          project.log.info(
            `Subscription server is listening on ${settings.path}`
          );
        });
        wss.server.on('close', function () {
          project.log.info(`Subscription server closed.`);
        });
      }
    },
  });
};
