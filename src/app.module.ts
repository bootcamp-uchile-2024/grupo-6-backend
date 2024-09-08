import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoModule } from './equipo/equipo.module';
import { ProductsModule } from './products/products.module';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';
import { HomeModule } from './home/home.module';
import { BooksMiddleware } from './books/books.middleware';
import { UsersModule } from './users/users.module';

@Module({
  imports: [EquipoModule, ProductsModule, ShoppingcartModule, HomeModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  consumer
  .apply(BooksMiddleware) // MIDDLEWARE A APLICAR
  .forRoutes('*'); // RUTAS A LAS QUE APLICA
  }
  }
