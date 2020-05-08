import { PluginEntrypoint } from 'nexus/plugin';
import { Settings, initialSettings } from './settings';

export const subscriptions: PluginEntrypoint<Settings, 'required'> = (
  settings
) => {
  return {
    settings: { ...initialSettings, ...settings },
    packageJsonPath: require.resolve('../package.json'),
    runtime: {
      module: require.resolve('./runtime'),
      export: 'plugin',
    },
    worktime: {
      module: require.resolve('./worktime'),
      export: 'plugin',
    },
  };
};
