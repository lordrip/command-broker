import { Injectable } from '@nestjs/common';
import { Client } from './models/client';
import { ClientStatus } from './models/client-status';

@Injectable()
export class ClientsService {
  private readonly clients = new Map<Client['id'], ClientStatus>();

  getAll(): ClientStatus[] {
    return Array.from(this.clients.values());
  }

  register(client: Client): ClientStatus {
    const clientStatus: ClientStatus = {
      client: {
        id: client.id,
      },
      lastSeen: Date.now(),
    };

    this.clients.set(client.id, clientStatus);

    return clientStatus;
  }
}
