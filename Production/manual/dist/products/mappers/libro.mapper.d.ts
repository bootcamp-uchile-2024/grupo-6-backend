import { Libro } from "src/orm/entity/libro";
import { ProductDTO } from "../dto/product.dto";
export declare class LibroMapper {
    static entityToDto(entity: Libro): ProductDTO;
    static entityListToDtoList(entityList: Libro[]): ProductDTO[];
}
