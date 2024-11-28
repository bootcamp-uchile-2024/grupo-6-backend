import { Libro } from "src/orm/entity/libro";
import { CreateValidatedProductDto } from "../dto/create-validated-product.dto";
import { GetFilteredProductsDto } from "../dto/get-filtered-products.dto";
import { GetProductDto } from "../dto/get-product.dto";
export declare class LibroMapper {
    static dtoToEntity(dto: CreateValidatedProductDto): Libro;
    static entityToDto(entity: Libro): GetProductDto;
    static entityListToDtoList(entityList: Libro[]): GetProductDto[];
    static entityToDtoPaginacion(productos: GetProductDto[], totalProductos: number, cantidad: number, pagina: number): GetFilteredProductsDto;
}
