"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingcartService = void 0;
const common_1 = require("@nestjs/common");
const shoppingcart_entity_1 = require("./entities/shoppingcart.entity");
let ShoppingcartService = class ShoppingcartService {
    constructor() {
        this.shoppingcart = [];
    }
    create(createProductotDto) {
        const encontrado = this.shoppingcart.find((element) => element.isbn == createProductotDto.isbn);
        if (encontrado) {
            const cartCantidad = this.shoppingcart.find((element) => element.isbn == encontrado.isbn);
            if (cartCantidad) {
                cartCantidad.cantidad = cartCantidad.cantidad + 1;
            }
        }
        else {
            const cart = new shoppingcart_entity_1.Shoppingcart();
            cart.isbn = createProductotDto.isbn;
            cart.item = this.shoppingcart.length + 1;
            cart.nombre = createProductotDto.nombre;
            cart.autor = createProductotDto.autor;
            cart.caratula = createProductotDto.caratula;
            cart.editorial = createProductotDto.editorial;
            cart.precio = createProductotDto.precio;
            cart.descuento = createProductotDto.descuento;
            cart.encuadernacion = createProductotDto.encuadernacion;
            cart.cantidad = 1;
            cart.stockLibro = createProductotDto.stockLibro;
            this.shoppingcart.push(cart);
            return this.shoppingcart;
        }
    }
    obtenerProductos() {
        return this.shoppingcart;
    }
    remove(item) {
        const encontrado = this.shoppingcart.find((element) => element.item == item);
        if (encontrado) {
            const index = this.shoppingcart.indexOf(encontrado);
            this.shoppingcart.splice(index, 1);
            return encontrado;
        }
        else {
            return null;
        }
    }
};
exports.ShoppingcartService = ShoppingcartService;
exports.ShoppingcartService = ShoppingcartService = __decorate([
    (0, common_1.Injectable)()
], ShoppingcartService);
//# sourceMappingURL=shoppingcart.service.js.map