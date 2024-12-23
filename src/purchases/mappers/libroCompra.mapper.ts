import { Carrito } from "src/orm/entity/carrito";
import { HistorialCompra } from "src/orm/entity/historial_compra";
import { LibroCompra } from "src/orm/entity/libro_compra";
import { GetLibroCompraDto } from "../dto/get-libro-compra.dto";

export class LibroCompraMapper {
    static carritoToEntity(carrito: Carrito, historial_compra: HistorialCompra): LibroCompra {
        const entity: LibroCompra = new LibroCompra();

        entity.id_compra = historial_compra.id;
        entity.isbn_libro = carrito.isbn_libro;
        entity.cantidad = carrito.cantidad;
        entity.precio = carrito.precio * (1 - carrito.descuento/100); // PRECIO CON DESCUENTO APLICADO

        return entity
    }

    static entityToDto(libroCompra: LibroCompra): GetLibroCompraDto {
        const dto = new GetLibroCompraDto();

        dto.isbn = libroCompra.isbn_libro;
        dto.cantidad = libroCompra.cantidad;
        dto.precioFinal = libroCompra.precio;

        return dto
    }
}