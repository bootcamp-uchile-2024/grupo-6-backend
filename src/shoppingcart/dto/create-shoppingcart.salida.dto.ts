import { ApiProperty } from "@nestjs/swagger";
import { Autor } from "src/orm/entity/autor";


export class ShoppingcartSalidaDto {
    @ApiProperty({example: '2', description: 'id de un usuario'})
    public idUsuario: number;
  
    @ApiProperty({example: '1', description: 'cantidad de un mismo libro'})
    public cantidad: number;
  
    @ApiProperty({example: 'El señor de los Anillos: La comunidad del Anillo', description: 'Nombre del libro'})
    public nombre: string;
  
    @ApiProperty({example: ['J.R.R TOLKIEN'], description: 'Autor del libro'})
    public autor: Autor[];
  
    @ApiProperty({example: 10, description: 'Stock de libros disponibles'})
    public stockLibro: number;
  
    @ApiProperty({ example: 16000, description: 'Precio del libro' })
    public precio: number;
    
    @ApiProperty({ example: 3, description: 'Descuento del libro' })
    public descuento: number;
  
    @ApiProperty({
      example: '${HOST}:${PORT}/cover/1984.jpg',
      description: 'Imagen de caratula del libro',
    })
    public caratula: string;
  
    
  }