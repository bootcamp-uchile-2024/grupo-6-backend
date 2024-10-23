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
exports.HistorialCompra = void 0;
const typeorm_1 = require("typeorm");
const usuario_1 = require("./usuario");
const direccion_1 = require("./direccion");
const libro_compra_1 = require("./libro_compra");
let HistorialCompra = class HistorialCompra {
};
exports.HistorialCompra = HistorialCompra;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], HistorialCompra.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HistorialCompra.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HistorialCompra.prototype, "estatus_compra", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], HistorialCompra.prototype, "fecha_compra", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], HistorialCompra.prototype, "fecha_entrega", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HistorialCompra.prototype, "id_direccion_entrega", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: "id_usuario" }),
    __metadata("design:type", usuario_1.Usuario)
], HistorialCompra.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => direccion_1.Direccion),
    (0, typeorm_1.JoinColumn)({ name: "id_direccion_entrega" }),
    __metadata("design:type", direccion_1.Direccion)
], HistorialCompra.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => libro_compra_1.LibroCompra, (libroCompra) => libroCompra.historialCompra),
    __metadata("design:type", Array)
], HistorialCompra.prototype, "libroCompra", void 0);
exports.HistorialCompra = HistorialCompra = __decorate([
    (0, typeorm_1.Entity)({ name: "historial_compra" })
], HistorialCompra);
//# sourceMappingURL=historial_compra.js.map