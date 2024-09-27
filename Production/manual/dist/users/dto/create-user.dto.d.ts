import { ClientType } from '../entities/clientType.entity';
import { ClientState } from '../entities/clientState.entity';
import { Address } from '../entities/address.entity';
export declare class CreateUserDto {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correoElectronico: string;
    contrasena: string;
    direccion: Address[];
    tipoCliente: ClientType;
    estado: ClientState;
}
