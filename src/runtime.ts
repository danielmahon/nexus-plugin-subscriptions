import { RuntimePlugin } from 'nexus/plugin';
import { schemaPlugin } from './schema';
import { Settings } from './settings';

export const plugin: RuntimePlugin<Settings, 'required'> = (settings) => (
  project
) => {
  return {
    schema: {
      plugins: [schemaPlugin(settings, project)],
    },
  };
};
