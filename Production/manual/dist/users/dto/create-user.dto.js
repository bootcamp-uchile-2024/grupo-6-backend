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
//# sourceMappingURL=create-user.dto.js.map