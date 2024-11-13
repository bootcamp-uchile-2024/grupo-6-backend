import { Direccion } from "src/orm/entity/direccion";
import { HistorialCompra } from "src/orm/entity/historial_compra";
import { GetPurchaseDto } from "../dto/get-purchase.dto";

export class PurchasesMapper {
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