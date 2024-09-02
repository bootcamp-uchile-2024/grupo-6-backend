import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';
import { ProductsModule } from './products/products.module';
import { BooksInterceptor } from './books/books.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new BooksInterceptor());

  const configApp = new DocumentBuilder()
    .setTitle('API Páginas Selectas Backend')
    .setDescription('Esta api describe la app general del e-commerce Páginas Selectas, para ir a productos localhost:3000/api/porducts, para ir a carrito de compras localhost:3000/api/shoppingcart')
    .setVersion('1.0.0')
    .addTag('App')
    .build();

    const configProducts = new DocumentBuilder()
    .setTitle('API Páginas Selectas Backend')
    .setDescription('Esta api describe el apartado de products del e-commerce Páginas Selectas')
    .setVersion('1.0.0')
    .addTag('Products')
    .build();

  const configShoppingcart = new DocumentBuilder()
    .setTitle('API Páginas Selectas Backend')
    .setDescription('Esta api describe el apartado de Shoppincart del e-commerce Páginas Selectas')
    .setVersion('1.0.0')
    .addTag('Shoppingcart')
    .build();

  const documentApp = SwaggerModule.createDocument(app, configApp);
  const documentProducts = SwaggerModule.createDocument(app, configProducts, {
    include: [ProductsModule]
  });
  const documentShoppincart = SwaggerModule.createDocument(app, configShoppingcart, {
    include: [ShoppingcartModule]
  })

  SwaggerModule.setup('api', app, documentApp);

  SwaggerModule.setup('api/products', app, documentProducts)

  SwaggerModule.setup('api/shoppingcart', app, documentShoppincart);

  await app.listen(3000);

}
bootstrap();
