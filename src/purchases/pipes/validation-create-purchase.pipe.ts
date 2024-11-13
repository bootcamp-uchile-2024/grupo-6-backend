import { ArgumentMetadata, BadRequestException, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Direccion } from "src/orm/entity/direccion";
import { Usuario } from "src/orm/entity/usuario";
import { Repository } from "typeorm";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";
import { Carrito } from "src/orm/entity/carrito";
import { HistorialCompra } from "src/orm/entity/historial_compra";

export class ValidationCreatePurchasePipe implements PipeTransform {
    constructor (
        @InjectRepository(HistorialCompra) 
        private readonly historialCompraRepository: Repository<HistorialCompra>,

        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,

        @InjectRepository(Direccion)
        private readonly direccionRepository: Repository<Direccion>,

        @InjectRepository(Carrito)
        private readonly carritoRepository: Repository<Carrito>,
    ){}

    async transform(value: CreatePurchaseDto, metadata: ArgumentMetadata) {

        // Validar que no existe un pedido con el mismo ID
        if (( await this.historialCompraRepository.existsBy({
                id: value.id,
            }))) {
            throw new BadRequestException(`Ya existe un pedido con ID: ${value.id}`)
        };

        // Validar que usuario existe
        if (!( await this.usuarioRepository.existsBy({
                id: value.id_usuario,
            }))) {
            throw new NotFoundException(`No existe un usuario con ID: ${value.id_usuario}`)
        };
        // Validar dirección de entrega
        const direccion: Direccion = await this.direccionRepository.findOneBy({ id: value.id_direccion_entrega });

        if (! direccion) {
            throw new NotFoundException(`No existe una dirección con ID: ${value.id_direccion_entrega}`)
        };

        if ( direccion.id_usuario !== value.id_usuario ){
            throw new BadRequestException(`La dirección no pertenece al usuario de ID: ${value.id_usuario}`)
        }
        // Validar ID carrito de compra
        if (!( await this.carritoRepository.exists(
            {where: {
                usuario_id: value.id_usuario,
            }}))) {
            throw new NotFoundException(`No existe un carrito de compra para el usuario con ID: ${value.id_usuario}`)
        };

        return value;
    }
}