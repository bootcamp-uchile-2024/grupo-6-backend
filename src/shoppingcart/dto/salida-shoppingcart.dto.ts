import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsNotEmpty, ValidateNested } from 'class-validator';
import { ShoppingcartDto } from './Shoppincart.dto';
import { Type } from 'class-transformer';


export class SalidaShoppingcartDto {

  @IsInt()
  @ApiProperty({example: '2024-05-25', description: 'fecha de actualización'})
  fechaCompra: string;

  @IsInt()
  @ApiProperty({example: '150000', description: 'precio total del carrito'})
  precioTotal: number;

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @ApiProperty({type: ShoppingcartDto, isArray: true})
  @Type(() => ShoppingcartDto)
  productos: ShoppingcartDto[];
}