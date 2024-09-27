"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipoModule = void 0;
const common_1 = require("@nestjs/common");
const equipo_service_1 = require("./equipo.service");
const equipo_controller_1 = require("./equipo.controller");
let EquipoModule = class EquipoModule {
};
exports.EquipoModule = EquipoModule;
exports.EquipoModule = EquipoModule = __decorate([
    (0, common_1.Module)({
        controllers: [equipo_controller_1.EquipoController],
        providers: [equipo_service_1.EquipoService],
    })
], EquipoModule);
//# sourceMappingURL=equipo.module.js.map