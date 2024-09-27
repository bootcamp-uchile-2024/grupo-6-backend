import { ClientType } from './clientType.entity';
import { ClientState } from './clientState.entity';
import { Address } from './address.entity';
export declare class User {
    idUsuario: number;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correoElectronico: string;
    contrasena: string;
    direccion: Address[];
    tipoCliente: ClientType;
    estado: ClientState;
    constructor(idUsuario: number, nombres: string, apellidoPaterno: string, apellidoMaterno: string, correoElectronico: string, contrasena: string, direccion: Address[], tipoCliente: ClientType, estado: ClientState);
}
