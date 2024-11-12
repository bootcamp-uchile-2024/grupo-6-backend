import { GetProductDto } from "./get-product.dto";
export declare class GetFilteredProductsDto {
    totalProductos: number;
    totalPaginas: number;
    nroPagina: number;
    productos: GetProductDto[];
}
