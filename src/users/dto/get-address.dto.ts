import { ApiProperty } from '@nestjs/swagger';
import { TipoDireccionEnum } from '../enum/tipoDireccion.enum';

export class GetAddressDto {
  @ApiProperty({
    example: 2,
    description:
      'Identificador unico de la direccion.',
  })
  public idDireccion: number;

  @ApiProperty({
    example: 'Avenida Principal',
    description:
      'Nombre de la calle.',
  })
  public calle: string;

  @ApiProperty({
    example: '456',
    description:
      'Numero de la calle..',
  })
  public numeroCalle: string;

  @ApiProperty({
    example: 'Providencia',
    description:
      'Comuna de la direccion..',
  })
  public comuna: string;

  @ApiProperty({
    example: 'Santiago',
    description:
      'Ciudad de la direccion.',
  })
  public ciudad: string;

  @ApiProperty({ example: 'Metropolitana', description: 'Region de la direccion.' }) 
  public region: string;

  @ApiProperty({ 
    example: [TipoDireccionEnum.ENVIO,TipoDireccionEnum.FACTURACION], 
    description: 'Tipo de direccion del usuario, puede ser Facturacion y/o Envio.' })
  public tipoDireccion: TipoDireccionEnum[];
  
  @ApiProperty({ example: '152', description: 'Numero del departamento, dato opcional.' })
  public numeroDepartamento: string;

  @ApiProperty({ example: 'Cerca del Jumbo.', description: 'Informacion adicional para poder encontrar la direccion, dato opcional.' })
  public informacionAdicional: string;
}
