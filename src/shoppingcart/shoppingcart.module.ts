import { Module } from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { ShoppingcartController } from './shoppingcart.controller';

@Module({
  controllers: [ShoppingcartController],
  providers: [ShoppingcartService],
})
export class ShoppingcartModule {}
