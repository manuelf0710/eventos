/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './modules/clients/clients.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    /*TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'eventos_user',
      password: 'g@RDlRJ-CIlubGV',
      database: 'eventos',
      autoLoadEntities: true,
      synchronize: true,
    }), */
    ClientsModule,
    ConfigModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
