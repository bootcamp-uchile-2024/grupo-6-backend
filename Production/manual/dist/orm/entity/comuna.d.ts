import { Ciudad } from "./ciudad";
import { Direccion } from "./direccion";
export declare class Comuna {
    id: number;
    nombre: string;
    id_ciudad: number;
    ciudad: Ciudad;
    direccion: Direccion[];
}
