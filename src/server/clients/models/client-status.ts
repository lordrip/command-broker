import { Client } from './client';

export interface ClientStatus {
  client: Client;
  lastSeen: number;
}
