import { ApiProperty } from "@nestjs/swagger";
import { Encuadernacion } from "src/products/entities/encuadernacion";
import { Genero } from "src/products/entities/genero";

export class CreateShoppingcartDto {
    public item: number;
    // @ApiProperty({example: 'El señor de los Anillos: La comunidad del Anillo', description: 'Nombre del libro', default: 'El señor de los Anillos: La comunidad del Anillo' })
    public nombre: string;
    // @ApiProperty({example: ['J.R.R TOLKIEN'], description: 'Autor del libro', default:['J.R.R TOLKIEN']})
    public autor: string[];
    // @ApiProperty({example: 10, description: 'Stock de libros disponibles', default: 10})
    public stockLibro: number;
    @ApiProperty({example: 16000, description: 'Precio del libro', default: 16000})
    public precio: number;
    @ApiProperty({example: ['Fantasía'], description: 'Generos literarios a lo que pertenece el libro', default:['Fantasía']})
    public genero: Genero[];
    @ApiProperty({example: 'Salvat', description: 'Editorial a la que pertenece este libro', default: 'Minotauro'})
    public editorial: string;
    @ApiProperty({example: 'Tapa Dura', description: 'Estilo de tapa que tiene el libro', enum: Encuadernacion, default: "Tapa blanda"})
    public encuadernacion: Encuadernacion;
    @ApiProperty({example: 10, description: '% de descuento en el precio del libro', default: 0})
    public descuento: number;
    @ApiProperty({example: 'src/products/images/9788445009598.webp', description: 'Imagen de caratula del libro', default: 'src/products/images/9788445009598.webp'})
    public caratula: string;
    public cantidad: number;
}
