import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dto";
import { Resena } from "src/orm/entity/resena";

export class CreateValidatedProductDto extends PartialType(CreateProductDto){

    public rating: number;
    public resenas: Resena[];
    public caratula?: string;
    public id_editorial?: number;
    public id_idioma?: number;
    public id_encuadernacion?: number;
    public id_generos?: number[];
    public id_autores?: number[];

}