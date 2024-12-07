import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
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

  
  constructor(idUsuario: number, 
    nombres: string, 
    apellidoPaterno: string,
    apellidoMaterno: string,
    correoElectronico: string){
    this.idUsuario = idUsuario;
    this.nombres = nombres;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.correoElectronico = correoElectronico;
}
}
