# nexus-plugin-subscriptions <!-- omit in toc -->

**Contents**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Example Usage](#example-usage)
- [Runtime Contributions](#runtime-contributions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br>

## Installation

```
npm install nexus-plugin-subscriptions
```

## Example Usage

```ts
// app.ts

import { use, server, log } from 'nexus';
import { PrismaClient } from 'nexus-plugin-prisma/client';
import { subscriptions } from 'nexus-plugin-subscriptions';
// Your context handler
import { createContext } from './context';

const db = new PrismaClient();

// Nexus plugins
use(
  subscriptions({
    ws: { server: server.raw.http, path: '/subscriptions' },
    keepAlive: 10 * 1000,
    onConnect: async (payload: Record<string, any>) => {
      log.info('client connected');
      return await createContext(payload['authorization'], { db });
    },
    onDisconnect: () => {
      log.info('client disconnected');
    },
  })
);
```

## Runtime Contributions

Provides your generated schema to `nexus-plugin-subscriptions`
