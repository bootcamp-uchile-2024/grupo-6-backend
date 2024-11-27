import { Encuadernacion } from '../entities/encuadernacion';
import { GeneroEnum } from '../entities/generoEnum';
import { Idioma } from '../entities/idioma';
import { Review } from '../entities/review';
export declare class CreateProductDto {
    isbn: string;
    nombre: string;
    autor: string[];
    stockLibro: number;
    precio: number;
    rating: number;
    genero: GeneroEnum[];
    editorial: string;
    idioma: Idioma;
    encuadernacion: Encuadernacion;
    agnoPublicacion: Date;
    numeroPaginas: number;
    resenas: Review[];
    descuento: number;
    caratula: string;
    dimensiones: string;
    ean: string;
    resumen: string;
}
