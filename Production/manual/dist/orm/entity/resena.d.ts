import { Libro } from "./libro";
import { Usuario } from "./usuario";
export declare class Resena {
    id: number;
    id_usuario: number;
    id_libro: number;
    comentario: string;
    rating: number;
    fecha: Date;
    libro: Libro;
    usuario: Usuario;
}
