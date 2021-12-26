import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './models/client';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getall() {
    return this.clientService.getAll();
  }

  @Post()
  register(@Body() client: Client) {
    return this.clientService.register(client);
  }
}
