import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingcartService } from './shoppingcart.service';

describe('ShoppingcartService', () => {
  let service: ShoppingcartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingcartService],
    }).compile();

    service = module.get<ShoppingcartService>(ShoppingcartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
