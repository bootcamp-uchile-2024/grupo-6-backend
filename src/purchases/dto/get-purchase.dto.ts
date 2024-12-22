import { ApiProperty } from "@nestjs/swagger";
import { Direccion } from "src/orm/entity/direccion";
import { LibroCompra } from "src/orm/entity/libro_compra";

export class GetPurchaseDto {

    @ApiProperty({ description: 'ID de la compra'})
    id: number;

    @ApiProperty({ description: 'ID del usuario'})
    id_usuario: number;

    @ApiProperty({ description: 'Estatus de la compra'})
    estatus_compra: string;

    @ApiProperty({ description: 'Fecha donde se realizó la compra'})
    fecha_compra: string;
    
    @ApiProperty({ description: 'Fecha entrega de la compra'})
    fecha_entrega: string;

    @ApiProperty({ description: 'Dirección de entrega del pedido'})
    direccion: Direccion;

    @ApiProperty({ description: 'Productos de la compra' })
    libroCompra: LibroCompra[];
}