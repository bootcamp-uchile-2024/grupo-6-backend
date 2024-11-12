import { ArgumentMetadata, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Direccion } from "src/orm/entity/direccion";
import { Usuario } from "src/orm/entity/usuario";
import { Repository } from "typeorm";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";
import { Shoppingcart } from "src/shoppingcart/entities/shoppingcart.entity";

export class ValidationCreatePurchasePipe implements PipeTransform {
    constructor (
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,

        @InjectRepository(Direccion)
        private readonly direccionRepository: Repository<Direccion>,

        // @InjectRepository(Shoppingcart)
        // private readonly shoppingCartRepository: Repository<Shoppingcart>,
    ){}

    async transform(value: CreatePurchaseDto, metadata: ArgumentMetadata) {
        // Validar que usuario existe
        if (!( this.usuarioRepository.exists(
            {where: {
                id: value.id_usuario,
            }}))) {
            throw new NotFoundException(`No existe un usuario con ID: ${value.id_usuario}`)
        };
        // Validar dirección de entrega
        if (!( this.direccionRepository.exists(
            {where: {
                id: value.id_direccion_entrega,
            }}))) {
            throw new NotFoundException(`No existe una dirección con ID: ${value.id_direccion_entrega}`)
        };
        // Validar ID carrito de compra
        // if (!( this.shoppingCartRepository.exists(
        //     {where: {
        //         id: value.id_carrito,
        //     }}))) {
        //     throw new NotFoundException(`No existe un carrito de compra con ID: ${value.id_carrito}`)
        // };


        return value;
    }
}