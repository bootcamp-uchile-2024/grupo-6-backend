import { Carrito } from "src/orm/entity/carrito";
import { CreateShoppingcartDto } from "../dto/create-shoppingcart.dto";
import { ShoppingcartSalidaDto } from "../dto/create-shoppingcart.salida.dto";
import { Libro } from "src/orm/entity/libro";
export declare class CarritoMapper {
    static entityToDto(carrito: Carrito, libro: Libro): ShoppingcartSalidaDto;
    static dtoToEntity(carritoDto: CreateShoppingcartDto): Carrito;
}
