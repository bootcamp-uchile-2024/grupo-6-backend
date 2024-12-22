import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Direccion } from 'src/orm/entity/direccion';
import { DireccionTipoDireccion } from 'src/orm/entity/direccion_tipoDireccion';
import { TipoDireccion } from 'src/orm/entity/tipoDireccion';
import { Usuario } from 'src/orm/entity/usuario';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { GetAddressDto } from './dto/get-address.dto';
import { GetAllUsersDto } from './dto/get-all-users.dto';
import { GetLoginUserDto } from './dto/get-login-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Estado } from './enum/estado.enum';
import { AddressMapper } from './mapper/address.mapper';
import { UserMapper } from './mapper/user.mapper';
import { UpdateUserAdminDto } from './dto/update-user-admin.dto copy';
import { Rol } from './enum/rol.enum';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuario) 
    private readonly userRepository: Repository<Usuario>,

    @InjectRepository(Direccion) 
    private readonly direccionRepository: Repository<Direccion>,

    @InjectRepository(TipoDireccion) 
    private readonly tipoDireccionRepository: Repository<TipoDireccion>,
    
    @InjectRepository(DireccionTipoDireccion) 
    private readonly direccionTipoDireccionRepository: Repository<DireccionTipoDireccion>,

    private readonly jwtService: JwtService
    ) {}

  async validarDireccionYUsuario(addressId: number): Promise<Direccion>{
    const direccion: Direccion = await this.direccionRepository.findOne({
      where: {
        id: +addressId
      },
      relations: {
        tipodirecciones: true
      }
    });
    if (!direccion || direccion.estado === Estado.INACTIVO) {
      throw new NotFoundException("Direccion no existe.");
    }
    return direccion;
  }

  async login(loginUserDto: LoginUserDto): Promise<GetLoginUserDto>{
    const usuario = await this.userRepository.findOne({
      where: {
        correo_electronico: loginUserDto.correoElectronico
      }
    });
    if (loginUserDto.contrasena !== usuario.contrasena) {
      throw new UnauthorizedException("Correo electronico o contraseña incorrecta.");
    }
    const contenido = {
      idUsuario: usuario.id,
      rol: usuario.rol,
    }

    const getLoginUserDto = UserMapper.entityTogetLoginUserDto(usuario);
    getLoginUserDto.token = await this.jwtService.signAsync(contenido);
    return getLoginUserDto;
  }

  async createUser(createUserDto: CreateUserDto): Promise<GetUserDto> {
    const usuario = UserMapper.createUserDtoToEntity(createUserDto);
    const guardado = await this.userRepository.save(usuario)
    const getUserDto = UserMapper.entityToGetUserDto(guardado);
    return getUserDto;
  }

  async findOneUser(userId: number): Promise<GetUserDto> {
    const usuario: Usuario = await this.userRepository.findOneBy({id: +userId});
    const getUserDto = UserMapper.entityToGetUserDto(usuario);
    return getUserDto;
  }


  async findAllUsuarios(nroPagina: number, cantidadPorPagina: number): Promise<GetAllUsersDto<GetUserDto>> {
    const nroPaginaValido = nroPagina - 1;
    const offset = cantidadPorPagina * nroPaginaValido;

    const usuarios: [ Usuario[], number ] = await this.userRepository.findAndCount({
      where: {
        estado: Estado.ACTIVO,
        rol: Rol.USER
      },
      order: {
        id: "ASC"
      },
      take: cantidadPorPagina,
      skip: offset
    });


    const paginaGetAllUsersDto = new GetAllUsersDto<GetUserDto>();
    paginaGetAllUsersDto.totalUsuarios = usuarios[1];
    paginaGetAllUsersDto.totalPaginas = Math.ceil(usuarios[1] / cantidadPorPagina);
    paginaGetAllUsersDto.nroPagina = nroPagina;
    paginaGetAllUsersDto.cantidadPorPagina = cantidadPorPagina;
    paginaGetAllUsersDto.usuarios = UserMapper.entityListToGetUserDtoList(usuarios[0]);
    return paginaGetAllUsersDto;
  }

  
  async findUserAddresses(userId: number): Promise<GetAddressDto[]> {
    const direccion = await this.direccionRepository.find({
      where: {
        id_usuario: +userId,
        estado: 'ACTIVO'
      },
      relations: {
        tipodirecciones: true
      }
    });

    if (direccion.length === 0) {
      throw new NotFoundException("Este usuario no tiene ninguna direccion asociada.");
    }

    const getAddressesDto: GetAddressDto[] = AddressMapper.entityListToGetAddressDtoList(direccion);
    return getAddressesDto;
  }
  

  async updateUser( 
    userId: number,
    updateUserDto: UpdateUserDto
  ): Promise<GetUserDto> {
    const usuario: Usuario = await this.userRepository.findOneBy({id: +userId});
    if(!usuario){
      throw new NotFoundException("Usuario no existe.")
    }
    UserMapper.updateUserDtoToEntity(updateUserDto,usuario);
    await this.userRepository.save(usuario);

    const usuarioActualizado: Usuario = await this.userRepository.findOneBy({id: +userId});
    const getUserDto = UserMapper.entityToGetUserDto(usuarioActualizado);
    return getUserDto;
  }

  async updateUserAdmin(
    userId: number,
    updateUserAdminDto: UpdateUserAdminDto
  ): Promise<GetUserDto> {
    const usuario: Usuario = await this.userRepository.findOneBy({id: +userId});
    UserMapper.updateUserAdminDtoToEntity(updateUserAdminDto,usuario)
    await this.userRepository.save(usuario);

    const usuarioActualizado: Usuario = await this.userRepository.findOneBy({id: +userId});
    const getUserDto = UserMapper.entityToGetUserDto(usuarioActualizado);
    return getUserDto;
  }

  async createAddress(
    userId: number,
    createAddressDto: CreateAddressDto
  ): Promise<CreateAddressDto> {
    const nuevaDireccion: Direccion = AddressMapper.createAddressDtoToEntity(createAddressDto, +userId);
    const maxIdDireccion: number = await this.direccionRepository.maximum("id")
    await this.direccionRepository.save(nuevaDireccion);

    for(let tipo of createAddressDto.tipoDireccion){
      let nuevaDireccionTipoDireccion: DireccionTipoDireccion = new DireccionTipoDireccion();
      let tipoDireccion: Promise<TipoDireccion> = this.tipoDireccionRepository.findOneBy({descripcion: tipo})
      nuevaDireccionTipoDireccion.id_direccion = maxIdDireccion + 1
      nuevaDireccionTipoDireccion.id_tipoDireccion = (await tipoDireccion).id
      await this.direccionTipoDireccionRepository.save(nuevaDireccionTipoDireccion)
    }
    return createAddressDto;
  }

  async updateAddress(
    addressId: number,
    updateAddressDto: UpdateAddressDto
  ): Promise<UpdateAddressDto> {
    const direccion: Direccion = await this.validarDireccionYUsuario(+addressId);
    const nuevaDireccion: Direccion = AddressMapper.updateAddressDtoToEntity(updateAddressDto, direccion);
    await this.direccionRepository.save(nuevaDireccion);
    
    if(updateAddressDto.tipoDireccion){
      await this.direccionTipoDireccionRepository.delete({id_direccion: addressId});
      for(let tipo of updateAddressDto.tipoDireccion){
        let nuevaDireccionTipoDireccion: DireccionTipoDireccion = new DireccionTipoDireccion();
        let tipoDireccion: Promise<TipoDireccion> = this.tipoDireccionRepository.findOneBy({descripcion: tipo})
        nuevaDireccionTipoDireccion.id_direccion = addressId
        nuevaDireccionTipoDireccion.id_tipoDireccion = (await tipoDireccion).id
        await this.direccionTipoDireccionRepository.save(nuevaDireccionTipoDireccion)
      }
    }
    return updateAddressDto;
  }

  async removeUser(userId: number): Promise<GetUserDto> {
    const usuario: Usuario = await this.userRepository.findOneBy({id: +userId});
    usuario.estado = Estado.INACTIVO
    const borrarUsuario = await this.userRepository.save(usuario);
    const getUserDto = UserMapper.entityToGetUserDto(borrarUsuario);
    return getUserDto;
  }

  async removeAddress(addressId: number): Promise<GetAddressDto> {
    const direccion: Direccion = await this.validarDireccionYUsuario(+addressId);
    direccion.estado = Estado.INACTIVO;
    await this.direccionRepository.save(direccion);
    const getAddressDto = AddressMapper.entityToGetAddressDto(direccion);
    return getAddressDto
  }
} 
