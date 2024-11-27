import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Direccion } from "src/orm/entity/direccion";
import { HistorialCompra } from "src/orm/entity/historial_compra";
import { Repository } from "typeorm";
export declare class ValidationUpdatePurchasePipe implements PipeTransform {
    private readonly historialCompraRepository;
    private readonly direccionRepository;
    constructor(historialCompraRepository: Repository<HistorialCompra>, direccionRepository: Repository<Direccion>);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
