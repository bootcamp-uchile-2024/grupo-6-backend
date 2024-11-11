import { ArgumentMetadata, BadRequestException, Inject, Injectable, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "src/orm/entity/usuario";
import { Repository } from "typeorm";

@Injectable()
export class ValidacionExisteUsuarioPipe implements PipeTransform {

  constructor(
    @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>
  ) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    let existe : boolean = await this.usuarioRepository.existsBy({
      id: value.id
    });
    if (!existe) {
      throw new BadRequestException('No existe el usuario con el ID ingresado.');
    }

//     existe = await this.empleadoRepository.existsBy({
//       emailUsuario: value.email
//     });
//     if (existe) {
//       throw new BadRequestException('El email ya esta asignado a otro empleado');
//     }
//     return value;
//   }
    }

}