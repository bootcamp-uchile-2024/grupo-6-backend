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
exports.proConexDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class proConexDTO {
}
exports.proConexDTO = proConexDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ISBN 13 del libro',
        type: String,
        example: '9788420412146',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], proConexDTO.prototype, "isbn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del libro',
        type: String,
        example: 'Don Quijote de la Mancha',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], proConexDTO.prototype, "nombre", void 0);
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
], proConexDTO.prototype, "precio", void 0);
//# sourceMappingURL=proConexDTO.js.map