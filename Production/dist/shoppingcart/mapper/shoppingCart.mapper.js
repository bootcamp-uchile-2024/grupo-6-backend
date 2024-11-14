"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarritoMapper = void 0;
const carrito_1 = require("../../orm/entity/carrito");
const create_shoppingcart_salida_dto_1 = require("../dto/create-shoppingcart.salida.dto");
class CarritoMapper {
    static entityToDto(carrito, libro) {
        const carritoDto = new create_shoppingcart_salida_dto_1.ShoppingcartSalidaDto();
        carritoDto.nombre = libro.nombre;
        carritoDto.autor = libro.autores;
        carritoDto.caratula = libro.caratula;
        carritoDto.precio = libro.precio;
        carritoDto.cantidad = carrito.cantidad;
        return carritoDto;
    }
    ;
    static dtoToEntity(carritoDto) {
        const carrito = new carrito_1.Carrito();
        carrito.usuario_id = carritoDto.usuario_id;
        carrito.libro_id = carritoDto.libro_id;
        carrito.cantidad = carritoDto.cantidad;
        return carrito;
    }
}
exports.CarritoMapper = CarritoMapper;
//# sourceMappingURL=shoppingCart.mapper.js.map