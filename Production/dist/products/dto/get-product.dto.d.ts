import { EncuadernacionEnum } from '../entities/encuadernacionEnum';
import { GeneroEnum } from '../entities/generoEnum';
import { Idioma } from '../entities/idioma';
import { CreateProductDto } from './create-product.dto';
import { Resena } from 'src/orm/entity/resena';
declare const GetProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class GetProductDto extends GetProductDto_base {
    id: number;
    isbn: string;
    nombre: string;
    autor: string[];
    stockLibro: number;
    precio: number;
    rating: number;
    genero: GeneroEnum[];
    editorial: string;
    idioma: Idioma;
    encuadernacion: EncuadernacionEnum;
    agnoPublicacion: number;
    numeroPaginas: number;
    resenas: Resena[];
    descuento: number;
    caratula: string;
    dimensiones: string;
    ean: string;
    resumen: string;
}
export {};
