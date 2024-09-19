import { ApiProperty } from '@nestjs/swagger';
import { ClientType } from '../entities/clientType.entity';
import { ClientState } from '../entities/clientState.entity';
import { Address } from '../entities/address.entity';
import { IsArray, IsEmail, isEmail, IsEnum, IsString } from 'class-validator';
import { TipoDireccion } from '../entities/tipoDireccion.entity';

export class CreateUserDto {
  @ApiProperty({
    example: 'Roberto Andres',
    description:
      'Primer y segundo nombre del usuario (debe contener un formato de string correcto).',
  })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  public nombres: string;
  @ApiProperty({
    example: 'Gonzalez',
    description:
      'Apellido paterno del usuario (debe contener un formato de string correcto).',
  })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  public apellidoPaterno: string;
  @ApiProperty({
    example: 'Ramirez',
    description:
      'Apellido materno del usuario (debe contener un formato de string correcto).',
  })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  public apellidoMaterno: string;
  @ApiProperty({
    example: 'r.gonz.ram@gmail.com',
    description:
      'Correo electronico del usuario (debe ser un correo con formato válido).',
  })
  @IsEmail({}, { message: 'El email debe ser un correo electrónico válido' })
  public correoElectronico: string;
  @ApiProperty({ example: '12345', description: 'Contrasena del usuario.' })
  public contrasena: string;
  // @ApiProperty({example: [new Address(1,"El condor","125","N/A","Nunoa","Santiago","Region Metropolitana",[TipoDireccion.ENVIO,TipoDireccion.FACTURACION],"CASA")], description: 'Direccion del usuario, puede ser direccion de envio y/o facturacion.', type: Address})
  @ApiProperty({
    description:
      'Direccion del usuario, puede ser direccion de envio y/o facturacion.',
    default: [],
    type: Address,
  })
  public direccion: Address[];
  @ApiProperty({
    example: ClientType.ESTANDAR,
    description: 'Tipo de usuario, puede ser Premium o Estandar.',
    enum: ClientType,
  })
  @IsEnum(ClientType, {
    message:
      "El tipo del usuario tiene que ser el formato correcto. Ej: 'Premium' o 'Estandar'.",
  })
  public tipoCliente: ClientType;
  @ApiProperty({
    example: ClientState.ACTIVO,
    description: 'Estado del usuario, puede ser Activo o Baneado.',
    enum: ClientState,
  })
  @IsEnum(ClientState, {
    message:
      "El estado del usuario tiene que ser el formato correcto. Ej: 'Activo' o 'Baneado'.",
  })
  public estado: ClientState;
}
