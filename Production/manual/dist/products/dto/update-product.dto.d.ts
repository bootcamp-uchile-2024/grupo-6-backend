import { CreateProductDto } from './create-product.dto';
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    nombre?: string;
    stock_libro?: number;
    precio?: number;
    rating?: number;
    id_editorial?: number;
    id_idioma?: number;
    id_encuadernacion?: number;
    agno_publicacion?: Date;
    numero_paginas?: number;
    descuento?: number;
    caratula?: string;
    dimensiones?: string;
    codigo_barra?: string;
    resumen?: string;
}
export {};
