import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { HistorialCompra } from "src/orm/entity/historial_compra";
import { Repository } from "typeorm";
export declare class ValidationFindPurchasePipe implements PipeTransform {
    private readonly historialCompraRepository;
    constructor(historialCompraRepository: Repository<HistorialCompra>);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
