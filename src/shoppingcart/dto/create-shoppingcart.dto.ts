import { ApiProperty } from "@nestjs/swagger";
import { Encuadernacion } from "src/products/entities/encuadernacion";
import { Genero } from "src/products/entities/genero";

export class CreateShoppingcartDto {
    public isbn: string;
    public item: number;
    // @ApiProperty({example: 'El señor de los Anillos: La comunidad del Anillo', description: 'Nombre del libro'})
    public nombre: string;
    // @ApiProperty({example: ['J.R.R TOLKIEN'], description: 'Autor del libro'})
    public autor: string[];
    // @ApiProperty({example: 10, description: 'Stock de libros disponibles'})
    public stockLibro: number;
    @ApiProperty({example: 16000, description: 'Precio del libro'})
    public precio: number;
    @ApiProperty({example: ['Fantasía'], description: 'Generos literarios a lo que pertenece el libro'})
    public genero: Genero[];
    @ApiProperty({example: 'Salvat', description: 'Editorial a la que pertenece este libro'})
    public editorial: string;
    @ApiProperty({example: 'Tapa Dura', description: 'Estilo de tapa que tiene el libro', enum: Encuadernacion})
    public encuadernacion: Encuadernacion;
    @ApiProperty({example: 10, description: '% de descuento en el precio del libro'})
    public descuento: number;
    @ApiProperty({example: 'src/products/images/9788445009598.webp', description: 'Imagen de caratula del libro'})
    public caratula: string;
    public cantidad: number;
}
