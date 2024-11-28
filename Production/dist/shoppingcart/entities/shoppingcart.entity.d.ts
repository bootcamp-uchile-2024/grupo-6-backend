import { EncuadernacionEnum } from 'src/products/entities/encuadernacionEnum';
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
    encuadernacion: EncuadernacionEnum;
    descuento: number;
    caratula: string;
    cantidad: number;
}
