import { ApiProperty } from '@nestjs/swagger';
import { Rol } from '../enum/rol.enum';

export class GetLoginUserDto {
  @ApiProperty({
    example: 17,
    description:
      'ID unico del usuario.',
  })
  public idUsuario: number;

  @ApiProperty({
    example: 'Roberto Andres',
    description:
      'Primer y segundo nombre del usuario.',
  })
  public nombres: string;

  @ApiProperty({
    example: 'Gonzalez',
    description:
      'Apellido paterno del usuario.',
  })
  public apellidoPaterno: string;

  @ApiProperty({
    example: 'Ramirez',
    description:
      'Apellido materno del usuario.',
  })
  public apellidoMaterno: string;

  @ApiProperty({
    example: 'r.gonz.ram@gmail.com',
    description:
      'Correo electronico del usuario.',
  })
  public correoElectronico: string;

  @ApiProperty({
    example: Rol.USER,
    description:
      'Rol del usuario, puede ser USER o ADMIN.',
  })
  public rol: Rol;

  @ApiProperty({ 
    description: 'Token JWT' 
  })
  public token: string;


}
