import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, Matches } from "class-validator";
import { MetodoPagoEnum } from "../entities/metodoPago.enum";

export class CreatePurchaseDto {

    @ApiProperty({ 
        description: 'Método de pago',
        enum: [
            'Tarjeta débito/crédito',
            'Transferencia bancaria',
            'Webpay',
        ],
        example: 'Webpay',
    })
    @IsEnum(MetodoPagoEnum, {
        message: 'El método de pago debe ser uno de los siguientes valores: Tarjeta débito/crédito, Transferencia bancaria, Webpay'
    })
    @IsNotEmpty()
    metodoPago: MetodoPagoEnum;

    @ApiProperty({ description: 'ID dirección de entrega' })
    @IsNumber()
    @IsNotEmpty()
    idDireccionEntrega: number;

}
