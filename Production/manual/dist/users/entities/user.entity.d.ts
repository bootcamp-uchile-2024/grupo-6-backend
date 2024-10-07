import { Address } from './address.entity';
export declare class User {
    idUsuario: number;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correoElectronico: string;
    contrasena: string;
    direccion: Address[];
    constructor(idUsuario: number, nombres: string, apellidoPaterno: string, apellidoMaterno: string, correoElectronico: string, contrasena: string, direccion: Address[]);
}
