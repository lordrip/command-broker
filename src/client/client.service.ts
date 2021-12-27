import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SchedulerRegistry } from '@nestjs/schedule';
import { catchError, EMPTY } from 'rxjs';
import { Configuration, Routes } from '../config';
import { Client } from '../server/clients/models';

@Injectable()
export class ClientService {
  private readonly config: Configuration;

  constructor(
    private readonly configService: ConfigService,
    private readonly schedulerRegistry: SchedulerRegistry,
    private readonly httpService: HttpService,
  ) {
    this.config = this.configService.get<Configuration>('config');
    this.wireUp();
  }

  wireUp() {
    if (this.config.mode !== 'client') {
      return;
    }

    const keepAliveInterval = setInterval(
      this.keepAlive.bind(this),
      this.config.client.keepAliveIntervalMs,
    );
    this.schedulerRegistry.addInterval('keepAlive', keepAliveInterval);
  }

  private keepAlive(): void {
    const url = new URL(Routes.Clients, this.config.client.serverUrl).href;
    const client: Client = {
      id: this.config.client.id,
    };

    Logger.log(url);

    this.httpService
      .post(url, client)
      .pipe(
        catchError((error) => {
          Logger.log(error);

          return EMPTY;
        }),
      )
      .subscribe();
  }
}
