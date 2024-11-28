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
exports.GetProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const encuadernacionEnum_1 = require("../entities/encuadernacionEnum");
const generoEnum_1 = require("../entities/generoEnum");
const idioma_1 = require("../entities/idioma");
const create_product_dto_1 = require("./create-product.dto");
const resena_1 = require("../../orm/entity/resena");
class GetProductDto extends (0, mapped_types_1.PartialType)(create_product_dto_1.CreateProductDto) {
}
exports.GetProductDto = GetProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del libro',
        type: Number,
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetProductDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ISBN 13 del libro',
        type: String,
        example: '9788420412146',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductDto.prototype, "isbn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del libro',
        type: String,
        example: 'Don Quijote de la Mancha',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array con los nombres de los autores del libro',
        type: [String],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GetProductDto.prototype, "autor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de libros en stock',
        minimum: 1,
        type: Number,
    }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], GetProductDto.prototype, "stockLibro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio del libro (sin descuento)',
        type: Number,
        minimum: 1,
        maximum: 10000000,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(10000000),
    __metadata("design:type", Number)
], GetProductDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Calificación del libro de 0 a 5. Valor autocalculado con las reseñas.',
        minimum: 0,
        maximum: 5,
        default: 0,
        type: Number
    }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], GetProductDto.prototype, "rating", void 0);
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
], GetProductDto.prototype, "genero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de la editorial del libro',
        type: String,
        example: 'Lengua Viva',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductDto.prototype, "editorial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Idioma del libro',
        enum: [
            'Español',
            'Inglés',
            'Francés',
            'Alemán',
            'Portugués',
            'Italiano',
            'Japonés',
            'Chino',
            'Ruso',
            'Coreano',
            'Árabe',
            'Hebreo',
            'Griego',
            'Latín',
            'Hindi',
            'Bengalí',
            'Vietnamita',
            'Polaco',
            'Turco',
            'Sueco',
        ],
        example: idioma_1.Idioma.ESPANOL,
    }),
    (0, class_validator_1.IsEnum)({ entity: idioma_1.Idioma }),
    __metadata("design:type", String)
], GetProductDto.prototype, "idioma", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de encuadernación del libro',
        enum: [
            'Tapa Dura',
            'Tapa Blanda',
            'Edición de Bolsillo',
            'Edición de Lujo',
            'Digital',
            'Audiolibro',
            'Impresión Bajo Demanda',
            'Coleccionista',
            'Edición Limitada',
            'Rústica',
            'Libreta de Apuntes',
            'Manual',
            'Guía de Viaje',
            'Cómic',
            'Manga',
            'Folleto',
            'Calendario',
            'Póster',
            'Plegable',
            'Tarjeta',
        ],
        example: encuadernacionEnum_1.EncuadernacionEnum.TAPA_DURA,
    }),
    (0, class_validator_1.IsEnum)({ entity: encuadernacionEnum_1.EncuadernacionEnum }),
    __metadata("design:type", String)
], GetProductDto.prototype, "encuadernacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Año de publicación del libro',
        type: 'number',
        example: 2015,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetProductDto.prototype, "agnoPublicacion", void 0);
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
    __metadata("design:type", Number)
], GetProductDto.prototype, "numeroPaginas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista con las reseñas realizadas por los usuarios',
        type: [resena_1.Resena],
        default: [],
        isArray: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => resena_1.Resena),
    __metadata("design:type", Array)
], GetProductDto.prototype, "resenas", void 0);
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
    __metadata("design:type", Number)
], GetProductDto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ruta de la carátula del libro',
        type: String,
        example: '/cover/portada.png'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductDto.prototype, "caratula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dimensiones del libro en formato "Ancho cm x Alto cm"',
        example: '15cm x 25cm',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Contains)('x'),
    __metadata("design:type", String)
], GetProductDto.prototype, "dimensiones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Código de barra del libro en formato EAN-13',
        example: '978-8-42-041214-6',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductDto.prototype, "ean", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Resumen del libro',
        type: String,
        example: 'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano (...)',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductDto.prototype, "resumen", void 0);
//# sourceMappingURL=get-product.dto.js.map