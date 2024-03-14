/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './modules/clients/clients.module';
import { ConfigService } from './config/config.service';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [ClientsModule, ConfigModule, DatabaseModule, EventsModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
