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
exports.ShoppingcartSalidaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ShoppingcartSalidaDto {
}
exports.ShoppingcartSalidaDto = ShoppingcartSalidaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'cantidad de un mismo libro' }),
    __metadata("design:type", Number)
], ShoppingcartSalidaDto.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'El señor de los Anillos: La comunidad del Anillo', description: 'Nombre del libro' }),
    __metadata("design:type", String)
], ShoppingcartSalidaDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['J.R.R TOLKIEN'], description: 'Autor del libro' }),
    __metadata("design:type", Array)
], ShoppingcartSalidaDto.prototype, "autor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 16000, description: 'Precio del libro' }),
    __metadata("design:type", Number)
], ShoppingcartSalidaDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'src/products/images/9788445009598.webp',
        description: 'Imagen de caratula del libro',
    }),
    __metadata("design:type", String)
], ShoppingcartSalidaDto.prototype, "caratula", void 0);
//# sourceMappingURL=create-shoppingcart.salida.dto.js.map