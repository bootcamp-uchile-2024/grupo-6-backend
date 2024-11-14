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
exports.ShoppingcartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carrito_1 = require("../orm/entity/carrito");
const typeorm_2 = require("typeorm");
const shoppingCart_mapper_1 = require("./mapper/shoppingCart.mapper");
const libro_1 = require("../orm/entity/libro");
let ShoppingcartService = class ShoppingcartService {
    constructor(carritoRepository, libroRepository) {
        this.carritoRepository = carritoRepository;
        this.libroRepository = libroRepository;
    }
    async create(createShoppingcartDto) {
        const libroEncontrado = await this.libroRepository.findOne({
            where: {
                id: createShoppingcartDto.libro_id
            }
        });
        const carrito = this.carritoRepository.create(createShoppingcartDto);
        await this.carritoRepository.save(carrito);
        return shoppingCart_mapper_1.CarritoMapper.entityToDto(carrito, libroEncontrado);
    }
    async obtenerCarrito() {
        const carritos = await this.carritoRepository.find();
        const items = [];
        for (const carrito of carritos) {
            const libroEncontrado = await this.libroRepository.findOne({
                where: {
                    id: carrito.libro_id
                }
            });
            const item = shoppingCart_mapper_1.CarritoMapper.entityToDto(carrito, libroEncontrado);
            items.push(item);
        }
        return items;
    }
    async cantidadMasMenos(updateDto) {
        if (updateDto.cantidad > 0) {
            const productoEncontrado = await this.carritoRepository.findOne({
                where: {
                    usuario_id: updateDto.usuario_id,
                    libro_id: updateDto.libro_id
                }
            });
            productoEncontrado.cantidad = updateDto.cantidad;
            await this.carritoRepository.save(productoEncontrado);
        }
        if (updateDto.cantidad === 0) {
            const productoEncontrado = await this.carritoRepository.findOne({
                where: {
                    usuario_id: updateDto.usuario_id,
                    libro_id: updateDto.libro_id
                }
            });
            await this.carritoRepository.remove(productoEncontrado);
        }
    }
    async remove(id) {
        const carritos = await this.carritoRepository.find({
            where: {
                usuario_id: id
            }
        });
        const items = [];
        for (const carrito of carritos) {
            const libroEncontrado = await this.libroRepository.findOne({
                where: {
                    id: carrito.libro_id
                }
            });
            const item = shoppingCart_mapper_1.CarritoMapper.entityToDto(carrito, libroEncontrado);
            items.push(item);
            await this.carritoRepository.remove(carrito);
        }
        return items;
    }
};
exports.ShoppingcartService = ShoppingcartService;
exports.ShoppingcartService = ShoppingcartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carrito_1.Carrito)),
    __param(1, (0, typeorm_1.InjectRepository)(libro_1.Libro)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ShoppingcartService);
//# sourceMappingURL=shoppingcart.service.js.map