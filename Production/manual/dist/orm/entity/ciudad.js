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
exports.Ciudad = void 0;
const typeorm_1 = require("typeorm");
const region_1 = require("./region");
const comuna_1 = require("./comuna");
let Ciudad = class Ciudad {
};
exports.Ciudad = Ciudad;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Ciudad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ciudad.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ciudad.prototype, "id_region", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => region_1.Region),
    (0, typeorm_1.JoinColumn)({ name: "id_region" }),
    __metadata("design:type", region_1.Region)
], Ciudad.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comuna_1.Comuna, (comuna) => comuna.ciudad),
    __metadata("design:type", Array)
], Ciudad.prototype, "comuna", void 0);
exports.Ciudad = Ciudad = __decorate([
    (0, typeorm_1.Entity)({ name: "ciudad" })
], Ciudad);
//# sourceMappingURL=ciudad.js.map