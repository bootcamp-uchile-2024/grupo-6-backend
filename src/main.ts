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
dotenv.config(); 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService: ConfigService = app.get(ConfigService);

  app.useGlobalInterceptors(new BooksInterceptor());
  app.useGlobalFilters(new BooksFilter());


  const title = `${process.env.npm_package_name.replaceAll("-", " ")} - Módulo ${configService.get("ENVIROMENT")}`;
  const description = process.env.npm_package_description;
  const version = process.env.npm_package_version;
  const authorName = process.env.npm_package_author_name;
  const authorUrl = process.env.npm_package_author_url;
  const authorEmail = process.env.npm_package_author_email;
  const licence = process.env.npm_package_license;

  //console.log('AMBIENTE:', configService.get("ENVIROMENT"));
  //console.log('PUERTO:', configService.get("PORT"));

  const configApp = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .setContact(authorName, authorUrl, authorEmail)
    .setLicense(licence, "")
    .addTag('App')
    .build();

  const configProducts = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .setContact(authorName, authorUrl, authorEmail)
    .setLicense(licence, "")
    .addTag('Products')
    .build();

  const configShoppingcart = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .setContact(authorName, authorUrl, authorEmail)
    .setLicense(licence, "")
    .addTag('Shoppingcart')
    .build();

  const configUser = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .setContact(authorName, authorUrl, authorEmail)
    .setLicense(licence, "")
    .addTag('Users')
    .build();

    const configPurchase = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .setContact(authorName, authorUrl, authorEmail)
    .setLicense(licence, "")
    .addTag('Purchases')
    .build();

  const documentApp = SwaggerModule.createDocument(app, configApp);
  const documentProducts = SwaggerModule.createDocument(
    app, 
    configProducts, 
    { 
      include: [ProductsModule] 
    }
  );
  const documentShoppincart = SwaggerModule.createDocument(
    app,
    configShoppingcart,
    {
      include: [ShoppingcartModule],
    }
  );
  const documentUsers = SwaggerModule.createDocument(
    app,
    configUser,
    {
      include: [UsersModule],
    }
  );
  const documentPurchases = SwaggerModule.createDocument(
    app,
    configPurchase,
    {
      include: [PurchasesModule],
    }
  );

  SwaggerModule.setup('api', app, documentApp);
  SwaggerModule.setup('api/products', app, documentProducts);
  SwaggerModule.setup('api/shoppingcart', app, documentShoppincart);
  SwaggerModule.setup('api/users', app, documentUsers);
  SwaggerModule.setup('api/purchases', app, documentPurchases);

  await app.listen(configService.get('PUERTO_NEST')); //process.env.PUERTO_NESTJS
}
bootstrap();
