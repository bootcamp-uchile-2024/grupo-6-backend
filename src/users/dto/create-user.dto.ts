import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Por favor introducir un nombre.' })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  @ApiProperty({
    example: 'Roberto Andres',
    description:
      'Primer y segundo nombre del usuario.',
  })
  public nombres: string;

  @IsNotEmpty({ message: 'Por favor introducir un apellido paterno.' })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  @ApiProperty({
    example: 'Gonzalez',
    description:
      'Apellido paterno del usuario.',
  })
  public apellidoPaterno: string;

  @IsNotEmpty({ message: 'Por favor introducir un apellido materno.' })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  @ApiProperty({
    example: 'Ramirez',
    description:
      'Apellido materno del usuario.',
  })
  public apellidoMaterno: string;

  @IsNotEmpty({ message: 'Por favor introducir un correo electronico.' })
  @IsEmail({}, { message: 'El email debe ser un correo electrónico válido' })
  @ApiProperty({
    example: 'r.gonz.ram@gmail.com',
    description:
      'Correo electronico del usuario.',
  })
  public correoElectronico: string;

  @IsNotEmpty({ message: 'Por favor introducir una contrasena.' })
  @ApiProperty({ example: '12345', description: 'Contrasena del usuario.' })
  public contrasena: string;
}
