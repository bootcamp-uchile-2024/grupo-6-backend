import { PartialType } from '@nestjs/swagger';
import { CreateOrderHistoryDto } from './create-order-history.dto';

export class UpdateOrderHistoryDto extends PartialType(CreateOrderHistoryDto) {}
