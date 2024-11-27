import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';
import { ProductsModule } from './products/products.module';
import { BooksInterceptor } from './books/books.interceptor';
import { BooksFilter } from './books/books.filter';
import { ConfigService } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { PurchasesModule } from './purchases/purchases.module';
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