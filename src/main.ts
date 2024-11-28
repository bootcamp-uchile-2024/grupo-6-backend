import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BooksFilter } from './books/books.filter';
import { BooksInterceptor } from './books/books.interceptor';

import * as dotenv from 'dotenv';
import { configSwagger } from './config/swagger/swagger.config';
dotenv.config(); 

async function bootstrap() {
  dotenv.config({path: '.env'})
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new BooksInterceptor());
  app.useGlobalFilters(new BooksFilter());
  app.enableCors();
  
  configSwagger(app); // Swagger

  const configService: ConfigService = app.get(ConfigService);
  await app.listen(process.env.PUERTO_NEST ?? 3000);
}

bootstrap();