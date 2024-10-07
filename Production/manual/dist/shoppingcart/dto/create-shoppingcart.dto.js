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
exports.CreateShoppingcartDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const encuadernacion_1 = require("../../products/entities/encuadernacion");
class CreateShoppingcartDto {
}
exports.CreateShoppingcartDto = CreateShoppingcartDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 16000, description: 'Precio del libro' }),
    __metadata("design:type", Number)
], CreateShoppingcartDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Salvat',
        description: 'Editorial a la que pertenece este libro',
    }),
    __metadata("design:type", String)
], CreateShoppingcartDto.prototype, "editorial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Tapa Dura',
        description: 'Estilo de tapa que tiene el libro',
        enum: encuadernacion_1.Encuadernacion,
    }),
    __metadata("design:type", String)
], CreateShoppingcartDto.prototype, "encuadernacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: '% de descuento en el precio del libro',
    }),
    __metadata("design:type", Number)
], CreateShoppingcartDto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'src/products/images/9788445009598.webp',
        description: 'Imagen de caratula del libro',
    }),
    __metadata("design:type", String)
], CreateShoppingcartDto.prototype, "caratula", void 0);
//# sourceMappingURL=create-shoppingcart.dto.js.map