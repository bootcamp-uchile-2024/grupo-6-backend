import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingcartController } from './shoppingcart.controller';
import { ShoppingcartService } from './shoppingcart.service';

describe('ShoppingcartController', () => {
  let controller: ShoppingcartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingcartController],
      providers: [ShoppingcartService],
    }).compile();

    controller = module.get<ShoppingcartController>(ShoppingcartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
