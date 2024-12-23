import { HistorialCompra } from "src/orm/entity/historial_compra";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";
import { GetPurchaseDto } from "../dto/get-purchase.dto";
import { LibroCompraMapper } from "./libroCompra.mapper";

export class HistorialCompraMapper {

    static entityToDto(entity: HistorialCompra): GetPurchaseDto {
        const dto = new GetPurchaseDto();
        
        dto.id = entity.id;
        dto.estatusCompra = entity.estatus_compra;
        dto.fechaCompra = entity.fecha_compra;
        dto.fechaEntrega = entity.fecha_entrega;
        dto.direccion = entity.direccion;
        dto.libroCompra = entity.libroCompra.map( l => LibroCompraMapper.entityToDto(l));
        dto.total = dto.libroCompra.reduce(
            (suma, libro) => suma + libro.precioFinal * libro.cantidad, 0);

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

    static dtoToEntity(dto: GetPurchaseDto, datosUsuario): HistorialCompra {
        const entity = new HistorialCompra();

        entity.id = dto.id;
        entity.id_usuario = datosUsuario.idUsuario;
        entity.estatus_compra = dto.estatusCompra;
        entity.fecha_compra = dto.fechaCompra;
        entity.fecha_entrega = dto.fechaEntrega;
        entity.id_direccion_entrega = dto.direccion.id;

        return entity;
    }
    static entityListToDtoList( compras: HistorialCompra[]): GetPurchaseDto[] {
        return compras.map((compra) => this.entityToDto(compra));
    }



}