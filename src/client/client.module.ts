import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClientService } from './client.service';

@Module({
  imports: [HttpModule],
  providers: [ClientService],
})
export class ClientModule {}
