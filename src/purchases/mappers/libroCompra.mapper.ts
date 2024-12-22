import { Carrito } from "src/orm/entity/carrito";
import { HistorialCompra } from "src/orm/entity/historial_compra";
import { LibroCompra } from "src/orm/entity/libro_compra";

export class LibroCompraMapper {
    static carritoToEntity(carrito: Carrito, historial_compra: HistorialCompra): LibroCompra {
        const entity: LibroCompra = new LibroCompra();

        entity.id_compra = historial_compra.id;
        entity.isbn_libro = carrito.isbn_libro;
        entity.cantidad = carrito.cantidad;
        entity.precio = carrito.precio;

        return entity
    }
}