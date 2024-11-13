import { ArgumentMetadata, BadRequestException, HttpException, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Direccion } from "src/orm/entity/direccion";
import { HistorialCompra } from "src/orm/entity/historial_compra";
import { Repository } from "typeorm";


export class ValidationUpdatePurchasePipe implements PipeTransform {
    constructor (
        @InjectRepository(HistorialCompra) 
        private readonly historialCompraRepository: Repository<HistorialCompra>,
        
        @InjectRepository(Direccion)
        private readonly direccionRepository: Repository<Direccion>,
      ){}

    async transform(value: any, metadata: ArgumentMetadata) {        
        // Validación de ID de pedido
        if (metadata.type === 'param'){
            const pedido: HistorialCompra = await this.historialCompraRepository.findOneBy({ id: value });
            
            // Validar existencia de pedido
            if (!pedido){
                throw new NotFoundException(`No existe un pedido con ID: ${value}`)
            }
            return pedido;
        }

        if (metadata.type === 'body'){
            
            if (value.estatus_compra) {
                // Validar nuevo estado
                const listaEstadosValidos: string[] = ['En espera de pago', 'En proceso', 'Completada', 'Cancelada'];

                if (!(listaEstadosValidos.includes(value.estatus_compra))){
                    throw new BadRequestException(`Estado de pedido inválido. Debe ser: ${listaEstadosValidos}`)
                };
            };

            // Validar nueva dirección de compra
            if (value.id_direccion_entrega !== null){
                if (!(this.direccionRepository.existsBy({ id: value.id_direccion_entrega}))){
                    throw new NotFoundException(`No existe una dirección con el ID: ${value.id_direccion_entrega}`)
                }

            }
            return value;
        }
    }
}