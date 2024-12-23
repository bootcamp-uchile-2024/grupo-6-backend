import { ApiProperty } from "@nestjs/swagger";
import { Direccion } from "src/orm/entity/direccion";
import { LibroCompra } from "src/orm/entity/libro_compra";
import { GetLibroCompraDto } from "./get-libro-compra.dto";

export class GetPurchaseDto {

    @ApiProperty({ description: 'ID de la compra'})
    id: number;

    @ApiProperty({ description: 'Estatus de la compra'})
    estatusCompra: string;

    @ApiProperty({ description: 'Fecha donde se realizó la compra'})
    fechaCompra: string;
    
    @ApiProperty({ description: 'Fecha entrega de la compra'})
    fechaEntrega: string;

    @ApiProperty({ description: 'Dirección de entrega del pedido'})
    direccion: Direccion;

    @ApiProperty({ description: 'Productos de la compra.' })
    libroCompra: GetLibroCompraDto[];

    @ApiProperty({ description: 'Costo total del pedido'})
    total: number;
}