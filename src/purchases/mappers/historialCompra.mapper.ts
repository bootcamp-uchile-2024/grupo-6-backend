import { HistorialCompra } from "src/orm/entity/historial_compra";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";
import { GetPurchaseDto } from "../dto/get-purchase.dto";

export class HistorialCompraMapper {

    static entityToDto(entity: HistorialCompra): GetPurchaseDto {
        const dto = new GetPurchaseDto();
        
        dto.id = entity.id;
        dto.id_usuario = entity.id_usuario;
        dto.estatus_compra = entity.estatus_compra;
        dto.fecha_compra = entity.fecha_compra;
        dto.fecha_entrega = entity.fecha_entrega;
        dto.direccion = entity.direccion;
        dto.libroCompra = entity.libroCompra;

        return dto;
    }

    static createDtoToEntity(dto: CreatePurchaseDto, datosUsuario): HistorialCompra {
        const entity = new HistorialCompra();

        // Definición de fechas
        const formatDate = (date: Date): string => {
            return date.toISOString().split('T')[0];
          };

        const fecha_compra: Date = new Date();
        const fecha_entrega: Date = new Date();
        fecha_entrega.setDate(fecha_entrega.getDate() + 10); // Se asume que la entrega es 10 días después de la compra

        entity.id_usuario = datosUsuario.idUsuario;
        entity.estatus_compra = 'En espera de pago';
        entity.fecha_compra = formatDate(fecha_compra);
        entity.fecha_entrega = formatDate(fecha_entrega);
        entity.id_direccion_entrega = dto.idDireccionEntrega;

        return entity;
    }

    // static createLibroCompraDtoToEntity(dto: )

    static dtoToEntity(dto: GetPurchaseDto): HistorialCompra {
        const entity = new HistorialCompra();

        entity.id = dto.id;
        entity.id_usuario = dto.id_usuario;
        entity.estatus_compra = dto.estatus_compra;
        entity.fecha_compra = dto.fecha_compra;
        entity.fecha_entrega = dto.fecha_entrega;
        entity.id_direccion_entrega = dto.direccion.id;

        return entity;
    }
    static entityListToDtoList( compras: HistorialCompra[]): GetPurchaseDto[] {
        return compras.map((compra) => this.entityToDto(compra));
    }



}