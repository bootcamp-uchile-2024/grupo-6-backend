import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Direccion } from "src/orm/entity/direccion";
import { Usuario } from "src/orm/entity/usuario";
import { Repository } from "typeorm";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";
import { Carrito } from "src/orm/entity/carrito";
import { HistorialCompra } from "src/orm/entity/historial_compra";
export declare class ValidationCreatePurchasePipe implements PipeTransform {
    private readonly historialCompraRepository;
    private readonly usuarioRepository;
    private readonly direccionRepository;
    private readonly carritoRepository;
    constructor(historialCompraRepository: Repository<HistorialCompra>, usuarioRepository: Repository<Usuario>, direccionRepository: Repository<Direccion>, carritoRepository: Repository<Carrito>);
    transform(value: CreatePurchaseDto, metadata: ArgumentMetadata): Promise<CreatePurchaseDto>;
}
