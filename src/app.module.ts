import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    ClientModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
