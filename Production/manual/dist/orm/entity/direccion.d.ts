import { HistorialCompra } from "./historial_compra";
import { TipoDireccion } from "./tipoDireccion";
import { Usuario } from "./usuario";
export declare class Direccion {
    id: number;
    id_usuario: number;
    id_tipo_direccion: number;
    calle: string;
    numero_calle: string;
    numero_departamento: string;
    informacion_adicional: string;
    nombre_comuna: string;
    nombre_ciudad: string;
    nombre_region: string;
    usuario: Usuario;
    tipodirecciones: TipoDireccion[];
    historialCompra: HistorialCompra[];
}
