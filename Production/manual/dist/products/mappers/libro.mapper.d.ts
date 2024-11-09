import { Libro } from "src/orm/entity/libro";
import { ProductDTO } from "../dto/product.dto";
import { GetFilteredProductsDto } from "../dto/get-filtered-products.dto";
export declare class LibroMapper {
    static entityToDto(entity: Libro): ProductDTO;
    static entityListToDtoList(entityList: Libro[]): ProductDTO[];
    static entityToDtoPaginacion(productos: ProductDTO[], totalProductos: number, cantidad: number, pagina: number): GetFilteredProductsDto;
}
