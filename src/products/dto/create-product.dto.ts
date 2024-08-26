import { ApiProperty } from "@nestjs/swagger";
import { Encuadernacion } from "../entities/encuadernacion";
import { Genero } from "../entities/genero";
import { Idioma } from "../entities/idioma";
import { Review } from "../entities/review";

export class CreateProductDto {
    @ApiProperty({example: '9788420412146', description: 'ISBN del libro', default: '9788420412146' })
    public isbn: string;
    @ApiProperty({example: 'Don Quijote de la Mancha', description: 'Nombre del libro', default: 'Don Quijote de la Mancha' })
    public nombre: string;
    @ApiProperty({example: 'Miguel de Cervantes', description: 'Autor de libro', default: 'Miguel de Cervantes' })
    public autor: string[];
    @ApiProperty({example: 50, description: 'Stock', default: 50 })
    public stockLibro: number;
    @ApiProperty({example: 19000, description: 'Precio del libro', default: 19000 })
    public precio: number;
    public rating: number;
    @ApiProperty({example: [Genero.NOVELA, Genero.CLASICO], description: 'Generos tal como Novela, Clasico, etc.', default: [Genero.NOVELA, Genero.CLASICO] })
    public genero: Genero[];
    @ApiProperty({example: 'Lengua Viva', description: 'Editorial del libro.', default: 'Lengua Viva' })
    public editorial: string;
    @ApiProperty({example: Idioma.ESPANOL, description: 'Idiomas como español, ingles, etc.', default: Idioma.ESPANOL})
    public idioma: Idioma;
    @ApiProperty({example: Encuadernacion.TAPA_DURA, description: 'Encuadernacion, puede ser tapa dura, tapa blanda.', default: Encuadernacion.TAPA_DURA })
    public encuadernacion: Encuadernacion;
    @ApiProperty({example: new Date(2015, 0), description: 'Año de publicacion del libro.', default: new Date(2015, 0) })
    public agnoPublicacion: Date;
    @ApiProperty({example: 1376, description: 'Cantidad de paginas del libro.', default: 1376 })
    public numeroPaginas: number;
    public resenas: Review[];
    @ApiProperty({example: 0, description: 'Descuento que tiene el libro.', default: 0 })
    public descuento: number;
    @ApiProperty({example: '9788420412146.jpg', description: 'Caratula del libro.', default: '9788420412146.jpg' })
    public caratula: string;

}
