import { ArgumentMetadata, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Direccion } from "src/orm/entity/direccion";
import { Repository } from "typeorm";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";

export class ValidationCreatePurchasePipe implements PipeTransform {
    constructor (

        @InjectRepository(Direccion)
        private readonly direccionRepository: Repository<Direccion>,

    ){}

    async transform(value: CreatePurchaseDto, metadata: ArgumentMetadata) {

        // Validar dirección de entrega
        const direccion: Direccion = await this.direccionRepository.findOneBy({ 
            id: value.idDireccionEntrega
        });

        if (! direccion) {
            throw new NotFoundException(`No existe una dirección con ID: ${value.idDireccionEntrega}`)
        };

        return value;
    }
}