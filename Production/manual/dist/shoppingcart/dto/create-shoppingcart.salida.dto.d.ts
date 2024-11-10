import { Autor } from "src/orm/entity/autor";
export declare class ShoppingcartSalidaDto {
    cantidad: number;
    nombre: string;
    autor: Autor[];
    precio: number;
    caratula: string;
}
