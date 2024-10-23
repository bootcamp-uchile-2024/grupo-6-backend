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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const direccion_1 = require("./direccion");
const resena_1 = require("./resena");
const historial_compra_1 = require("./historial_compra");
let Usuario = class Usuario {
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "segundo_nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "apellido_paterno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "apellido_materno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "correo_electronico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "contrasena", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => direccion_1.Direccion, (direccion) => direccion.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resena_1.Resena, (resena) => resena.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "resena", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => historial_compra_1.HistorialCompra, (historialCompra) => historialCompra.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "historialCompra", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)({ name: "usuario" })
], Usuario);
//# sourceMappingURL=usuario.js.map