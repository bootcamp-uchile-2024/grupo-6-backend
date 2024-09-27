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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const clientType_entity_1 = require("../entities/clientType.entity");
const clientState_entity_1 = require("../entities/clientState.entity");
const address_entity_1 = require("../entities/address.entity");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Roberto Andres',
        description: 'Primer y segundo nombre del usuario (debe contener un formato de string correcto).',
    }),
    (0, class_validator_1.IsString)({ message: 'Introducir un formato de nombre correcto.' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nombres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Gonzalez',
        description: 'Apellido paterno del usuario (debe contener un formato de string correcto).',
    }),
    (0, class_validator_1.IsString)({ message: 'Introducir un formato de nombre correcto.' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "apellidoPaterno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Ramirez',
        description: 'Apellido materno del usuario (debe contener un formato de string correcto).',
    }),
    (0, class_validator_1.IsString)({ message: 'Introducir un formato de nombre correcto.' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "apellidoMaterno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'r.gonz.ram@gmail.com',
        description: 'Correo electronico del usuario (debe ser un correo con formato válido).',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'El email debe ser un correo electrónico válido' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "correoElectronico", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345', description: 'Contrasena del usuario.' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "contrasena", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Direccion del usuario, puede ser direccion de envio y/o facturacion.',
        default: [],
        type: address_entity_1.Address,
    }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: clientType_entity_1.ClientType.ESTANDAR,
        description: 'Tipo de usuario, puede ser Premium o Estandar.',
        enum: clientType_entity_1.ClientType,
    }),
    (0, class_validator_1.IsEnum)(clientType_entity_1.ClientType, {
        message: "El tipo del usuario tiene que ser el formato correcto. Ej: 'Premium' o 'Estandar'.",
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "tipoCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: clientState_entity_1.ClientState.ACTIVO,
        description: 'Estado del usuario, puede ser Activo o Baneado.',
        enum: clientState_entity_1.ClientState,
    }),
    (0, class_validator_1.IsEnum)(clientState_entity_1.ClientState, {
        message: "El estado del usuario tiene que ser el formato correcto. Ej: 'Activo' o 'Baneado'.",
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "estado", void 0);
//# sourceMappingURL=create-user.dto.js.map