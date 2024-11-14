"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPurchaseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const direccion_1 = require("../../orm/entity/direccion");
class GetPurchaseDto {
}
exports.GetPurchaseDto = GetPurchaseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la compra' }),
    __metadata("design:type", Number)
], GetPurchaseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario' }),
    __metadata("design:type", Number)
], GetPurchaseDto.prototype, "id_usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estatus de la compra' }),
    __metadata("design:type", String)
], GetPurchaseDto.prototype, "estatus_compra", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha donde se realizó la compra' }),
    __metadata("design:type", Date)
], GetPurchaseDto.prototype, "fecha_compra", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha entrega de la compra' }),
    __metadata("design:type", Date)
], GetPurchaseDto.prototype, "fecha_entrega", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dirección de entrega del pedido' }),
    __metadata("design:type", direccion_1.Direccion)
], GetPurchaseDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Productos de la compra' }),
    __metadata("design:type", Array)
], GetPurchaseDto.prototype, "libroCompra", void 0);
//# sourceMappingURL=get-purchase.dto.js.map