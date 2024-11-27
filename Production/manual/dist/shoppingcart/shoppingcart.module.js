"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingcartModule = void 0;
const common_1 = require("@nestjs/common");
const shoppingcart_service_1 = require("./shoppingcart.service");
const shoppingcart_controller_1 = require("./shoppingcart.controller");
const carrito_1 = require("../orm/entity/carrito");
const typeorm_1 = require("@nestjs/typeorm");
const libro_1 = require("../orm/entity/libro");
let ShoppingcartModule = class ShoppingcartModule {
};
exports.ShoppingcartModule = ShoppingcartModule;
exports.ShoppingcartModule = ShoppingcartModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                carrito_1.Carrito,
                libro_1.Libro
            ])],
        controllers: [shoppingcart_controller_1.ShoppingcartController],
        providers: [shoppingcart_service_1.ShoppingcartService],
    })
], ShoppingcartModule);
//# sourceMappingURL=shoppingcart.module.js.map