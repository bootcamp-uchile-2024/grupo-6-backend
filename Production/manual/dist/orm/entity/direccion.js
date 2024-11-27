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
exports.Direccion = void 0;
const typeorm_1 = require("typeorm");
const historial_compra_1 = require("./historial_compra");
const tipoDireccion_1 = require("./tipoDireccion");
const usuario_1 = require("./usuario");
let Direccion = class Direccion {
};
exports.Direccion = Direccion;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Direccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Direccion.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Direccion.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Direccion.prototype, "numero_calle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Direccion.prototype, "numero_departamento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Direccion.prototype, "informacion_adicional", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Direccion.prototype, "nombre_comuna", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Direccion.prototype, "nombre_ciudad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Direccion.prototype, "nombre_region", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: "id_usuario" }),
    __metadata("design:type", usuario_1.Usuario)
], Direccion.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tipoDireccion_1.TipoDireccion, (tipoDireccion) => tipoDireccion.direcciones),
    __metadata("design:type", Array)
], Direccion.prototype, "tipodirecciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => historial_compra_1.HistorialCompra, (historialCompra) => historialCompra.direccion),
    __metadata("design:type", Array)
], Direccion.prototype, "historialCompra", void 0);
exports.Direccion = Direccion = __decorate([
    (0, typeorm_1.Entity)({ name: "direccion" })
], Direccion);
//# sourceMappingURL=direccion.js.map