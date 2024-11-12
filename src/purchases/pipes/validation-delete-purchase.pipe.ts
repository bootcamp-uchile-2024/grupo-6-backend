import { ArgumentMetadata, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { HistorialCompra } from "src/orm/entity/historial_compra";
import { Repository } from "typeorm";

export class ValidationDeletePurchasePipe implements PipeTransform {

    constructor (
        @InjectRepository(HistorialCompra)
        private readonly historialCompraRepository: Repository<HistorialCompra>
    ){}

    async transform(value: any, metadata: ArgumentMetadata) {
        
        if (! (await this.historialCompraRepository.existsBy({ id: value }))){
            throw new NotFoundException(`No existe un pedido con ID: ${value}`)
        };
        
        return value;
    }
}