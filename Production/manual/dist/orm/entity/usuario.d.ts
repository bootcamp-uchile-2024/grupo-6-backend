import { Direccion } from "./direccion";
import { Resena } from "./resena";
import { HistorialCompra } from "./historial_compra";
export declare class Usuario {
    id: number;
    nombre: string;
    segundo_nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    correo_electronico: string;
    contrasena: string;
    direccion: Direccion[];
    resena: Resena[];
    historialCompra: HistorialCompra[];
}
