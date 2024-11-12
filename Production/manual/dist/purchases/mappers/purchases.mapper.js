"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesMapper = void 0;
const historial_compra_1 = require("../../orm/entity/historial_compra");
const get_purchase_dto_1 = require("../dto/get-purchase.dto");
class PurchasesMapper {
    static entityToDto(entity) {
        const dto = new get_purchase_dto_1.GetPurchaseDto();
        dto.id = entity.id;
        dto.id_usuario = entity.id_usuario;
        dto.estatus_compra = entity.estatus_compra;
        dto.fecha_compra = entity.fecha_compra;
        dto.fecha_entrega = entity.fecha_entrega;
        dto.direccion = entity.direccion;
        dto.libroCompra = entity.libroCompra;
        return dto;
    }
    static dtoToEntity(dto) {
        const entity = new historial_compra_1.HistorialCompra();
        entity.id = dto.id;
        entity.id_usuario = dto.id_usuario;
        entity.estatus_compra = dto.estatus_compra;
        entity.fecha_compra = dto.fecha_compra;
        entity.fecha_entrega = dto.fecha_entrega;
        entity.id_direccion_entrega = dto.direccion.id;
        return entity;
    }
    static entityListToDtoList(compras) {
        return compras.map((compra) => this.entityToDto(compra));
    }
}
exports.PurchasesMapper = PurchasesMapper;
//# sourceMappingURL=purchases.mapper.js.map