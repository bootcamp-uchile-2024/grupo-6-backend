import { Carrito } from "src/orm/entity/carrito";
import { CreateShoppingcartDto } from "../dto/create-shoppingcart.dto";
import { ShoppingcartSalidaDto } from "../dto/create-shoppingcart.salida.dto";
import { Libro } from "src/orm/entity/libro";



export class CarritoMapper {
    static entityToDto(carrito: Carrito, libro: Libro): ShoppingcartSalidaDto {
        const carritoDto = new ShoppingcartSalidaDto();
        carritoDto.nombre = libro.nombre;
        carritoDto.autor = libro.autor;
        carritoDto.caratula = libro.caratula;
        carritoDto.precio = libro.precio;
        carritoDto.cantidad = carrito.cantidad;
        carritoDto.idUsuario = carrito.usuario_id;
        carritoDto.descuento = libro.descuento;
        carritoDto.stockLibro = libro.stock_libro;
        return carritoDto;
    };

    static dtoToEntity(carritoDto: CreateShoppingcartDto ): Carrito {
        const carrito = new Carrito();
        carrito.usuario_id = carritoDto.idUsuario;
        carrito.isbn_libro = carritoDto.isbn;
        carrito.cantidad = carritoDto.cantidad;
        return carrito;
        }

    static entityListToDtoList(carritos: Carrito[], libros: Libro[]): ShoppingcartSalidaDto[] {
        const carritoDtos = carritos.map((carrito, index) => {
            return this.entityToDto(carrito, libros[index]);
        });
        return carritoDtos;
    };
}