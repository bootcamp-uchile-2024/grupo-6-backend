import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
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
import { ServeStaticModule } from '@nestjs/serve-static';
import { SeguridadModule } from './seguridad/seguridad.module';
import * as path from 'path';
import { ContrasenaMiddleware } from './users/middleware/contrasena.middleware';

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
      isGlobal: true,
      envFilePath: process.env.ARCHIVO_ENV ? `.env.${process.env.ARCHIVO_ENV}` : '.env',
      validate: (config: Record<string, any>) => {
        if (!config.PUERTO_NEST) {
          throw new Error('Port Nest is required');
        }
        if (config.PUERTO_NEST == '6000') {
          throw new Error('Port Nest must be diferent from 6000');
        }
        return {
          PUERTO_NEST: parseInt(config.PUERTO_NEST),
          ENVIROMENT: config.ENVIROMENT,
        };
      },
    }),
    PurchasesModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'estatics'),
      serveRoot: '/cover',
      }),
    SeguridadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BooksMiddleware)
      .exclude(
        { path: 'users/login', method: RequestMethod.POST },
        { path: 'users/signUp', method: RequestMethod.POST },
        { path: 'users', method: RequestMethod.PUT }
     ) 
      .forRoutes('*');
    consumer
      .apply(ContrasenaMiddleware)
      .forRoutes(        
        { path: 'users/login', method: RequestMethod.POST },
        { path: 'users', method: RequestMethod.PUT },
        { path: 'users/signUp', method: RequestMethod.POST }); 
  }
}