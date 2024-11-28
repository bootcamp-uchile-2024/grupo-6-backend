import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';


export class CreateShoppingcartDto {

  @IsInt()
  @ApiProperty({example: '1', description: 'id del usuario'})
  public idUsuario: number;

  @IsInt()
  @ApiProperty({example: '1', description: 'id del libro'})
  public isbn: number;

  @IsInt()
  @ApiProperty({example: '1', description: 'cantidad de un mismo libro'})
  public cantidad: number;

  /*@IsInt()
  @ApiProperty({example: '1', description: 'precio de un libro'})
  public precio: number;

  @IsInt()
  @ApiProperty({example: '1', description: 'descuento de un libro'})
  public descuento: number;*/
}
