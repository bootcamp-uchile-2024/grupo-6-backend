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
exports.Comuna = void 0;
const typeorm_1 = require("typeorm");
const ciudad_1 = require("./ciudad");
const direccion_1 = require("./direccion");
let Comuna = class Comuna {
};
exports.Comuna = Comuna;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Comuna.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comuna.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Comuna.prototype, "id_ciudad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ciudad_1.Ciudad),
    (0, typeorm_1.JoinColumn)({ name: "id_ciudad" }),
    __metadata("design:type", ciudad_1.Ciudad)
], Comuna.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => direccion_1.Direccion, (direccion) => direccion.comuna),
    __metadata("design:type", Array)
], Comuna.prototype, "direccion", void 0);
exports.Comuna = Comuna = __decorate([
    (0, typeorm_1.Entity)({ name: "comuna" })
], Comuna);
//# sourceMappingURL=comuna.js.map