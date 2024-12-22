import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/orm/entity/usuario';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioExistePipe implements PipeTransform {

    constructor(
        @InjectRepository(Usuario) 
        private readonly userRepository: Repository<Usuario>,
    
        ) {}
  
  async transform(value: any, metadata: ArgumentMetadata) {
    if(!value.correoElectronico){
      return value
    }
    const existeBool = await this.userRepository.existsBy({correo_electronico: value.correoElectronico})

    if (existeBool) {
        throw new BadRequestException("Correo electronico ya existe, intentar con otro.");
    }

    return value;
  }
}