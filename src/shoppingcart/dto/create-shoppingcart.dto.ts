import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';


export class CreateShoppingcartDto {

  @IsInt()
  @ApiProperty({example: '1', description: 'id del usuario'})
  public usuario_id: number;

  @IsInt()
  @ApiProperty({example: '1', description: 'id del libro'})
  public libro_id: number;

  @IsInt()
  @ApiProperty({example: '1', description: 'cantidad de un mismo libro'})
  public cantidad: number;
}
