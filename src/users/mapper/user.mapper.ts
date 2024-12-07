import { Usuario } from "src/orm/entity/usuario";
import { GetUserDto } from "../dto/get-user.dto";
import { GetLoginUserDto } from "../dto/get-login-user.dto";
import { Rol } from "../enum/rol.enum";
import { CreateUserDto } from "../dto/create-user.dto";
import { Estado } from "../enum/estado.enum";
import { UpdateUserDto } from "../dto/update-user.dto";

export class UserMapper {

  static entityToGetUserDto(entity: Usuario) : GetUserDto {
    const dto = new GetUserDto(
        entity.id,
        entity.nombres,
        entity.apellido_paterno,
        entity.apellido_materno,
        entity.correo_electronico
    );
    return dto;
  }

  static entityListToGetUserDtoList(entityList: Usuario[]) : GetUserDto[] {
    return entityList.map((e) => UserMapper.entityToGetUserDto(e));
  }

  static entityTogetLoginUserDto(entity: Usuario) : GetLoginUserDto {
    const dto = new GetLoginUserDto()
        dto.idUsuario = entity.id;
        dto.nombres = entity.nombres;
        dto.apellidoPaterno = entity.apellido_paterno;
        dto.apellidoMaterno = entity.apellido_materno;
        dto.correoElectronico = entity.correo_electronico;
        dto.rol = Rol[entity.rol];
    return dto;
  }


  static createUserDtoToEntity(dto: CreateUserDto) : Usuario {
    const entity = new Usuario()
        entity.nombres = dto.nombres;
        entity.apellido_paterno = dto.apellidoPaterno;
        entity.apellido_materno = dto.apellidoMaterno;
        entity.correo_electronico = dto.correoElectronico;
        entity.contrasena = dto.contrasena;
        entity.rol = Rol.USER;
        entity.estado = Estado.ACTIVO;
    return entity;
  }

  static updateUserDtoToEntity(dto: UpdateUserDto, entity: Usuario) : Usuario {
        entity.nombres = dto.nombres;
        entity.apellido_paterno = dto.apellidoPaterno;
        entity.apellido_materno = dto.apellidoMaterno;
        entity.correo_electronico = dto.correoElectronico;
        entity.contrasena = dto.contrasena;
    return entity;
  }

}