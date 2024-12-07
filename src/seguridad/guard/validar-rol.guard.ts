import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { ROLES_AUTORIZADOS_DECORATOR } from '../decorator/rol.decorator';
import { Rol } from 'src/users/enum/rol.enum';

@Injectable()
export class ValidarRolGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector
  ) {}

  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const datosUsuario = request.datosUsuario;
    const rolUsuarioAutenticado = datosUsuario.rol;
    const rolesAutorizados = this.reflector.getAllAndOverride<Rol[]>(ROLES_AUTORIZADOS_DECORATOR,[context.getHandler(), context.getClass() ]);
    const encontrado = rolesAutorizados.find(r => r === rolUsuarioAutenticado);
    if (!encontrado) {
      return false;
    }
    return true;
  }
}