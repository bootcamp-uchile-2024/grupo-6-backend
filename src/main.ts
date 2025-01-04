import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BooksFilter } from './books/books.filter';
import { BooksInterceptor } from './books/books.interceptor';

import * as dotenv from 'dotenv';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { configSwagger } from './config/swagger/swagger.config';
import { ValidationPipe } from '@nestjs/common';
const DailyRotateFile = require('winston-daily-rotate-file');
dotenv.config(); 
const isProduction = process.env.NODE_ENV == 'production';

async function bootstrap() {

  dotenv.config({path: '.env'})
  const app = await NestFactory.create(AppModule,{
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          level: process.env.LOG_LEVEL ?? 'verbose',
          format: winston.format.combine(
            nestWinstonModuleUtilities.format.nestLike('APP', { colors: true, prettyPrint: true }),
            winston.format.colorize({message: true, level: true, colors:{
              info: 'green',
              error: 'red',
              warn: 'yellow',
              debug: 'blue',
              verbose: 'cyan',
              silly: 'magenta',
            }, all: true
            }),
            winston.format.timestamp({ format: ' YYYY-MM-DD HH:mm:ss.SSS'}),
            winston.format.printf(({timestamp, level, message}) => {
              return `${timestamp} [${level}]  ${message}`; 
            })
          )
        }),
        ...(isProduction
          ? [
              new DailyRotateFile({
                level: 'info',
                datePattern: 'YYYY-MM-DD',
                filename: `logs/%DATE%-nest.log`,
                maxFiles: '14d', // Mantener logs de 14 días
              }),
            ]
      : []),
      ]
    })
  });
  app.useGlobalInterceptors(new BooksInterceptor());
  app.useGlobalFilters(new BooksFilter());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }))
  
  configSwagger(app); // Swagger

  const configService: ConfigService = app.get(ConfigService);
  await app.listen(process.env.PUERTO_NEST);
}

bootstrap();