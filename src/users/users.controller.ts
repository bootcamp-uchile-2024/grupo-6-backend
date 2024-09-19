import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Query,
  Put,
  HttpException,
  UsePipes,
  ValidationPipe,
  ParseArrayPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { User } from './entities/user.entity';
import { Address } from './entities/address.entity';
import { ClientType } from './entities/clientType.entity';
import { ClientState } from './entities/clientState.entity';
import { TipoDireccion } from './entities/tipoDireccion.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo crear correctamente el usuario.',
  })
  @ApiResponse({
    status: 400,
    description:
      'Este codigo se debe a que ya existe un usuario con el correo electronico ingresado.',
  })
  @ApiTags('Users')
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto): CreateUserDto {
    try {
      const usuario = this.usersService.create(createUserDto);
      return usuario;
    } catch (error) {
      throw new HttpException(
        'Ya existe usuario con el correo electronico ingresado.',
        400,
      );
    }
  }

  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo crear la direccion del usuario de manera exitosa.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que no existe un usuario con el id ingresado.',
  })
  @ApiQuery({
    name: 'calle',
    description:
      'Nombre de la calle. (debe contener un formato de string correcto).',
    required: true,
  })
  @ApiQuery({
    name: 'numeroCalle',
    description:
      'Numero de la calle (debe contener un formato de string correcto).',
    required: true,
  })
  @ApiQuery({
    name: 'numeroDepartamento',
    description:
      'Numero del departamento (debe contener formato de string  correcto).',
    required: false,
  })
  @ApiQuery({
    name: 'comuna',
    description:
      'Comuna a la que vive el usuario (debe contener formato de string correcto).',
    required: true,
  })
  @ApiQuery({
    name: 'ciudad',
    description:
      'Ciudad a la que vive el usuario (debe contener formato de string correcto).',
    required: true,
  })
  @ApiQuery({
    name: 'region',
    description:
      'Region a la que vive el usuario (debe contener formato de string correcto).',
    required: true,
  })
  @ApiQuery({
    name: 'tipoDireccion',
    description: "Tipo de direccion, puede ser 'Envio' o 'Facturacion'.",
    required: true,
    enum: TipoDireccion,
    isArray: true,
  })
  @ApiQuery({
    name: 'informacionAdicional',
    description:
      'Informacion adicional de la direccion del usuario, como por ejemplo referencias para llegar a la direccion.',
    required: false,
  })
  @ApiTags('Users')
  @UsePipes(new ValidationPipe())
  @Post(':idUsuario/address')
  createAddress(
    @Param(
      'idUsuario',
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    )
    idUsuario: number,
    @Query('calle') calle: string,
    @Query('numeroCalle') numeroCalle: string,
    @Query('comuna') comuna: string,
    @Query('ciudad') ciudad: string,
    @Query('region') region: string,
    @Query(
      'tipoDireccion',
      new ParseArrayPipe({ items: String, separator: ',', optional: true }),
    )
    tipoDireccion: string | string[],
    @Query('numeroDepartamento') numeroDepartamento?: string,
    @Query('informacionAdicional') informacionAdicional?: string,
  ): Address {
    // try {
    const createAddress: Address = this.usersService.createAddress(
      idUsuario,
      calle,
      numeroCalle,
      comuna,
      ciudad,
      region,
      tipoDireccion,
      numeroDepartamento,
      informacionAdicional,
    );
    return createAddress;
  }

  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo encontrar el usuario de manera exitosa.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que no existe un usuario con el id ingresado.',
  })
  @ApiTags('Users')
  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))
    id: number,
  ): User {
    try {
      const usuario = this.usersService.findOne(id);
      return usuario;
    } catch (error) {
      throw new HttpException('No existe usuario con el id ingresado.', 404);
    }
  }

  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo modificar el usuario de manera exitosa.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que no existe un usuario con el id ingresado.',
  })
  @ApiQuery({
    name: 'nombres',
    description:
      'Primer y segundo nombre del usuario (debe contener un formato de string correcto).',
    required: false,
  })
  @ApiQuery({
    name: 'apellidoPaterno',
    description:
      'Apellido paterno del usuario (debe contener un formato de string correcto).',
    required: false,
  })
  @ApiQuery({
    name: 'apellidoMaterno',
    description:
      'Apellido materno del usuario (debe contener un formato de string correcto).',
    required: false,
  })
  @ApiQuery({
    name: 'correoElectronico',
    description:
      'Correo electronico del usuario (debe ser un correo con formato válido).',
    required: false,
  })
  @ApiQuery({
    name: 'contrasena',
    description: 'Contrasena del usuario.',
    required: false,
  })
  @ApiQuery({
    name: 'tipoCliente',
    description: 'Tipo de usuario, puede ser Premium o Estandar.',
    required: false,
    enum: ClientType,
  })
  @ApiQuery({
    name: 'estado',
    description: 'Estado del usuario, puede ser Activo o Baneado.',
    required: false,
    enum: ClientState,
  })
  @ApiTags('Users')
  @UsePipes(new ValidationPipe())
  @Put(':id')
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))
    id: number,
    @Query('nombres') nombres?: string,
    @Query('apellidoPaterno') apellidoPaterno?: string,
    @Query('apellidoMaterno') apellidoMaterno?: string,
    @Query('correoElectronico') correoElectronico?: string,
    @Query('contrasena') contrasena?: string,
    @Query('tipoCliente') tipoCliente?: ClientType,
    @Query('estado') estado?: ClientState,
  ): CreateUserDto {
    try {
      const updateUsuario: CreateUserDto = this.usersService.update(
        id,
        nombres,
        apellidoPaterno,
        apellidoMaterno,
        correoElectronico,
        contrasena,
        tipoCliente,
        estado,
      );
      return updateUsuario;
    } catch (error) {
      throw new HttpException('No existe usuario con el id ingresado.', 404);
    }
  }

  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo modificar la direccion del usuario de manera exitosa.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que no existe un usuario con el id ingresado, o no existe el id de la direccion ingresada.',
  })
  @ApiQuery({
    name: 'calle',
    description:
      'Nombre de la calle. (debe contener un formato de string correcto).',
    required: false,
  })
  @ApiQuery({
    name: 'numeroCalle',
    description:
      'Numero de la calle (debe contener un formato de string correcto).',
    required: false,
  })
  @ApiQuery({
    name: 'numeroDepartamento',
    description:
      'Numero del departamento (debe contener formato de string  correcto).',
    required: false,
  })
  @ApiQuery({
    name: 'comuna',
    description:
      'Comuna a la que vive el usuario (debe contener formato de string correcto).',
    required: false,
  })
  @ApiQuery({
    name: 'ciudad',
    description:
      'Ciudad a la que vive el usuario (debe contener formato de string correcto).',
    required: false,
  })
  @ApiQuery({
    name: 'region',
    description:
      'Region a la que vive el usuario (debe contener formato de string correcto).',
    required: false,
  })
  @ApiQuery({
    name: 'tipoDireccion',
    description: "Tipo de direccion, puede ser 'Envio' o 'Facturacion'.",
    required: false,
    enum: TipoDireccion,
    isArray: true,
  })
  @ApiQuery({
    name: 'informacionAdicional',
    description:
      'Informacion adicional de la direccion del usuario, como por ejemplo referencias para llegar a la direccion.',
    required: false,
  })
  @ApiTags('Users')
  @UsePipes(new ValidationPipe())
  @Put(':idUsuario/address/:idDireccion')
  updateAddress(
    @Param(
      'idUsuario',
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    )
    idUsuario: number,
    @Param(
      'idDireccion',
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    )
    idDireccion: number,
    @Query('calle') calle?: string,
    @Query('numeroCalle') numeroCalle?: string,
    @Query('numeroDepartamento') numeroDepartamento?: string,
    @Query('comuna') comuna?: string,
    @Query('ciudad') ciudad?: string,
    @Query('region') region?: string,
    @Query(
      'tipoDireccion',
      new ParseArrayPipe({ items: String, separator: ',', optional: true }),
    )
    tipoDireccion?: string | string[],
    @Query('informacionAdicional') informacionAdicional?: string,
  ): Address {
    // try {
    const updateAddress: Address = this.usersService.updateAddress(
      idUsuario,
      idDireccion,
      calle,
      numeroCalle,
      numeroDepartamento,
      comuna,
      ciudad,
      region,
      tipoDireccion,
      informacionAdicional,
    );
    return updateAddress;
  }

  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo eliminar el usuario de manera exitosa.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que no existe un usuario con el id ingresado.',
  })
  @ApiTags('Users')
  @Delete(':id')
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))
    id: number,
  ): void {
    try {
      const usuario = this.usersService.remove(id);
    } catch (error) {
      throw new HttpException('No existe usuario con el id ingresado.', 404);
    }
  }

  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo eliminar el usuario de manera exitosa.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que no existe un usuario con el id ingresado o no existe el id del correo electronico ingresado.',
  })
  @ApiTags('Users')
  @Delete(':idUsuario/address/:idDireccion')
  removeAdress(
    @Param(
      'idUsuario',
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    )
    idUsuario: number,
    @Param(
      'idDireccion',
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    )
    idDireccion: number,
  ): void {
    const usuario = this.usersService.removeAddress(idUsuario, idDireccion);
    return usuario;
  }
}
