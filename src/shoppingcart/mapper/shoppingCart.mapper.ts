import { Carrito } from "src/orm/entity/carrito";
import { CreateShoppingcartDto } from "../dto/create-shoppingcart.dto";
import { ShoppingcartSalidaDto } from "../dto/create-shoppingcart.salida.dto";
import { Libro } from "src/orm/entity/libro";



export class CarritoMapper {
    static entityToDto(carrito: Carrito, libro: Libro): ShoppingcartSalidaDto {
        const carritoDto = new ShoppingcartSalidaDto();
        carritoDto.nombre = libro.nombre;
        carritoDto.autor = libro.autores;
        carritoDto.caratula = libro.caratula;
        carritoDto.precio = libro.precio;
        carritoDto.cantidad = carrito.cantidad
        return carritoDto;
    };

    static dtoToEntity(carritoDto: CreateShoppingcartDto ): Carrito {
        const carrito = new Carrito();
        carrito.usuario_id = carritoDto.usuario_id;
        carrito.libro_id = carritoDto.libro_id;
        carrito.cantidad = carritoDto.cantidad;
        return carrito;
        }

    /*static entityListToDtoList(clientes: Cliente[]): ClienteDto[] {
        return clientes.map((cliente) => this.entityToDto(cliente));
    };*/
}