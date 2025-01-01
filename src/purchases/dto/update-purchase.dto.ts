import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdatePurchaseDto {
    @ApiProperty({ description: 'Nuevo estado de compra', example: 'Completada'})
    @IsOptional()
    estatus_compra?: string;

    @ApiProperty({ description: 'Nueva fecha de entrega'})
    @IsOptional()
    @IsDate()
    fecha_entrega?: Date;

    @ApiProperty({ description: 'Nuevo ID de dirección de compra'})
    @IsOptional()
    @IsNumber()
    @Min(1)
    id_direccion_entrega?: number;
}
