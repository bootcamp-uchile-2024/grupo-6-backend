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
exports.CreatePurchaseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatePurchaseDto {
}
exports.CreatePurchaseDto = CreatePurchaseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la compra' }),
    __metadata("design:type", Number)
], CreatePurchaseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario que genera compra' }),
    __metadata("design:type", Number)
], CreatePurchaseDto.prototype, "id_usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID dirección de entrega' }),
    __metadata("design:type", Number)
], CreatePurchaseDto.prototype, "id_direccion_entrega", void 0);
//# sourceMappingURL=create-purchase.dto.js.map