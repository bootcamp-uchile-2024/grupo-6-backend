import { Module } from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { ShoppingcartController } from './shoppingcart.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [ShoppingcartController],
  providers: [ShoppingcartService],
  imports: [ProductsModule],
})
export class ShoppingcartModule {}
