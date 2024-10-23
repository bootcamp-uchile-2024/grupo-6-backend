import { Encuadernacion } from 'src/products/entities/encuadernacion';
import { GeneroEnum } from 'src/products/entities/generoEnum';
export declare class Shoppingcart {
    isbn: string;
    item: number;
    nombre: string;
    autor: string[];
    stockLibro: number;
    precio: number;
    genero: GeneroEnum[];
    editorial: string;
    encuadernacion: Encuadernacion;
    descuento: number;
    caratula: string;
    cantidad: number;
}
