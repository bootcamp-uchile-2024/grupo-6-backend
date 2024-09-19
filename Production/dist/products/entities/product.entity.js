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
exports.Product = void 0;
const swagger_1 = require("@nestjs/swagger");
const encuadernacion_1 = require("./encuadernacion");
const idioma_1 = require("./idioma");
class Product {
    constructor(isbn, nombre, autor, stockLibro, precio, genero, editorial, idioma, encuadernacion, agnoPublicacion, numeroPaginas, descuento, caratula, dimensiones, ean, resumen) {
        this.isbn = isbn;
        this.nombre = nombre;
        this.autor = autor;
        this.stockLibro = stockLibro;
        this.precio = precio;
        this.rating = 0;
        this.genero = genero;
        this.editorial = editorial;
        this.idioma = idioma;
        this.encuadernacion = encuadernacion;
        this.agnoPublicacion = agnoPublicacion;
        this.numeroPaginas = numeroPaginas;
        this.resenas = [];
        this.descuento = descuento;
        this.caratula = caratula;
        this.dimensiones = dimensiones;
        this.ean = ean;
        this.resumen = resumen;
    }
}
exports.Product = Product;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "isbn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Product.prototype, "autor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Product.prototype, "stockLibro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Product.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Product.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Product.prototype, "genero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "editorial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "idioma", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "encuadernacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Product.prototype, "agnoPublicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Product.prototype, "numeroPaginas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Product.prototype, "resenas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Product.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "caratula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "dimensiones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "ean", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Product.prototype, "resumen", void 0);
//# sourceMappingURL=product.entity.js.map