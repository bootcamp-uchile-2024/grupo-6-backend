import { Direccion } from "src/orm/entity/direccion";
import { CreateAddressDto } from "../dto/create-address.dto";
import { GetAddressDto } from "../dto/get-address.dto";
import { Estado } from "../enum/estado.enum";
import { TipoDireccionEnum } from "../enum/tipoDireccion.enum";
import { UpdateAddressDto } from "../dto/update-address.dto";
import { TipoDireccion } from "src/orm/entity/tipoDireccion";

export class AddressMapper {

  static entityToGetAddressDto(entity: Direccion) : GetAddressDto {
    const dto = new GetAddressDto()
    const tipoDireccion: TipoDireccionEnum[] = entity.tipodirecciones.map(tipo => TipoDireccionEnum[tipo.descripcion.toUpperCase() as keyof typeof TipoDireccionEnum])

    dto.idDireccion = entity.id
    dto.calle = entity.calle
    dto.numeroCalle = entity.numero_calle
    dto.comuna = entity.nombre_comuna
    dto.region = entity.nombre_region
    dto.ciudad = entity.nombre_ciudad
    dto.numeroDepartamento = entity.numero_departamento
    dto.informacionAdicional = entity.informacion_adicional
    dto.tipoDireccion = tipoDireccion
    return dto;
  }

  static entityListToGetAddressDtoList(entityList: Direccion[]) : GetAddressDto[] {
    return entityList.map((e) => AddressMapper.entityToGetAddressDto(e));
  }


  static createAddressDtoToEntity(dto: CreateAddressDto, idUsuario: number) : Direccion {
    const entity = new Direccion()

    entity.id_usuario = idUsuario
    entity.calle = dto.calle;
    entity.numero_calle = dto.numeroCalle;
    entity.nombre_comuna = dto.comuna;
    entity.nombre_region = dto.region;
    entity.nombre_ciudad = dto.ciudad;
    entity.numero_departamento = dto.numeroDepartamento;
    entity.informacion_adicional = dto.informacionAdicional;
    entity.estado = Estado.ACTIVO
    return entity;
  }

  static updateAddressDtoToEntity(dto: UpdateAddressDto, entity: Direccion) : Direccion {

    entity.calle = dto.calle;
    entity.numero_calle = dto.numeroCalle;
    entity.nombre_comuna = dto.comuna;
    entity.nombre_region = dto.region;
    entity.nombre_ciudad = dto.ciudad;
    entity.numero_departamento = dto.numeroDepartamento;
    entity.informacion_adicional = dto.informacionAdicional;
    return entity;
  }

}