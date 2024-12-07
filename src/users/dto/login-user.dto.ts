import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {

  @IsNotEmpty({ message: 'Por favor introducir un correo electronico.' })
  @IsEmail({}, { message: 'El email debe ser un correo electrónico válido' })
  @ApiProperty({
    example: 'r.gonz.ram@gmail.com',
    description:
      'Correo electronico del usuario (debe ser un correo con formato válido).',
  })
  public correoElectronico: string;
  
  @IsNotEmpty({ message: 'Por favor introducir una contraseña.' })
  @IsString({ message: 'Introducir un formato de string correcto.' })
  @ApiProperty({ example: '12345', description: 'Contrasena del usuario.' })
  public contrasena: string;
}