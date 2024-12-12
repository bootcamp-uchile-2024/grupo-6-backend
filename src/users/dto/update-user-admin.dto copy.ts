import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserAdminDto {
  @IsOptional()
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  @ApiProperty({
    example: 'Roberto Andres',
    description:
      'Primer y segundo nombre del usuario.',
  })
  public nombres: string;

  @IsOptional()
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  @ApiProperty({
    example: 'Gonzalez',
    description:
      'Apellido paterno del usuario.',
  })
  public apellidoPaterno: string;

  @IsOptional()
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  @ApiProperty({
    example: 'Ramirez',
    description:
      'Apellido materno del usuario.',
  })
  public apellidoMaterno: string;

  @IsOptional()
  @IsEmail({}, { message: 'El email debe ser un correo electrónico válido' })
  @ApiProperty({
    example: 'r.gonz.ram@gmail.com',
    description:
      'Correo electronico del usuario.',
  })
  public correoElectronico: string;
}
