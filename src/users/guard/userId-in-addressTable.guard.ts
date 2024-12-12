import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { Direccion } from 'src/orm/entity/direccion';
import { Rol } from 'src/users/enum/rol.enum';
import { Repository } from 'typeorm';
import { Estado } from '../enum/estado.enum';

@Injectable()
export class ValidarUserIdFromAddressGuard implements CanActivate {

  @InjectRepository(Direccion) 
  private readonly direccionRepository: Repository<Direccion>

  async canActivate(context: ExecutionContext,): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const datosUsuario = request.datosUsuario;
    const rolUsuarioAutenticado = datosUsuario.rol;
    const idUsuarioAutenticado = datosUsuario.idUsuario;
    const params = request.params;
    const paramId = params.addressId;

    const existeDireccion: Boolean = await this.direccionRepository.existsBy({id: paramId, id_usuario: idUsuarioAutenticado, estado: Estado.ACTIVO})

    if (rolUsuarioAutenticado === Rol.USER && !existeDireccion) {
      return false;
    }
    return true;
  }
}