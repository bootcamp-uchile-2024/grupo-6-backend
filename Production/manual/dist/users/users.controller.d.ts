import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Address } from './entities/address.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): CreateUserDto;
    createAddress(idUsuario: number, calle: string, numeroCalle: string, comuna: string, ciudad: string, region: string, tipoDireccion: string | string[], numeroDepartamento?: string, informacionAdicional?: string): Address;
    findOne(id: number): User;
    update(id: number, nombres?: string, apellidoPaterno?: string, apellidoMaterno?: string, correoElectronico?: string, contrasena?: string): CreateUserDto;
    updateAddress(idUsuario: number, idDireccion: number, calle?: string, numeroCalle?: string, numeroDepartamento?: string, comuna?: string, ciudad?: string, region?: string, tipoDireccion?: string | string[], informacionAdicional?: string): Address;
    remove(id: number): void;
    removeAdress(idUsuario: number, idDireccion: number): void;
}
