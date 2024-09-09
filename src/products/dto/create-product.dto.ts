import { ApiProperty } from "@nestjs/swagger";
import { Encuadernacion } from "../entities/encuadernacion";
import { Genero } from "../entities/genero";
import { Idioma } from "../entities/idioma";
import { Review } from "../entities/review";

export class CreateProductDto {
    @ApiProperty({example: '9788420412146', description: 'ISBN del libro'})
    public isbn: string;
    @ApiProperty({example: 'Don Quijote de la Mancha', description: 'Nombre del libro'})
    public nombre: string;
    @ApiProperty({example: 'Miguel de Cervantes', description: 'Autor de libro'})
    public autor: string[];
    @ApiProperty({example: 50, description: 'Stock'})
    public stockLibro: number;
    @ApiProperty({example: 19000, description: 'Precio del libro'})
    public precio: number;
    public rating: number;

    @ApiProperty({example: [Genero.NOVELA, Genero.CLASICO], description: 'Generos tal como Novela, Clasico, etc.', default: [Genero.NOVELA, Genero.CLASICO], enum: Genero, isArray: true })
    public genero: Genero[];

    @ApiProperty({example: 'Lengua Viva', description: 'Editorial del libro.', default: 'Lengua Viva' })
    public editorial: string;
    @ApiProperty({example: Idioma.ESPANOL, description: 'Idiomas como español, ingles, etc.'})
    public idioma: Idioma;
    @ApiProperty({example: Encuadernacion.TAPA_DURA, description: 'Encuadernacion, puede ser tapa dura, tapa blanda.'})
    public encuadernacion: Encuadernacion;
    @ApiProperty({example: new Date(2015, 0), description: 'Año de publicacion del libro.'})
    public agnoPublicacion: Date;
    @ApiProperty({example: 1376, description: 'Cantidad de paginas del libro.'})
    public numeroPaginas: number;
    public resenas: Review[];
    @ApiProperty({example: 0, description: 'Descuento que tiene el libro.'})
    public descuento: number;
    @ApiProperty({example: '9788420412146.jpg', description: 'Caratula del libro.'})
    public caratula: string;

    @ApiProperty({example: '15cm x 25cm', description: 'Dimensiones del libro en cm (ancho x alto).', default: '15cm x 25cm' })
    public dimensiones: string;
    @ApiProperty({example: '978-8-42-041214-6', description: 'Código de barra del producto en formato EAN-13.'})
    public ean: string;
    @ApiProperty({example: 'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano (...)', description: 'Resumen de libro.', default: 'Sin resumen' })
    public resumen: string;
}
