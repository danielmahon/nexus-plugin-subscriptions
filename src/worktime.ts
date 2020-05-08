import { WorktimePlugin } from 'nexus/plugin';
import { Settings } from './settings';

export const plugin: WorktimePlugin<Settings> = (_settings) => (project) => {
  project.hooks.dev.onStart = async () => {
    project.log.info('dev.onStart hook from subscriptions');
  };
  project.hooks.dev.onBeforeWatcherRestart = async () => {
    project.log.info('dev.onBeforeWatcherRestart hook from subscriptions');
  };
  project.hooks.dev.onAfterWatcherRestart = async () => {
    project.log.info('dev.onAfterWatcherRestart hook from subscriptions');
  };
  project.hooks.dev.onBeforeWatcherStartOrRestart = async () => {
    project.log.info(
      'dev.onBeforeWatcherStartOrRestart hook from subscriptions'
    );
  };
  project.hooks.build.onStart = async () => {
    project.log.info('build.onStart hook from subscriptions');
  };
};
