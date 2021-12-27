import { Body, Controller, Get, Post } from '@nestjs/common';
import { Routes } from '../../config';
import { ClientsService } from './clients.service';
import { Client } from './models/client';

@Controller(Routes.Clients)
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}

  @Get()
  getall() {
    return this.clientService.getAll();
  }

  @Post()
  register(@Body() client: Client) {
    return this.clientService.register(client);
  }
}
