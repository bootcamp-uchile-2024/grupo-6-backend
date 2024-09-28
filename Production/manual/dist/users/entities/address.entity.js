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
exports.Address = void 0;
const swagger_1 = require("@nestjs/swagger");
const tipoDireccion_entity_1 = require("./tipoDireccion.entity");
const class_validator_1 = require("class-validator");
class Address {
    constructor(idDireccion, calle, numeroCalle, numeroDepartamento, comuna, ciudad, region, tipoDireccion, informacionAdicional) {
        this.idDireccion = idDireccion;
        this.calle = calle;
        this.numeroCalle = numeroCalle;
        this.numeroDepartamento = numeroDepartamento;
        this.comuna = comuna;
        this.ciudad = ciudad;
        this.region = region;
        this.tipoDireccion = tipoDireccion;
        this.informacionAdicional = informacionAdicional;
    }
}
exports.Address = Address;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'El condor',
        description: 'Nombre de la calle. (debe contener un formato de string correcto).',
    }),
    (0, class_validator_1.IsString)({ message: 'Introducir un formato de calle correcto.' }),
    __metadata("design:type", String)
], Address.prototype, "calle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '125',
        description: 'Numero de la calle (debe contener un formato de string correcto).',
    }),
    (0, class_validator_1.IsString)({ message: 'Introducir un numero de calle correcto.' }),
    __metadata("design:type", String)
], Address.prototype, "numeroCalle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'N/A',
        description: 'Numero del departamento (debe contener formato de string  correcto).',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'Introducir un formato de nombre correcto.' }),
    __metadata("design:type", String)
], Address.prototype, "numeroDepartamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Nunoa',
        description: 'Comuna a la que vive el usuario (debe contener formato de string correcto).',
    }),
    (0, class_validator_1.IsString)({ message: 'Introducir un formato de nombre correcto.' }),
    __metadata("design:type", String)
], Address.prototype, "comuna", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Santiago',
        description: 'Ciudad a la que vive el usuario (debe contener formato de string correcto).',
    }),
    (0, class_validator_1.IsString)({ message: 'Introducir un formato de nombre correcto.' }),
    __metadata("design:type", String)
], Address.prototype, "ciudad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Metropolitana',
        description: 'Region a la que vive el usuario (debe contener formato de string correcto).',
    }),
    (0, class_validator_1.IsString)({ message: 'Introducir un formato de nombre correcto.' }),
    __metadata("design:type", String)
], Address.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [tipoDireccion_entity_1.TipoDireccion.ENVIO, tipoDireccion_entity_1.TipoDireccion.FACTURACION],
        description: "Tipo de direccion, puede ser 'Envio' o 'Facturacion'.",
        enum: tipoDireccion_entity_1.TipoDireccion,
    }),
    (0, class_validator_1.IsEnum)(tipoDireccion_entity_1.TipoDireccion, {
        message: "El tipo de direccion tiene que ser el formato correcto. Ej: 'Envio' o 'Facturacion'.",
    }),
    __metadata("design:type", Array)
], Address.prototype, "tipoDireccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'CASA',
        description: 'Informacion adicional de la direccion del usuario, como por ejemplo referencias para llegar a la direccion.',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'Introducir un formato de nombre correcto.' }),
    __metadata("design:type", String)
], Address.prototype, "informacionAdicional", void 0);
//# sourceMappingURL=address.entity.js.map