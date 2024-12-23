import { ApiProperty } from "@nestjs/swagger";

export class GetLibroCompraDto {

    @ApiProperty({ description: 'ISBN libro'})
    isbn: string;

    @ApiProperty({ description: 'Cantidad'})
    cantidad: number;

    @ApiProperty({ description: 'Precio con descuento aplicado'})
    precioFinal: number;
}