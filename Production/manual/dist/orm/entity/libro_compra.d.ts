import { HistorialCompra } from "./historial_compra";
import { Libro } from "./libro";
export declare class LibroCompra {
    id_compra: number;
    id_libro: number;
    cantidad: number;
    historialCompra: HistorialCompra;
    libro: Libro;
}
