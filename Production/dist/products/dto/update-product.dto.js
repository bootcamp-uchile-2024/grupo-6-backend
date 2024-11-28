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
exports.UpdateProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_product_dto_1 = require("./create-product.dto");
const generoEnum_1 = require("../entities/generoEnum");
class UpdateProductDto extends (0, mapped_types_1.PartialType)(create_product_dto_1.CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del libro', type: String, example: 'Don Quijote de la Mancha' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de libros en stock',
        minimum: 1,
        type: Number,
        example: 50,
    }),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "stock_libro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio del libro (sin descuento)',
        type: Number,
        minimum: 1,
        maximum: 10000000,
        example: 19000,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(10000000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rating del libro',
        type: Number,
        minimum: 1,
        maximum: 5,
        example: 4,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de la editorial del libro', type: String, example: 'Alfaguara', }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "editorial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del idioma del libro', type: Number, example: '1', }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "id_idioma", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la encuadernación del libro', type: Number, example: '1', }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "id_encuadernacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Año de publicación del libro',
        type: Date,
        example: new Date(2015, 0),
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.MaxDate)(() => new Date(), {
        message: () => `No se puede ingresar una fecha mayor al día de hoy: ${new Date().toDateString()})`
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateProductDto.prototype, "agno_publicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de páginas del libro',
        type: Number,
        minimum: 1,
        maximum: 10000,
        example: 150,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(10000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "numero_paginas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descuento aplicado al producto de 0 a 100',
        type: Number,
        default: 0,
        minimum: 0,
        maximum: 100,
        example: 50
    }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ruta de la carátula del libro', type: String, example: './images/portada.png' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "caratula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dimensiones del libro en formato "Ancho cm x Alto cm"',
        example: '15cm x 25cm',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Contains)('x'),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "dimensiones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Código de barra del libro en formato EAN-13',
        example: '978-8-42-041214-6',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "codigo_barra", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Resumen del libro',
        type: String,
        example: 'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano (...)',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "resumen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista con el o los géneros del libro',
        enum: [
            'Ciencia Ficción',
            'Romance',
            'Fantasía',
            'Histórico',
            'Aventura',
            'Suspenso',
            'Terror',
            'Policiaco',
            'Drama',
            'Comedia',
            'Autoayuda',
            'Biografía',
            'Ensayo',
            'Educativo',
            'Infantil',
            'Juvenil',
            'Paranormal',
            'Religión',
            'Política',
            'Filosofía',
        ],
        isArray: true,
        example: [generoEnum_1.GeneroEnum.ROMANCE, generoEnum_1.GeneroEnum.EDUCATIVO],
    }),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], UpdateProductDto.prototype, "genero", void 0);
//# sourceMappingURL=update-product.dto.js.map