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
exports.ValidationUpdatePurchasePipe = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const direccion_1 = require("../../orm/entity/direccion");
const historial_compra_1 = require("../../orm/entity/historial_compra");
const typeorm_2 = require("typeorm");
let ValidationUpdatePurchasePipe = class ValidationUpdatePurchasePipe {
    constructor(historialCompraRepository, direccionRepository) {
        this.historialCompraRepository = historialCompraRepository;
        this.direccionRepository = direccionRepository;
    }
    async transform(value, metadata) {
        if (metadata.type === 'param') {
            const pedido = await this.historialCompraRepository.findOneBy({ id: value });
            if (!pedido) {
                throw new common_1.NotFoundException(`No existe un pedido con ID: ${value}`);
            }
            return pedido;
        }
        if (metadata.type === 'body') {
            if (value.estatus_compra) {
                const listaEstadosValidos = ['En espera de pago', 'En proceso', 'Completada', 'Cancelada'];
                if (!(listaEstadosValidos.includes(value.estatus_compra))) {
                    throw new common_1.BadRequestException(`Estado de pedido inválido. Debe ser: ${listaEstadosValidos}`);
                }
                ;
            }
            ;
            if (value.id_direccion_entrega !== null) {
                if (!(this.direccionRepository.existsBy({ id: value.id_direccion_entrega }))) {
                    throw new common_1.NotFoundException(`No existe una dirección con el ID: ${value.id_direccion_entrega}`);
                }
            }
            return value;
        }
    }
};
exports.ValidationUpdatePurchasePipe = ValidationUpdatePurchasePipe;
exports.ValidationUpdatePurchasePipe = ValidationUpdatePurchasePipe = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(historial_compra_1.HistorialCompra)),
    __param(1, (0, typeorm_1.InjectRepository)(direccion_1.Direccion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ValidationUpdatePurchasePipe);
//# sourceMappingURL=validation-update-purchase.pipe.js.map