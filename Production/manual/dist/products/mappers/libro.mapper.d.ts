import { Libro } from "src/orm/entity/libro";
import { GetProductDto } from "../dto/get-product.dto";
import { GetFilteredProductsDto } from "../dto/get-filtered-products.dto";
export declare class LibroMapper {
    static entityToDto(entity: Libro): GetProductDto;
    static entityListToDtoList(entityList: Libro[]): GetProductDto[];
    static entityToDtoPaginacion(productos: GetProductDto[], totalProductos: number, cantidad: number, pagina: number): GetFilteredProductsDto;
}
