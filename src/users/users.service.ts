import { HttpException, Injectable, ParseEnumPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { TipoDireccion } from './entities/tipoDireccion.entity';
import { ClientType } from './entities/clientType.entity';
import { ClientState } from './entities/clientState.entity';
import { Directions } from './entities/direction.entity';
import { ErrorStatus } from 'src/errorStatus';
import { error } from 'console';
import { concat } from 'rxjs';

@Injectable()
export class UsersService {
private usuarios: User[] = [
  new User(1,"Cristobal Andres", "Sanchez","Ossandon","c.sanch.oss@gmail.com","qwerty",[new Directions(1,"El condor","125","N/A","Nunoa","Santiago","Region Metropolitana",[TipoDireccion.ENVIO,TipoDireccion.FACTURACION],"CASA")],ClientType.PREMIUM,ClientState.ACTIVO),
  new User(2,"Daniel Antonio", "Fernandez","Correa","d.fernandez.correa@gmail.com","12345",[new Directions(1,"San Marcos","27","N/A","Penalolen","Santiago","Region Metropolitana",[TipoDireccion.ENVIO,TipoDireccion.FACTURACION],"CASA")],ClientType.ESTANDAR,ClientState.ACTIVO)
];


createSHA256Hash(inputString) {
    const crypto = require('crypto');
    const hash = crypto.createHash('sha256');
    hash.update(inputString);
    return hash.digest('hex');
}

  create(createUserDto: CreateUserDto){
    const existeUsuario = 
      this.usuarios.findIndex((element: User) => element.correoElectronico == createUserDto.correoElectronico)
    if(existeUsuario != -1){
      throw new error();
    }
    const usuario = new User(this.usuarios.length + 1, 
      createUserDto.nombres, 
      createUserDto.apellidoPaterno, 
      createUserDto.apellidoMaterno, 
      createUserDto.correoElectronico, 
      this.createSHA256Hash(createUserDto.contrasena),
      createUserDto.direccion, 
      createUserDto.tipoCliente, 
      createUserDto.estado);

    this.usuarios.push(usuario);
    return usuario;

  }

  findOne(id: number): User {
    const usuario: User = 
      this.usuarios.find((element: User) => element.idUsuario == id)
    if(!usuario){
      throw new Error();
    }
    return usuario;
  }

  update(id: number, 
    idUsuario?: number,
    nombres?: string,
    apellidoPaterno?: string,
    apellidoMaterno?: string,
    correoElectronico?: string,
    contrasena?: string,
    direccion?: Directions[],
    tipoCliente?: ClientType,
    estado?: ClientState): CreateUserDto {
    const elemento: number = this.usuarios.findIndex((element: User) => element.idUsuario == id)
    if(elemento == - 1){
      throw new Error();
    }
    if(nombres){
      this.usuarios[elemento].nombres = nombres
    }
    if(apellidoPaterno){
      this.usuarios[elemento].apellidoPaterno = apellidoPaterno
    }
    if(apellidoMaterno){
      this.usuarios[elemento].apellidoMaterno = apellidoMaterno
    }
    if(correoElectronico){
      this.usuarios[elemento].correoElectronico = correoElectronico
    }
    if(contrasena){
      this.usuarios[elemento].contrasena =  this.createSHA256Hash(contrasena)
    }
    if(direccion){
      this.usuarios[elemento].direccion = direccion
    }
    if(tipoCliente){
      this.usuarios[elemento].tipoCliente = tipoCliente
    }
    if(estado){
      this.usuarios[elemento].estado = estado
    }
    return this.usuarios[elemento];
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
