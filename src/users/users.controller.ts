import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesAutorizados } from 'src/seguridad/decorator/rol.decorator';
import { JwtGuard } from 'src/seguridad/guard/jwt.guard';
import { ValidarRolGuard } from 'src/seguridad/guard/validar-rol.guard';
import { CreateAddressDto } from './dto/create-address.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { GetAddressDto } from './dto/get-address.dto';
import { GetAllUsersDto } from './dto/get-all-users.dto';
import { GetLoginUserDto } from './dto/get-login-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { UpdateUserAdminDto } from './dto/update-user-admin.dto copy';
import { UpdateUserDto } from './dto/update-user.dto';
import { Rol } from './enum/rol.enum';
import { ValidarUserIdFromAddressGuard } from './guard/userId-in-addressTable.guard';
import { ValidarUserParamIdGuard } from './guard/validar-userId.guard';
import { HashPipe } from './pipe/hash.pipe';
import { UsuarioExistePipe } from './pipe/usuario-existe.pipe';
import { UsuarioNoExistePipe } from './pipe/usuario-no-existe.pipe';
import { UsersService } from './users.service';
import { ExisteAlMenosUnoUpdateUserPipe } from './pipe/existe-campo-update-user.pipe';
import { ExisteAlMenosUnoUpdateUserAdminPipe } from './pipe/existe-campo-update-user-admin.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @ApiOperation({ summary: 'Inicio de sesion.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que el usuario pudo logear correctamente.', type: GetLoginUserDto,
  })
  @ApiResponse({
    status: 401,
    description:
      'Este codigo se debe a que el correo electronico o la contraseña ingresada es incorrecta.',
  })
  @ApiTags('Users')
  @UsePipes(
    new ValidationPipe(),
    UsuarioNoExistePipe, 
    HashPipe)
  @ApiBody({ type: LoginUserDto })
  @Post("login")
  async login(@Body() loginUsuarioDto: LoginUserDto) : Promise<GetLoginUserDto> {
    return await this.usersService.login(loginUsuarioDto);
  }
   
  @ApiOperation({ summary: 'Registro de usuario.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo crear correctamente el usuario.',type: GetUserDto,
  })
  @ApiResponse({
    status: 400,
    description:
      'Este codigo se debe a que ya existe un usuario con el correo electronico ingresado.',
  })
  @ApiTags('Users')
  @Post('signUp')
  @UsePipes(
    new ValidationPipe(),
    UsuarioExistePipe, 
    HashPipe)
    @ApiBody({ type: CreateUserDto })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<GetUserDto> {
    return await this.usersService.createUser(createUserDto);
  }

  @ApiOperation({ summary: 'Obtener las direcciones de un usuario.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo encontrar correctamente las direcciones del usuario.',type: [GetAddressDto],
  })
  @ApiResponse({
    status: 400,
    description:
      'Este codigo se debe a que no existe un usuario con el id ingresado.',
  })
  @ApiTags('Users')
  @Get(':userId/addresses')
  @ApiBearerAuth()  
  @UseGuards(JwtGuard, ValidarRolGuard, ValidarUserParamIdGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  async findUserAddresses(
    @Param('userId', 
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
      UsuarioNoExistePipe)
      userId: number,
  ): Promise<GetAddressDto[]>{
    return await this.usersService.findUserAddresses(+userId);
  }

  @ApiOperation({ summary: 'Agregar direccion nueva a un usuario.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo crear correctamente la direccion de un usuario.',type: CreateAddressDto,
  })
  @ApiResponse({
    status: 400,
    description:
      'Este codigo se debe a que no existe usuario con el ID ingresado.',
  })
  @ApiTags('Users')
  @Post(':userId/address')
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard, ValidarUserParamIdGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  @UsePipes(
    new ValidationPipe())
  @ApiBody({ type: CreateAddressDto })
  async createAddress( 
    @Param('userId', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    UsuarioNoExistePipe) userId: number,
    @Body() createAddressDto: CreateAddressDto): Promise<CreateAddressDto> {
    return await this.usersService.createAddress(+userId,createAddressDto);
  }


  @ApiOperation({ summary: 'Modificar una direccion de un usuario.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo modificar correctamente la direccion de un usuario.',type: UpdateAddressDto,
  })
  @ApiResponse({
    status: 400,
    description:
      'Este codigo se debe a que no existe direccion con el ID ingresado.',
  })
  @ApiTags('Users')
  @Put('address/:addressId')
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard, ValidarUserIdFromAddressGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  @UsePipes(
    new ValidationPipe())
  @ApiBody({ type: UpdateAddressDto })
  async updateAddress( 
    @Param('addressId', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) addressId: number,
    @Body() updateAddressDto: UpdateAddressDto): Promise<UpdateAddressDto> {
    return await this.usersService.updateAddress(+addressId,updateAddressDto);
  }

  @ApiOperation({ summary: 'Obtener datos de un usuario.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo encontrar el usuario de manera exitosa.',
    type: GetUserDto
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que no existe un usuario con el id ingresado.',
  })
  @ApiTags('Users')
  @Get(':userId')
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard, ValidarUserParamIdGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  async findOneUser(
    @Param('userId', 
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
      UsuarioNoExistePipe)
      userId: number
  ): Promise<GetUserDto>{
    return await this.usersService.findOneUser(+userId);
  }

  @ApiOperation({ summary: 'Obtener todos los usuarios con paginado.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo encontrar los usuarios de manera exitosa.', type: GetAllUsersDto,
  })
  @ApiTags('Users')
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.ADMIN)
  @Get(":pagina/:cantidadPorPagina")
  async findAllUsuarios(
    @Param("pagina", new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) pagina: number,
    @Param("cantidadPorPagina", new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) cantidadPorPagina: number,
  ): Promise<GetAllUsersDto<GetUserDto>>{
    const resultado : GetAllUsersDto<GetUserDto> = await this.usersService.findAllUsuarios(+pagina, +cantidadPorPagina);
    return resultado;
  }


  @ApiOperation({ summary: 'Modificar informacion de un usuario con rol de USER.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo modificar correctamente el usuario.',type: GetUserDto,
  })
  @ApiResponse({
    status: 400,
    description:
      'Este codigo se debe a que no existe usuario con el id ingresado.',
  })
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER)
  @ApiTags('Users')
  @Put()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: UpdateUserDto })
  async updateUser(
    @Body(ExisteAlMenosUnoUpdateUserPipe, UsuarioExistePipe, HashPipe) updateUserDto: UpdateUserDto,
    @Req() request): Promise<GetUserDto> {
    const datosUsuario = request.datosUsuario;
    return await this.usersService.updateUser(+datosUsuario.idUsuario,updateUserDto);
  }

  
  @ApiOperation({ summary: 'Modificar informacion de un usuario con rol de ADMIN.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo modificar correctamente el usuario.',type: GetUserDto,
  })
  @ApiResponse({
    status: 400,
    description:
      'Este codigo se debe a que no existe usuario con el id ingresado.',
  })
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.ADMIN)
  @ApiTags('Users')
  @Put(':userId/admin')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: UpdateUserAdminDto })
  async updateUserAdmin(
    @Param('userId', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    UsuarioNoExistePipe)
    userId: number, @Body(ExisteAlMenosUnoUpdateUserAdminPipe, UsuarioExistePipe) updateUserAdminDto: UpdateUserAdminDto): Promise<GetUserDto> {
    return await this.usersService.updateUserAdmin(+userId,updateUserAdminDto);
  }

  @ApiOperation({ summary: 'Eliminar la direccion de un usuario.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo eliminar la direccion de manera exitosa.',
    type: GetAddressDto
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que no existe la direccion con el id ingresado.',
  })
  @ApiTags('Users')
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard,ValidarUserIdFromAddressGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  @Delete('address/:addressId')
  // async removeAddress(
  async removeAddress(
    @Param('addressId', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))
    addressId: number
  ): Promise<GetAddressDto> {
    const deleteDireccion : GetAddressDto = await this.usersService.removeAddress(+addressId);
    return deleteDireccion;
  }

  @ApiOperation({ summary: 'Eliminar un usuario.'})
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
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard, ValidarUserParamIdGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  @Delete(':userId')
  async removeUser(
    @Param('userId', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    UsuarioNoExistePipe)
    userId: number,
  ): Promise<GetUserDto> {
    const deleteUser : GetUserDto = await this.usersService.removeUser(+userId);
    return deleteUser;
  }

}
