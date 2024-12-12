import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Rol } from 'src/users/enum/rol.enum';

@Injectable()
export class ValidarUserParamIdGuard implements CanActivate {


  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const datosUsuario = request.datosUsuario;
    const rolUsuarioAutenticado = datosUsuario.rol;
    const idUsuarioAutenticado = datosUsuario.idUsuario;
    const params = request.params;
    const paramId = params.userId;

    if (rolUsuarioAutenticado === Rol.USER && idUsuarioAutenticado != paramId) {
      return false;
    }
    return true;
  }
}