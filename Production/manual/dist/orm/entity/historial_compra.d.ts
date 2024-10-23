import { Usuario } from "./usuario";
import { Direccion } from "./direccion";
import { LibroCompra } from "./libro_compra";
export declare class HistorialCompra {
    id: number;
    id_usuario: number;
    estatus_compra: string;
    fecha_compra: Date;
    fecha_entrega: Date;
    id_direccion_entrega: number;
    usuario: Usuario;
    direccion: Direccion;
    libroCompra: LibroCompra[];
}
