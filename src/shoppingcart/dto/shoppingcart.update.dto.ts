import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";



export class ShoppingcartUpdateDto {
    @IsInt()
    @ApiProperty({example: '1', description: 'id del usuario'})
    public idUsuario: number;

    @IsInt()
    @ApiProperty({example: '9788439732471', description: 'ISBN del libro'})
    public isbn: string;

    @IsInt()
    @ApiProperty({example: '1', description: 'cantidad de un mismo libro'})
    public cantidad: number;
  }