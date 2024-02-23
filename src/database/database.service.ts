/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { Configuration } from './../config/configuration.keys';
import * as dotenv from 'dotenv';
//const globalVars = dotenv.config();

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService): Promise<TypeOrmModuleOptions> {
      return {
        type: 'mysql' as 'mysql',
        host: config.get(Configuration.DB_HOST),
        username: config.get(Configuration.DB_USER),
        port: parseInt(config.get(Configuration.DB_PORT)) | 3306,
        database: config.get(Configuration.DB_NAME),
        password: config.get(Configuration.DB_PASSWORD),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
        retryDelay: 3000,
        retryAttempts: 10,
        /*ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },*/
      };
    },
  }),
];
