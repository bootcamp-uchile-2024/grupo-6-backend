import { Encuadernacion } from './encuadernacion';
import { GeneroEnum } from './generoEnum';
import { Idioma } from './idioma';
import { Review } from './review';
export declare class Product {
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
    constructor(isbn: string, nombre: string, autor: string[], stockLibro: number, precio: number, genero: GeneroEnum[], editorial: string, idioma: Idioma, encuadernacion: Encuadernacion, agnoPublicacion: Date, numeroPaginas: number, descuento: number, caratula: string, dimensiones: string, ean: string, resumen: string);
}
