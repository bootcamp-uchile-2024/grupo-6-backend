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
exports.Carrito = void 0;
const typeorm_1 = require("typeorm");
const libro_1 = require("./libro");
const usuario_1 = require("./usuario");
let Carrito = class Carrito {
};
exports.Carrito = Carrito;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Carrito.prototype, "usuario_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Carrito.prototype, "libro_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Carrito.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: "usuario_id" }),
    __metadata("design:type", usuario_1.Usuario)
], Carrito.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => libro_1.Libro, (libro) => libro.carrito),
    __metadata("design:type", Array)
], Carrito.prototype, "libros", void 0);
exports.Carrito = Carrito = __decorate([
    (0, typeorm_1.Entity)({ name: "carrito" })
], Carrito);
//# sourceMappingURL=carrito.js.map