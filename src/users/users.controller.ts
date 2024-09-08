import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, Put, HttpException, UsePipes, ValidationPipe, ParseArrayPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { User } from './entities/user.entity';
import { Directions } from './entities/direction.entity';
import { ClientType } from './entities/clientType.entity';
import { ClientState } from './entities/clientState.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({ status: 200, description: 'Este codigo se debe a que se pudo crear correctamente el usuario.' })
  @ApiResponse({ status: 400, description: 'Este codigo se debe a que ya existe un usuario con el correo electronico ingresado.' })
  @ApiTags('Users')
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto): CreateUserDto {
    try {
      const usuario = this.usersService.create(createUserDto);
      return usuario;

    } catch(error){
      throw new HttpException('Ya existe usuario con el correo electronico ingresado.', 400);
    }
  }

  @ApiResponse({ status: 200, description: 'Este codigo se debe a que se pudo encontrar el usuario de manera exitosa.' })
  @ApiResponse({ status: 404, description: 'Este codigo se debe a que no existe un usuario con el id ingresado.' })
  @ApiTags('Users')
  @Get(':id')
  findOne(@Param('id') id: number): User {
    try {
      const usuario = this.usersService.findOne(id);      
      return usuario;
    }catch(error){
      throw new HttpException('No existe usuario con el id ingresado.', 404);
    }
  }

  @ApiResponse({ status: 200, description: 'Este codigo se debe a que se pudo modificar el usuario de manera exitosa.' })
  @ApiResponse({ status: 404, description: 'Este codigo se debe a que no existe un usuario con el id ingresado.' })
  @ApiQuery({name: 'nombres', description: 'Primer y segundo nombre del usuario (debe contener un formato de string correcto).', required: false})
  @ApiQuery({name: 'apellidoPaterno', description: 'Apellido paterno del usuario (debe contener un formato de string correcto).', required: false})
  @ApiQuery({name: 'apellidoMaterno', description: 'Apellido materno del usuario (debe contener un formato de string correcto).', required: false})
  @ApiQuery({name: 'correoElectronico', description: 'Correo electronico del usuario (debe ser un correo con formato válido).', required: false})
  @ApiQuery({name: 'contrasena', description: 'Contrasena del usuario.', required: false})
  // @ApiQuery({name: 'direccion', description: 'Direccion del usuario, puede ser direccion de envio y/o facturacion.', required: false })
  @ApiQuery({name: 'tipoCliente', description: 'Tipo de usuario, puede ser Premium o Estandar.', required: false, enum: ClientType})
  @ApiQuery({name: 'estado', description: 'Estado del usuario, puede ser Activo o Baneado.', required: false,enum: ClientState})
  @ApiTags('Users')
  @UsePipes(new ValidationPipe())
  @Put(':id')
  update(@Param('id') id: number, 
    @Query('nombres') nombres?: string,
    @Query('apellidoPaterno') apellidoPaterno?: string,
    @Query('apellidoMaterno') apellidoMaterno?: string,
    @Query('correoElectronico') correoElectronico?: string,
    @Query('contrasena') contrasena?: string,
    // @Body('direccion', new ParseArrayPipe({items: String , separator : ','})) direccion?: Directions[],
    // @Query('direccion',new ParseArrayPipe({items: String, whitelist: true, separator : ','})) direccion?: Directions[],
    @Body(new ParseArrayPipe({items: Directions})) direccion?: Directions[],
    @Query('tipoCliente') tipoCliente?: ClientType,
    @Query('estado') estado?: ClientState
    ): CreateUserDto {
    try {
      const updateUsuario: CreateUserDto = this.usersService.update(id);
      return updateUsuario;
    }catch(error){
      throw new HttpException('No existe usuario con el id ingresado.', 404);
    }
  }
}
