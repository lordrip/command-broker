import { Configuration } from './config.model';

export const configLoader = (): { config: Configuration } => ({
  config: {
    mode: process.env.MODE === 'server' ? 'server' : 'client',

    server: {
      port: Number.parseInt(process.env.PORT, 10) || 3_000,
    },

    client: {
      id: process.env.CLIENT_ID,
      serverUrl: process.env.SERVER_URL,
      keepAliveIntervalMs:
        Number.parseInt(process.env.KEEP_ALIVE_INTERVAL_MS, 10) || 30,
    },
  },
});
