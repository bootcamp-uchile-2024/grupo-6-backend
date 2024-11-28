import { CreateProductDto } from "./create-product.dto";
import { Resena } from "src/orm/entity/resena";
declare const CreateValidatedProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class CreateValidatedProductDto extends CreateValidatedProductDto_base {
    rating: number;
    resenas: Resena[];
    caratula?: string;
    id_editorial?: number;
    id_idioma?: number;
    id_encuadernacion?: number;
    id_generos?: number[];
    id_autores?: number[];
}
export {};
