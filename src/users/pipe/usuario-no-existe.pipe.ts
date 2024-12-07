import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/orm/entity/usuario';
import { Repository } from 'typeorm';
import { Estado } from '../enum/estado.enum';

@Injectable()
export class UsuarioNoExistePipe implements PipeTransform {

    constructor(
        @InjectRepository(Usuario) 
        private readonly userRepository: Repository<Usuario>,
    
        ) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    // const correo = value.correoElectronico
    // if(typeof value == "number"){ 
    //   const id: number = +value
    //   const idNoExisteBool: boolean = await this.userRepository.existsBy({id: +id})
    //   const usuarioInactivoBool1: boolean = await this.userRepository.existsBy({id: +id,estado: 'INACTIVO'})
    //   if(!idNoExisteBool){
    //     if(!idNoExisteBool || usuarioInactivoBool1){
    //       throw new NotFoundException("Usuario no existe.");
    //     }
    //   }
    // }
    const noExisteBool = await this.userRepository.findOneBy({correo_electronico: value.correoElectronico})

    if (!noExisteBool || noExisteBool.estado === Estado.INACTIVO) {
        throw new NotFoundException("Usuario no existe.");
    }

    return value;
  }
}