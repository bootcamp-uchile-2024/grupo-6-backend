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
exports.ShoppingcartController = void 0;
const common_1 = require("@nestjs/common");
const shoppingcart_service_1 = require("./shoppingcart.service");
const swagger_1 = require("@nestjs/swagger");
const create_product_dto_1 = require("../products/dto/create-product.dto");
let ShoppingcartController = class ShoppingcartController {
    constructor(shoppingcartService) {
        this.shoppingcartService = shoppingcartService;
    }
    create(createProductDto) {
        return this.shoppingcartService.create(createProductDto);
    }
    obtenerProductos() {
        const encontrado = this.shoppingcartService.obtenerProductos();
        return encontrado;
    }
    remove(item) {
        const encontrado = this.shoppingcartService.remove(item);
        if (encontrado) {
            return 'Producto eliminado del carrito de compra';
        }
        else {
            throw new common_1.NotFoundException();
        }
    }
};
exports.ShoppingcartController = ShoppingcartController;
__decorate([
    (0, swagger_1.ApiTags)('Shopping cart'),
    (0, swagger_1.ApiBody)({
        type: create_product_dto_1.CreateProductDto,
        description: 'Datos del libro que se va a cargar al carrito de compras',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Producto agregado a carrito de compras',
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ShoppingcartController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiTags)('Shopping cart'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Obtención de carrito de compras' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'No se puede obtener carrito de compras',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShoppingcartController.prototype, "obtenerProductos", null);
__decorate([
    (0, swagger_1.ApiTags)('Shopping cart'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto eliminado del carrito de compra',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Producto no existe en el carrito de compra',
    }),
    (0, common_1.Delete)(':item'),
    __param(0, (0, common_1.Param)('item', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShoppingcartController.prototype, "remove", null);
exports.ShoppingcartController = ShoppingcartController = __decorate([
    (0, common_1.Controller)('shoppingcart'),
    __metadata("design:paramtypes", [shoppingcart_service_1.ShoppingcartService])
], ShoppingcartController);
//# sourceMappingURL=shoppingcart.controller.js.map