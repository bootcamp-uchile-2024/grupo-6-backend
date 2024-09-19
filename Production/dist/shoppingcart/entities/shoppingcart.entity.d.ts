import { Encuadernacion } from 'src/products/entities/encuadernacion';
import { Genero } from 'src/products/entities/genero';
export declare class Shoppingcart {
    isbn: string;
    item: number;
    nombre: string;
    autor: string[];
    stockLibro: number;
    precio: number;
    genero: Genero[];
    editorial: string;
    encuadernacion: Encuadernacion;
    descuento: number;
    caratula: string;
    cantidad: number;
}
