export interface Configuration {
  mode: 'server' | 'client';

  server: {
    port: number;
  };

  client: {
    id: string;
    serverUrl: string;
    keepAliveIntervalMs: number;
  };
}
