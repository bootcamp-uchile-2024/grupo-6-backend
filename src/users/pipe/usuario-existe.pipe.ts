import { ArgumentMetadata, BadRequestException, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/orm/entity/usuario';
import { Repository } from 'typeorm';
import { Estado } from '../enum/estado.enum';

@Injectable()
export class UsuarioExistePipe implements PipeTransform {

    constructor(
        @InjectRepository(Usuario) 
        private readonly userRepository: Repository<Usuario>,
    
        ) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    const existeBool = await this.userRepository.existsBy({correo_electronico: value.correoElectronico})

    if (existeBool) {
        throw new BadRequestException("Usuario ya existe.");
    }

    return value;
  }
}