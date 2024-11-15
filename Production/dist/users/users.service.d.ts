import { Usuario } from 'src/orm/entity/usuario';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Address } from './entities/address.entity';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly userRepository;
    private usuarios;
    constructor(userRepository: Repository<Usuario>);
    createSHA256Hash(inputString: any): any;
    create(createUserDto: CreateUserDto): User;
    findOne(id: number): User;
    findAllUsuarios(): Promise<Usuario[]>;
    update(id: number, nombres?: string, apellidoPaterno?: string, apellidoMaterno?: string, correoElectronico?: string, contrasena?: string): CreateUserDto;
    createAddress(idUsuario: number, calle: string, numeroCalle: string, comuna: string, ciudad: string, region: string, tipoDireccion: string | string[], numeroDepartamento?: string, informacionAdicional?: string): Address;
    updateAddress(idUsuario: number, idDireccion: number, calle?: string, numeroCalle?: string, numeroDepartamento?: string, comuna?: string, ciudad?: string, region?: string, tipoDireccion?: string | string[], informacionAdicional?: string): Address;
    remove(id: number): void;
    removeAddress(idUser: number, idAdress: number): void;
}
