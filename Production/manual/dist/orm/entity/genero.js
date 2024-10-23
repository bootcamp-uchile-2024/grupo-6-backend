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
exports.Genero = void 0;
const typeorm_1 = require("typeorm");
const libro_1 = require("./libro");
const generoEnum_1 = require("../../products/entities/generoEnum");
let Genero = class Genero {
};
exports.Genero = Genero;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Genero.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Genero.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => libro_1.Libro, (libro) => libro.generos),
    (0, typeorm_1.JoinTable)({
        name: 'genero_libro',
        joinColumn: {
            name: 'id_genero',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'id_libro',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Genero.prototype, "libros", void 0);
exports.Genero = Genero = __decorate([
    (0, typeorm_1.Entity)({ name: "genero" })
], Genero);
//# sourceMappingURL=genero.js.map