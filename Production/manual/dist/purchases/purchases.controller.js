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
exports.PurchasesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_purchase_dto_1 = require("./dto/create-purchase.dto");
const update_purchase_dto_1 = require("./dto/update-purchase.dto");
const validation_create_purchase_pipe_1 = require("./pipes/validation-create-purchase.pipe");
const validation_update_purchase_pipe_1 = require("./pipes/validation-update-purchase.pipe");
const purchases_service_1 = require("./purchases.service");
const validation_delete_purchase_pipe_1 = require("./pipes/validation-delete-purchase.pipe");
const historial_compra_1 = require("../orm/entity/historial_compra");
const validation_find_purchase_pipe_1 = require("./pipes/validation-find-purchase.pipe");
let PurchasesController = class PurchasesController {
    constructor(purchasesService) {
        this.purchasesService = purchasesService;
    }
    create(createPurchaseDto) {
        try {
            return this.purchasesService.create(createPurchaseDto);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear el pedido', 400);
        }
    }
    async findAll(id_usuario) {
        try {
            return await this.purchasesService.findAllClient(+id_usuario);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener los pedidos', 400);
        }
    }
    async findOne(id) {
        try {
            return await this.purchasesService.findOne(+id);
        }
        catch (error) {
            throw new common_1.HttpException('Error el obtener el pedido', 400);
        }
    }
    async update(id, updatePurchaseDto) {
        try {
            return await this.purchasesService.update(id, updatePurchaseDto);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.HttpException('Error el obtener el pedido', 400);
            }
        }
    }
    async remove(id) {
        try {
            return await this.purchasesService.remove(+id);
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar el libro', 400);
        }
    }
};
exports.PurchasesController = PurchasesController;
__decorate([
    (0, swagger_1.ApiTags)('Purchases'),
    (0, common_1.UsePipes)(validation_create_purchase_pipe_1.ValidationCreatePurchasePipe),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Se crea el pedido correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al crear el pedido' }),
    (0, swagger_1.ApiBody)({ type: create_purchase_dto_1.CreatePurchaseDto, required: true }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchase_dto_1.CreatePurchaseDto]),
    __metadata("design:returntype", void 0)
], PurchasesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiTags)('Purchases'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Se obtuvieron los pedidos del usuario correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al obtener los pedidos' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, type: 'number', description: 'ID del cliente' }),
    (0, common_1.Get)('/cliente/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiTags)('Purchases'),
    (0, common_1.UsePipes)(validation_find_purchase_pipe_1.ValidationFindPurchasePipe),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Se obtuvo el pedido correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al obtener el pedido' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, type: 'number', description: 'ID del pedido' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiTags)('Purchases'),
    (0, common_1.UsePipes)(validation_update_purchase_pipe_1.ValidationUpdatePurchasePipe),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Se actualizó el estado del pedido correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al actualizar estado del pedido' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, type: 'number', description: 'ID del pedido' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [historial_compra_1.HistorialCompra,
        update_purchase_dto_1.UpdatePurchaseDto]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiTags)('Purchases'),
    (0, common_1.UsePipes)(validation_delete_purchase_pipe_1.ValidationDeletePurchasePipe),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Se eliminó el pedido correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al eliminar el pedido' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "remove", null);
exports.PurchasesController = PurchasesController = __decorate([
    (0, common_1.Controller)('purchases'),
    __metadata("design:paramtypes", [purchases_service_1.PurchasesService])
], PurchasesController);
//# sourceMappingURL=purchases.controller.js.map