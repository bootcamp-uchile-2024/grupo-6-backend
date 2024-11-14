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
exports.TipoDireccion = void 0;
const typeorm_1 = require("typeorm");
const direccion_1 = require("./direccion");
let TipoDireccion = class TipoDireccion {
};
exports.TipoDireccion = TipoDireccion;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], TipoDireccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TipoDireccion.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => direccion_1.Direccion),
    (0, typeorm_1.JoinTable)({ name: 'direccion_tipoDireccion',
        joinColumn: {
            name: 'id_tipoDireccion',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'id_direccion',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], TipoDireccion.prototype, "direcciones", void 0);
exports.TipoDireccion = TipoDireccion = __decorate([
    (0, typeorm_1.Entity)({ name: "tipoDireccion" })
], TipoDireccion);
//# sourceMappingURL=tipoDireccion.js.map