import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Max, Min } from "class-validator";


export class proConexDTO {

    @ApiProperty({
      description: 'ISBN 13 del libro',
      type: String,
      example: '9788420412146',
    })
    @IsString()
    public isbn: string;
  
    @ApiProperty({
      description: 'Nombre del libro',
      type: String,
      example: 'Don Quijote de la Mancha',
    })
    @IsString()
    public nombre: string;
  
    @ApiProperty({
      description: 'Precio del libro (sin descuento)',
      type: Number,
      minimum: 1,
      maximum: 10000000,
    })
    @IsInt()
    @Min(1)
    @Max(10000000)
    public precio: number;
  
}