import { Module } from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { ShoppingcartController } from './shoppingcart.controller';
import { ProductsModule } from 'src/products/products.module';
import { Carrito } from 'src/orm/entity/carrito';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from 'src/orm/entity/libro';

@Module({
  imports: [TypeOrmModule.forFeature([
    Carrito,
    Libro
  ])],
  controllers: [ShoppingcartController],
  providers: [ShoppingcartService],
  //imports: [ProductsModule],
})
export class ShoppingcartModule {}
