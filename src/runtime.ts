import { RuntimePlugin } from 'nexus/plugin'

export const plugin: RuntimePlugin = () => project => {
  return {
    context: {
      create: _req => {
        return {
          'nexus-plugin-subscriptions': 'hello world!'
        }
      },
      typeGen: {
        fields: {
          'nexus-plugin-subscriptions': 'string'
        }
      }
    }
  }
}