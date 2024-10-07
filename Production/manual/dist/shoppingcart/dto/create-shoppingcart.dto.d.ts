import { Encuadernacion } from 'src/products/entities/encuadernacion';
export declare class CreateShoppingcartDto {
    isbn: string;
    item: number;
    nombre: string;
    autor: string[];
    stockLibro: number;
    precio: number;
    editorial: string;
    encuadernacion: Encuadernacion;
    descuento: number;
    caratula: string;
    cantidad: number;
}
