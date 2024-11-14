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
const carrito_1 = require("../../orm/entity/carrito");
const historial_compra_1 = require("../../orm/entity/historial_compra");
let ValidationCreatePurchasePipe = class ValidationCreatePurchasePipe {
    constructor(historialCompraRepository, usuarioRepository, direccionRepository, carritoRepository) {
        this.historialCompraRepository = historialCompraRepository;
        this.usuarioRepository = usuarioRepository;
        this.direccionRepository = direccionRepository;
        this.carritoRepository = carritoRepository;
    }
    async transform(value, metadata) {
        if ((await this.historialCompraRepository.existsBy({
            id: value.id,
        }))) {
            throw new common_1.BadRequestException(`Ya existe un pedido con ID: ${value.id}`);
        }
        ;
        if (!(await this.usuarioRepository.existsBy({
            id: value.id_usuario,
        }))) {
            throw new common_1.NotFoundException(`No existe un usuario con ID: ${value.id_usuario}`);
        }
        ;
        const direccion = await this.direccionRepository.findOneBy({ id: value.id_direccion_entrega });
        if (!direccion) {
            throw new common_1.NotFoundException(`No existe una dirección con ID: ${value.id_direccion_entrega}`);
        }
        ;
        if (direccion.id_usuario !== value.id_usuario) {
            throw new common_1.BadRequestException(`La dirección no pertenece al usuario de ID: ${value.id_usuario}`);
        }
        if (!(await this.carritoRepository.exists({ where: {
                usuario_id: value.id_usuario,
            } }))) {
            throw new common_1.NotFoundException(`No existe un carrito de compra para el usuario con ID: ${value.id_usuario}`);
        }
        ;
        return value;
    }
};
exports.ValidationCreatePurchasePipe = ValidationCreatePurchasePipe;
exports.ValidationCreatePurchasePipe = ValidationCreatePurchasePipe = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(historial_compra_1.HistorialCompra)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(direccion_1.Direccion)),
    __param(3, (0, typeorm_1.InjectRepository)(carrito_1.Carrito)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ValidationCreatePurchasePipe);
//# sourceMappingURL=validation-create-purchase.pipe.js.map