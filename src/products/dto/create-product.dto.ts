import { ApiProperty } from "@nestjs/swagger";
import { Encuadernacion } from "../entities/encuadernacion";
import { Genero } from "../entities/genero";
import { Idioma } from "../entities/idioma";
import { Review } from "../entities/review";

export class CreateProductDto {
    @ApiProperty({description: 'ISBN del libro'})
    public isbn: string;
    @ApiProperty()
    public nombre: string;
    @ApiProperty()
    public autor: string[];
    @ApiProperty()
    public stockLibro: number;
    @ApiProperty()
    public precio: number;
    @ApiProperty()
    public rating: number;
    @ApiProperty()
    public genero: Genero[];
    @ApiProperty()
    public editorial: string;
    @ApiProperty()
    public idioma: Idioma;
    @ApiProperty()
    public encuadernacion: Encuadernacion;
    @ApiProperty()
    public agnoPublicacion: Date;
    @ApiProperty()
    public numeroPaginas: number;
    @ApiProperty()
    public resenas: Review[];
    @ApiProperty()
    public descuento: number;
    @ApiProperty()
    public caratula: string;

}
