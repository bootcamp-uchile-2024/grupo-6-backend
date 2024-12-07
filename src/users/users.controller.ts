import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
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
import { UpdateUserDto } from './dto/update-user.dto';
import { Rol } from './enum/rol.enum';
import { HashPipe } from './pipe/hash.pipe';
import { UsuarioExistePipe } from './pipe/usuario-existe.pipe';
import { UsuarioNoExistePipe } from './pipe/usuario-no-existe.pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}



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
  @Post('signIn')
  @UsePipes(
    new ValidationPipe(),
    UsuarioExistePipe, 
    HashPipe)
    @ApiBody({ type: CreateUserDto })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<GetUserDto> {
    return await this.usersService.createUser(createUserDto);
  }

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
  @Get(':id/addresses')
  @ApiBearerAuth()  
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  async findUserAddresses(
    @Param('id', 
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))
    id: number,
  ): Promise<GetAddressDto[]>{
    return await this.usersService.findUserAddresses(+id);
  }

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
  @Post(':id/address')
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  @UsePipes(
    new ValidationPipe())
  @ApiBody({ type: CreateAddressDto })
  async createAddress( 
    @Param('id') idUsuario: number,
    @Body() createAddressDto: CreateAddressDto): Promise<CreateAddressDto> {
    return await this.usersService.createAddress(+idUsuario,createAddressDto);
  }


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
  @Put('address/:id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  @UsePipes(
    new ValidationPipe())
  @ApiBody({ type: UpdateAddressDto })
  async updateAddress( 
    @Param('id') idDireccion: number,
    @Body() updateAddressDto: UpdateAddressDto): Promise<UpdateAddressDto> {
    return await this.usersService.updateAddress(+idDireccion,updateAddressDto);
  }


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
  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  async findOneUser(
    @Param('id', 
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))
    id: number
  ): Promise<GetUserDto>{
    return await this.usersService.findOneUser(id);
  }


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
    @Param("pagina") pagina: number,
    @Param("cantidadPorPagina") cantidadPorPagina: number,
  ): Promise<GetAllUsersDto<GetUserDto>>{
    const resultado : GetAllUsersDto<GetUserDto> = await this.usersService.findAllUsuarios(+pagina, +cantidadPorPagina);
    return resultado;
  }



  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo modificar correctamente el usuario.',type: UpdateUserDto,
  })
  @ApiResponse({
    status: 400,
    description:
      'Este codigo se debe a que no existe usuario con el id ingresado.',
  })
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  @ApiTags('Users')
  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: UpdateUserDto })
  async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    return await this.usersService.updateUser(+id,updateUserDto);
  }


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
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  @Delete('address/:id')
  async removeAddress(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))
    id: number,
  ): Promise<GetAddressDto> {
    const deleteDireccion : GetAddressDto = await this.usersService.removeAddress(+id);
    return deleteDireccion;
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
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER,Rol.ADMIN)
  @Delete(':id')
  async removeUser(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))
    id: number,
  ): Promise<GetUserDto> {
    const deleteUser : GetUserDto = await this.usersService.removeUser(id);
    return deleteUser;
  }

}
