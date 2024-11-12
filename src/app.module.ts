import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksMiddleware } from './books/books.middleware';
import { EquipoModule } from './equipo/equipo.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';
import { UsersModule } from './users/users.module';
import { OrmModule } from './orm/orm.module';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [
    EquipoModule,
    ProductsModule,
    ShoppingcartModule,
    HomeModule,
    ReviewsModule,
    UsersModule,
    OrmModule,
    ConfigModule.forRoot({
      envFilePath: process.env.ARCHIVO_ENV ? `.env.${process.env.ARCHIVO_ENV}` : '.env',
      isGlobal: true,
      validate: (config: Record<string, any>) => {
        if (!config.PORT) {
          throw new Error('PORT is required');
        }
        if (config.PORT == '6000') {
          throw new Error('PORT must be diferent from 6000');
        }
        return {
          PORT: parseInt(config.PORT),
          ENVIROMENT: config.ENVIROMENT,
        };
      },
    }),
    PurchasesModule,
    
  ],
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
