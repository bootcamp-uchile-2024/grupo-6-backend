import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoModule } from './equipo/equipo.module';
import { ProductsModule } from './products/products.module';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [EquipoModule, ProductsModule, ShoppingcartModule, HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
