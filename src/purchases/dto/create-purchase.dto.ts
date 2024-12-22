import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, Matches } from "class-validator";

export class CreatePurchaseDto {

    @ApiProperty({ description: 'ID del carrito de compra'})
    @IsNumber()
    @IsNotEmpty()
    idCarrito: number;

    @ApiProperty({ description: 'ID del método de pago'})
    @IsNumber()
    @IsNotEmpty()
    idMetodoPago: number;

    @ApiProperty({ description: 'ID dirección de entrega' })
    @IsNumber()
    @IsNotEmpty()
    idDireccionEntrega: number;

}
