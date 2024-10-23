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
const generoEnum_1 = require("../entities/generoEnum");
const idioma_1 = require("../entities/idioma");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ISBN 13 del libro',
        type: String,
        example: '9788420412146',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "isbn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del libro',
        type: String,
        example: 'Don Quijote de la Mancha',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array con los nombres de los autores del libro',
        type: [String],
        example: 'Miguel de Cervantes',
        isArray: true,
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "autor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de libros en stock',
        minimum: 1,
        type: Number,
        example: 50,
    }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "stockLibro", void 0);
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
    __metadata("design:type", Number)
], CreateProductDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista con el o los géneros del libro',
        enum: [
            'Thriller', 'Novela histórica', 'Romance', 'Ciencia ficción',
            'Distópia', 'Aventura', 'Fantasía', 'Contemporáneo', 'Terror',
            'Paranormal', 'Poesía', 'Juvenil', 'Infantil', 'Novela',
            'Clásico', 'Autoayuda', 'Salud y deporte',
            'Técnicos y especializados', 'Biografías y autobiografías',
            'Cocina', 'Viajes', 'Arte', 'Ciencia y matemáticas',
            'Computación', 'Derecho y política', 'Economía y finanzas',
            'Historia', 'Filosofía y religión', 'Educación',
        ],
        isArray: true,
        example: [generoEnum_1.GeneroEnum.NOVELA, generoEnum_1.GeneroEnum.CLASICO],
    }),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "genero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de la editorial del libro',
        type: String,
        example: 'Lengua Viva',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "editorial", void 0);
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
        ],
        example: idioma_1.Idioma.ESPANOL,
    }),
    (0, class_validator_1.IsEnum)(idioma_1.Idioma),
    __metadata("design:type", String)
], CreateProductDto.prototype, "idioma", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: encuadernacion_1.Encuadernacion.TAPA_DURA,
        description: 'Tipo de encuadernación del libro',
        enum: [
            'Tapa dura',
            'Tapa blanda',
            'Encuadernación en espiral',
        ]
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "encuadernacion", void 0);
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
    __metadata("design:type", Date)
], CreateProductDto.prototype, "agnoPublicacion", void 0);
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
], CreateProductDto.prototype, "numeroPaginas", void 0);
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
], CreateProductDto.prototype, "descuento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ruta de la carátula del libro',
        type: String,
        example: './images/portada.png'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "caratula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dimensiones del libro en formato "Ancho cm x Alto cm"',
        example: '15cm x 25cm',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Contains)('x'),
    __metadata("design:type", String)
], CreateProductDto.prototype, "dimensiones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Código de barra del libro en formato EAN-13',
        example: '978-8-42-041214-6',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "ean", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Resumen del libro',
        type: String,
        example: 'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano (...)',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "resumen", void 0);
//# sourceMappingURL=create-product.dto.js.map