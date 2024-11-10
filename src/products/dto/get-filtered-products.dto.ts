import { ApiProperty } from "@nestjs/swagger"
import { ProductDTO } from "./product.dto";

export class GetFilteredProductsDto {
    @ApiProperty({description: 'Cantidad total de productos existentes', type: Number})
    public totalProductos: number;

    @ApiProperty({description: 'Número total de páginas', type: Number})
    totalPaginas: number;

    @ApiProperty({description: 'Número de página entregada', type: Number})
    nroPagina: number;

    @ApiProperty({description: 'Lista de productos según paginación', type: [ProductDTO]})
    productos: ProductDTO[];

}