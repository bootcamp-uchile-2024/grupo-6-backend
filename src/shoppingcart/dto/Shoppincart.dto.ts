import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";



export class ShoppingcartDto {
  
  @IsString()
  @ApiProperty({example: '9788439732471', description: 'ISBN del libro'})
  isbn: string;

  @IsInt()
  @ApiProperty({example: '1', description: 'cantidad de un mismo libro'})
  cantidad: number;

  @IsInt()
  @ApiProperty({example: '1', description: 'precio de un libro'})
  precio: number;

  @IsInt()
  @ApiProperty({example: '1', description: 'descuento de un libro'})
  descuento: number;
}