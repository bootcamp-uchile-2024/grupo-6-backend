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
exports.LibroCompra = void 0;
const typeorm_1 = require("typeorm");
const historial_compra_1 = require("./historial_compra");
const libro_1 = require("./libro");
let LibroCompra = class LibroCompra {
};
exports.LibroCompra = LibroCompra;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], LibroCompra.prototype, "id_compra", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], LibroCompra.prototype, "id_libro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LibroCompra.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => historial_compra_1.HistorialCompra),
    (0, typeorm_1.JoinColumn)({ name: "id_compra" }),
    __metadata("design:type", historial_compra_1.HistorialCompra)
], LibroCompra.prototype, "historialCompra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => libro_1.Libro, (libro) => libro.libroCompra, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "id_libro" }),
    __metadata("design:type", libro_1.Libro)
], LibroCompra.prototype, "libro", void 0);
exports.LibroCompra = LibroCompra = __decorate([
    (0, typeorm_1.Entity)({ name: "libro_compra" })
], LibroCompra);
//# sourceMappingURL=libro_compra.js.map