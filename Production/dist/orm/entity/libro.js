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
exports.Libro = void 0;
const typeorm_1 = require("typeorm");
const editorial_1 = require("./editorial");
const idioma_libro_1 = require("./idioma_libro");
const encuadernacion_1 = require("./encuadernacion");
const resena_1 = require("./resena");
const libro_compra_1 = require("./libro_compra");
const genero_1 = require("./genero");
const autor_1 = require("./autor");
const carrito_1 = require("./carrito");
let Libro = class Libro {
};
exports.Libro = Libro;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Libro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "isbn", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libro.prototype, "id_idioma", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libro.prototype, "id_encuadernacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libro.prototype, "stock_libro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libro.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libro.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libro.prototype, "id_editorial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libro.prototype, "agno_publicacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libro.prototype, "numero_paginas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libro.prototype, "descuento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "caratula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "dimensiones", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "codigo_barra", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "resumen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => editorial_1.Editorial),
    (0, typeorm_1.JoinColumn)({ name: "id_editorial" }),
    __metadata("design:type", editorial_1.Editorial)
], Libro.prototype, "editorial", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => idioma_libro_1.IdiomaLibro),
    (0, typeorm_1.JoinColumn)({ name: "id_idioma" }),
    __metadata("design:type", idioma_libro_1.IdiomaLibro)
], Libro.prototype, "idiomaLibro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => encuadernacion_1.Encuadernacion),
    (0, typeorm_1.JoinColumn)({ name: "id_encuadernacion" }),
    __metadata("design:type", encuadernacion_1.Encuadernacion)
], Libro.prototype, "encuadernacion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => genero_1.Genero, (genero) => genero.libros, {
        onDelete: "CASCADE",
        cascade: true
    }),
    __metadata("design:type", Array)
], Libro.prototype, "generos", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => autor_1.Autor, (autor) => autor.libros, {
        onDelete: "CASCADE",
        cascade: true
    }),
    __metadata("design:type", Array)
], Libro.prototype, "autores", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resena_1.Resena, (resena) => resena.libro, { cascade: true }),
    __metadata("design:type", Array)
], Libro.prototype, "resena", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => libro_compra_1.LibroCompra, (libroCompra) => libroCompra.libro, { cascade: true }),
    __metadata("design:type", Array)
], Libro.prototype, "libroCompra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrito_1.Carrito, (carrito) => carrito.libros, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: "id" }),
    __metadata("design:type", carrito_1.Carrito)
], Libro.prototype, "carrito", void 0);
exports.Libro = Libro = __decorate([
    (0, typeorm_1.Entity)({ name: "libro" })
], Libro);
//# sourceMappingURL=libro.js.map