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
exports.Resena = void 0;
const typeorm_1 = require("typeorm");
const libro_1 = require("./libro");
const usuario_1 = require("./usuario");
let Resena = class Resena {
};
exports.Resena = Resena;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Resena.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Resena.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Resena.prototype, "id_libro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Resena.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Resena.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Resena.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => libro_1.Libro, (libro) => libro.resena, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "id_libro" }),
    __metadata("design:type", libro_1.Libro)
], Resena.prototype, "libro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: "id_usuario" }),
    __metadata("design:type", usuario_1.Usuario)
], Resena.prototype, "usuario", void 0);
exports.Resena = Resena = __decorate([
    (0, typeorm_1.Entity)({ name: "resena" })
], Resena);
//# sourceMappingURL=resena.js.map