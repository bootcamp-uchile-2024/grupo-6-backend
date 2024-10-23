import { Comuna } from "./comuna";
import { Usuario } from "./usuario";
import { HistorialCompra } from "./historial_compra";
import { TipoDireccion } from "./tipoDireccion";
export declare class Direccion {
    id: number;
    id_usuario: number;
    id_tipo_direccion: number;
    calle: string;
    numero_calle: string;
    numero_departamento: string;
    id_comuna: number;
    informacion_adicional: string;
    comuna: Comuna;
    usuario: Usuario;
    tipodirecciones: TipoDireccion[];
    historialCompra: HistorialCompra[];
}
