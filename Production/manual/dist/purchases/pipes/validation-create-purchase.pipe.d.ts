import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Direccion } from "src/orm/entity/direccion";
import { Usuario } from "src/orm/entity/usuario";
import { Repository } from "typeorm";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";
export declare class ValidationCreatePurchasePipe implements PipeTransform {
    private readonly usuarioRepository;
    private readonly direccionRepository;
    constructor(usuarioRepository: Repository<Usuario>, direccionRepository: Repository<Direccion>);
    transform(value: CreatePurchaseDto, metadata: ArgumentMetadata): Promise<CreatePurchaseDto>;
}
