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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationCreatePurchasePipe = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const direccion_1 = require("../../orm/entity/direccion");
const usuario_1 = require("../../orm/entity/usuario");
const typeorm_2 = require("typeorm");
let ValidationCreatePurchasePipe = class ValidationCreatePurchasePipe {
    constructor(usuarioRepository, direccionRepository) {
        this.usuarioRepository = usuarioRepository;
        this.direccionRepository = direccionRepository;
    }
    async transform(value, metadata) {
        if (!(this.usuarioRepository.exists({ where: {
                id: value.id_usuario,
            } }))) {
            throw new common_1.NotFoundException(`No existe un usuario con ID: ${value.id_usuario}`);
        }
        ;
        if (!(this.direccionRepository.exists({ where: {
                id: value.id_direccion_entrega,
            } }))) {
            throw new common_1.NotFoundException(`No existe una dirección con ID: ${value.id_direccion_entrega}`);
        }
        ;
        return value;
    }
};
exports.ValidationCreatePurchasePipe = ValidationCreatePurchasePipe;
exports.ValidationCreatePurchasePipe = ValidationCreatePurchasePipe = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(usuario_1.Usuario)),
    __param(1, (0, typeorm_1.InjectRepository)(direccion_1.Direccion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ValidationCreatePurchasePipe);
//# sourceMappingURL=validation-create-purchase.pipe.js.map