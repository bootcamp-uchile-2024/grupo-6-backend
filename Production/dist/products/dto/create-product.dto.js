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
exports.CreateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const encuadernacion_1 = require("../entities/encuadernacion");
const genero_1 = require("../entities/genero");
const idioma_1 = require("../entities/idioma");
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '9788420412146', description: 'ISBN del libro' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "isbn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Don Quijote de la Mancha',
        description: 'Nombre del libro',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Miguel de Cervantes',
        description: 'Autor de libro',
    }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "autor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50, description: 'Stock' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "stockLibro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 19000, description: 'Precio del libro' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [genero_1.Genero.NOVELA, genero_1.Genero.CLASICO],
        description: 'Generos tal como Novela, Clasico, etc.',
        default: [genero_1.Genero.NOVELA, genero_1.Genero.CLASICO],
        enum: genero_1.Genero,
        isArray: true,
    }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "genero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Lengua Viva',
        description: 'Editorial del libro.',
        default: 'Lengua Viva',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "editorial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: idioma_1.Idioma.ESPANOL,
        description: 'Idiomas como español, ingles, etc.',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "idioma", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: encuadernacion_1.Encuadernacion.TAPA_DURA,
        description: 'Encuadernacion, puede ser tapa dura, tapa blanda.',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "encuadernacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: new Date(2015, 0),
        description: 'Año de publicacion del libro.',
    }),
    __metadata("design:type", Date)
], CreateProductDto.prototype, "agnoPublicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1376, description: 'Cantidad de paginas del libro.' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "numeroPaginas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0, description: 'Descuento que tiene el libro.' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '9788420412146.jpg',
        description: 'Caratula del libro.',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "caratula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '15cm x 25cm',
        description: 'Dimensiones del libro en cm (ancho x alto).',
        default: '15cm x 25cm',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "dimensiones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '978-8-42-041214-6',
        description: 'Código de barra del producto en formato EAN-13.',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "ean", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano (...)',
        description: 'Resumen de libro.',
        default: 'Sin resumen',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "resumen", void 0);
//# sourceMappingURL=create-product.dto.js.map