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
exports.GetFilteredProductsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const get_product_dto_1 = require("./get-product.dto");
class GetFilteredProductsDto {
}
exports.GetFilteredProductsDto = GetFilteredProductsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad total de productos existentes', type: Number }),
    __metadata("design:type", Number)
], GetFilteredProductsDto.prototype, "totalProductos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número total de páginas', type: Number }),
    __metadata("design:type", Number)
], GetFilteredProductsDto.prototype, "totalPaginas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número de página entregada', type: Number }),
    __metadata("design:type", Number)
], GetFilteredProductsDto.prototype, "nroPagina", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Lista de productos según paginación', type: [get_product_dto_1.GetProductDto] }),
    __metadata("design:type", Array)
], GetFilteredProductsDto.prototype, "productos", void 0);
//# sourceMappingURL=get-filtered-products.dto.js.map