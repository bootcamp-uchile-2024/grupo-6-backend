import { Carrito } from "src/orm/entity/carrito";
import { CreateShoppingcartDto } from "../dto/create-shoppingcart.dto";
import { ShoppingcartSalidaDto } from "../dto/create-shoppingcart.salida.dto";
import { Libro } from "src/orm/entity/libro";
import { CarritoInformacion } from "src/orm/entity/carrito_informacion";
import { SalidaShoppingcartDto } from "../dto/salida-shoppingcart.dto";
import { ShoppingcartDto } from "../dto/Shoppincart.dto";



export class CarritoMapper {
    static entityToDto(carritos: Carrito[], carritoInformacion: CarritoInformacion): SalidaShoppingcartDto {
        const carritoDto = new SalidaShoppingcartDto();
        carritoDto.fechaCompra = carritoInformacion.fecha_actualizacion;
        carritoDto.precioTotal = carritoInformacion.precio_total;

        const productos: ShoppingcartDto[] = [];
        for(const carrito of carritos){
            const producto = new ShoppingcartDto();
            producto.isbn = carrito.isbn_libro;
            producto.cantidad = carrito.cantidad;
            producto.precio = carrito.precio;
            producto.descuento = carrito.descuento;
            productos.push(producto);
        }

        carritoDto.productos = productos;
        
        return carritoDto;
    };
}