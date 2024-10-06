import { Genero } from '../entities/genero';
import { Idioma } from '../entities/idioma';
import { Review } from '../entities/review';
import { Encuadernacion } from '../entities/encuadernacion';
import { Product } from '../entities/product.entity';
export declare class ProductDTO {
    isbn: string;
    nombre: string;
    autor: string[];
    stockLibro: number;
    precio: number;
    rating: number;
    genero: Genero[];
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
    constructor(product: Product);
}
