import { EncuadernacionEnum } from '../entities/encuadernacionEnum';
import { Idioma } from '../entities/idioma';
import { GeneroEnum } from '../entities/generoEnum';
export declare class CreateProductDto {
    isbn: string;
    nombre: string;
    autor: string[];
    stockLibro: number;
    precio: number;
    genero: GeneroEnum[];
    editorial: string;
    idioma: Idioma;
    encuadernacion: EncuadernacionEnum;
    agnoPublicacion: number;
    numeroPaginas: number;
    descuento: number;
    dimensiones: string;
    ean: string;
    resumen: string;
}
