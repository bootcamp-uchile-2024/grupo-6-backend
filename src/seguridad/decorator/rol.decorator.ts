import { SetMetadata } from "@nestjs/common";
import { Rol } from "src/users/enum/rol.enum";

export const ROLES_AUTORIZADOS_DECORATOR = 'ROLES_AUTORIZADOS';
export const RolesAutorizados = (...params: Rol[]) => SetMetadata(ROLES_AUTORIZADOS_DECORATOR, params);