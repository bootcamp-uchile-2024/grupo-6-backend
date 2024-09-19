import { HttpException, Injectable, ParseEnumPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { TipoDireccion } from './entities/tipoDireccion.entity';
import { ClientType } from './entities/clientType.entity';
import { ClientState } from './entities/clientState.entity';
import { Address } from './entities/address.entity';
import { ErrorStatus } from 'src/errorStatus';
import { error } from 'console';
import { concat } from 'rxjs';
import { isArray } from 'class-validator';

@Injectable()
export class UsersService {
  private usuarios: User[] = [
    new User(
      1,
      'Cristobal Andres',
      'Sanchez',
      'Ossandon',
      'c.sanch.oss@gmail.com',
      'qwerty',
      [
        new Address(
          1,
          'El condor',
          '125',
          'N/A',
          'Nunoa',
          'Santiago',
          'Region Metropolitana',
          [TipoDireccion.ENVIO, TipoDireccion.FACTURACION],
          'CASA',
        ),
      ],
      ClientType.PREMIUM,
      ClientState.ACTIVO,
    ),
    new User(
      2,
      'Daniel Antonio',
      'Fernandez',
      'Correa',
      'd.fernandez.correa@gmail.com',
      '12345',
      [
        new Address(
          1,
          'San Marcos',
          '27',
          'N/A',
          'Penalolen',
          'Santiago',
          'Region Metropolitana',
          [TipoDireccion.ENVIO, TipoDireccion.FACTURACION],
          'CASA',
        ),
      ],
      ClientType.ESTANDAR,
      ClientState.ACTIVO,
    ),
  ];

  createSHA256Hash(inputString) {
    const crypto = require('crypto');
    const hash = crypto.createHash('sha256');
    hash.update(inputString);
    return hash.digest('hex');
  }

  create(createUserDto: CreateUserDto) {
    const existeUsuario = this.usuarios.findIndex(
      (element: User) =>
        element.correoElectronico == createUserDto.correoElectronico,
    );
    if (existeUsuario != -1) {
      throw new error();
    }
    const usuario = new User(
      this.usuarios.length + 1,
      createUserDto.nombres,
      createUserDto.apellidoPaterno,
      createUserDto.apellidoMaterno,
      createUserDto.correoElectronico,
      this.createSHA256Hash(createUserDto.contrasena),
      [],
      createUserDto.tipoCliente,
      createUserDto.estado,
    );

    this.usuarios.push(usuario);
    return usuario;
  }

  findOne(id: number): User {
    const usuario: User = this.usuarios.find(
      (element: User) => element.idUsuario == id,
    );
    if (!usuario) {
      throw new Error();
    }
    return usuario;
  }

  update(
    id: number,
    nombres?: string,
    apellidoPaterno?: string,
    apellidoMaterno?: string,
    correoElectronico?: string,
    contrasena?: string,
    tipoCliente?: ClientType,
    estado?: ClientState,
  ): CreateUserDto {
    const elemento: number = this.usuarios.findIndex(
      (element: User) => element.idUsuario == id,
    );
    if (elemento == -1) {
      throw new Error();
    }
    if (nombres) {
      this.usuarios[elemento].nombres = nombres;
    }
    if (apellidoPaterno) {
      this.usuarios[elemento].apellidoPaterno = apellidoPaterno;
    }
    if (apellidoMaterno) {
      this.usuarios[elemento].apellidoMaterno = apellidoMaterno;
    }
    if (correoElectronico) {
      this.usuarios[elemento].correoElectronico = correoElectronico;
    }
    if (contrasena) {
      this.usuarios[elemento].contrasena = this.createSHA256Hash(contrasena);
    }
    if (tipoCliente) {
      this.usuarios[elemento].tipoCliente = tipoCliente;
    }
    if (estado) {
      this.usuarios[elemento].estado = estado;
    }
    return this.usuarios[elemento];
  }

  createAddress(
    idUsuario: number,
    calle: string,
    numeroCalle: string,
    comuna: string,
    ciudad: string,
    region: string,
    tipoDireccion: string | string[],
    numeroDepartamento?: string,
    informacionAdicional?: string,
  ): Address {
    const elementoUs: number = this.usuarios.findIndex(
      (element: User) => element.idUsuario == idUsuario,
    );
    if (elementoUs == -1) {
      throw new HttpException('No existe usuario con el id ingresado.', 404);
    }

    const newAdress: Address = new Address(0, '', '', '', '', '', '', [], '');

    const idDireccion: number = this.usuarios[elementoUs].direccion.length + 1;
    newAdress.idDireccion = idDireccion;
    newAdress.calle = calle;
    newAdress.numeroCalle = numeroCalle;
    newAdress.comuna = comuna;
    newAdress.ciudad = ciudad;
    newAdress.region = region;
    if (!isArray(tipoDireccion)) {
      newAdress.tipoDireccion.push(tipoDireccion as TipoDireccion);
    } else {
      newAdress.tipoDireccion = tipoDireccion as TipoDireccion[];
    }
    if (numeroDepartamento) {
      newAdress.numeroDepartamento = numeroDepartamento;
    }
    if (informacionAdicional) {
      newAdress.informacionAdicional = informacionAdicional;
    }

    this.usuarios[elementoUs].direccion.push(newAdress);
    return newAdress;
  }

  updateAddress(
    idUsuario: number,
    idDireccion: number,
    calle?: string,
    numeroCalle?: string,
    numeroDepartamento?: string,
    comuna?: string,
    ciudad?: string,
    region?: string,
    tipoDireccion?: string | string[],
    informacionAdicional?: string,
  ): Address {
    const elementoUs: number = this.usuarios.findIndex(
      (element: User) => element.idUsuario == idUsuario,
    );
    if (elementoUs == -1) {
      throw new HttpException('No existe usuario con el id ingresado.', 404);
    }
    const elementoAd: number = this.usuarios[elementoUs].direccion.findIndex(
      (element: Address) => element.idDireccion == idDireccion,
    );
    if (elementoAd == -1) {
      throw new HttpException('No existe direccion con el id ingresado.', 404);
    }

    if (calle) {
      this.usuarios[elementoUs].direccion[elementoAd].calle = calle;
    }
    if (numeroCalle) {
      this.usuarios[elementoUs].direccion[elementoAd].numeroCalle = numeroCalle;
    }
    if (numeroDepartamento) {
      this.usuarios[elementoUs].direccion[elementoAd].numeroDepartamento =
        numeroDepartamento;
    }
    if (comuna) {
      this.usuarios[elementoUs].direccion[elementoAd].comuna = comuna;
    }
    if (ciudad) {
      this.usuarios[elementoUs].direccion[elementoAd].ciudad = ciudad;
    }
    if (region) {
      this.usuarios[elementoUs].direccion[elementoAd].region = region;
    }
    if (tipoDireccion) {
      if (!isArray(tipoDireccion)) {
        this.usuarios[elementoUs].direccion[elementoAd].tipoDireccion = [];
        this.usuarios[elementoUs].direccion[elementoAd].tipoDireccion.push(
          tipoDireccion as TipoDireccion,
        );
      } else {
        this.usuarios[elementoUs].direccion[elementoAd].tipoDireccion = [];
        this.usuarios[elementoUs].direccion[elementoAd].tipoDireccion =
          tipoDireccion as TipoDireccion[];
      }
    }
    if (informacionAdicional) {
      this.usuarios[elementoUs].direccion[elementoAd].informacionAdicional =
        informacionAdicional;
    }
    return this.usuarios[elementoUs].direccion[elementoAd];
  }

  remove(id: number) {
    const elemento: number = this.usuarios.findIndex(
      (element: User) => element.idUsuario == id,
    );
    if (elemento == -1) {
      throw new Error();
    }
    this.usuarios.splice(elemento, 1);
  }

  removeAddress(idUser: number, idAdress: number) {
    const elementoUs: number = this.usuarios.findIndex(
      (element: User) => element.idUsuario == idUser,
    );
    if (elementoUs == -1) {
      throw new HttpException('No existe usuario con el id ingresado.', 404);
    }
    const elementoAd: number = this.usuarios[elementoUs].direccion.findIndex(
      (element: Address) => element.idDireccion == idAdress,
    );
    if (elementoAd == -1) {
      throw new HttpException('No existe direccion con el id ingresado.', 404);
    }
    this.usuarios[elementoUs].direccion.splice(elementoAd, 1);
  }
}
