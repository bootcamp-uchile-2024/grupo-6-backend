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
    if(typeof value === "number"){
        const id: number = +value;
        const idNoExisteBool: boolean = await this.userRepository.existsBy({id: +id, estado: Estado.ACTIVO});
        if(!idNoExisteBool){
          throw new NotFoundException("Usuario no existe.");
        }
        return value;
    }


    const correoNoExisteBool = await this.userRepository.existsBy({correo_electronico: value.correoElectronico, estado: Estado.ACTIVO})
    if (!correoNoExisteBool) {
        throw new NotFoundException("Usuario no existe.");
    }

    return value;
  }
}