/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './modules/clients/clients.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [ClientsModule, ConfigModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
