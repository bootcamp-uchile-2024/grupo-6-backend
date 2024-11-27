import { Libro } from "./libro";
import { Usuario } from "./usuario";
export declare class Carrito {
    usuario_id: number;
    libro_id: number;
    cantidad: number;
    usuario: Usuario;
    libros: Libro[];
}
