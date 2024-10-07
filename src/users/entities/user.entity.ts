import { ApiProperty } from '@nestjs/swagger';
import { Address } from './address.entity';

export class User {
  @ApiProperty()
  public idUsuario: number;
  @ApiProperty()
  public nombres: string;
  @ApiProperty()
  public apellidoPaterno: string;
  @ApiProperty()
  public apellidoMaterno: string;
  @ApiProperty()
  public correoElectronico: string;
  @ApiProperty()
  public contrasena: string;
  @ApiProperty()
  public direccion: Address[];
  constructor(
    idUsuario: number,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    correoElectronico: string,
    contrasena: string,
    direccion: Address[],
  ) {
    this.idUsuario = idUsuario;
    this.nombres = nombres;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
    this.direccion = direccion;
  }
}
