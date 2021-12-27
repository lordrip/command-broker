import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { configLoader } from './config';
import { ServerModule } from './server';
import { ClientModule } from './client';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [configLoader],
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    ServerModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
