import { ApiProperty } from "@nestjs/swagger";

export class CreatePurchaseDto {
    @ApiProperty({ description: 'ID de la compra'})
    id: number;

    @ApiProperty({ description: 'ID del usuario que genera compra' })
    id_usuario: number;

    @ApiProperty({ description: 'ID dirección de entrega' })
    id_direccion_entrega: number;

}
