import { PartialType } from '@nestjs/mapped-types';
import { CreateShoppingcartDto } from './create-shoppingcart.dto';

export class UpdateShoppingcartDto extends PartialType(CreateShoppingcartDto) {}
