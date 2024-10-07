import { ApiProperty } from '@nestjs/swagger';
import { Address } from '../entities/address.entity';
import { IsEmail, IsString } from 'class-validator';

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
}
