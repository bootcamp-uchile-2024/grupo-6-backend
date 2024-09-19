import { ApiProperty } from '@nestjs/swagger';
import { TipoDireccion } from './tipoDireccion.entity';
import { IsEnum, IsString } from 'class-validator';

export class Address {
  public idDireccion: number;
  @ApiProperty({
    example: 'El condor',
    description:
      'Nombre de la calle. (debe contener un formato de string correcto).',
  })
  @IsString({ message: 'Introducir un formato de calle correcto.' })
  public calle: string;
  @ApiProperty({
    example: '125',
    description:
      'Numero de la calle (debe contener un formato de string correcto).',
  })
  @IsString({ message: 'Introducir un numero de calle correcto.' })
  public numeroCalle: string;
  @ApiProperty({
    example: 'N/A',
    description:
      'Numero del departamento (debe contener formato de string  correcto).',
    required: false,
  })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  public numeroDepartamento: string;
  @ApiProperty({
    example: 'Nunoa',
    description:
      'Comuna a la que vive el usuario (debe contener formato de string correcto).',
  })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  public comuna: string;
  @ApiProperty({
    example: 'Santiago',
    description:
      'Ciudad a la que vive el usuario (debe contener formato de string correcto).',
  })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  public ciudad: string;
  @ApiProperty({
    example: 'Metropolitana',
    description:
      'Region a la que vive el usuario (debe contener formato de string correcto).',
  })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  public region: string;
  @ApiProperty({
    example: [TipoDireccion.ENVIO, TipoDireccion.FACTURACION],
    description: "Tipo de direccion, puede ser 'Envio' o 'Facturacion'.",
    enum: TipoDireccion,
  })
  @IsEnum(TipoDireccion, {
    message:
      "El tipo de direccion tiene que ser el formato correcto. Ej: 'Envio' o 'Facturacion'.",
  })
  public tipoDireccion: TipoDireccion[];
  @ApiProperty({
    example: 'CASA',
    description:
      'Informacion adicional de la direccion del usuario, como por ejemplo referencias para llegar a la direccion.',
    required: false,
  })
  @IsString({ message: 'Introducir un formato de nombre correcto.' })
  public informacionAdicional: string;
  constructor(
    idDireccion: number,
    calle: string,
    numeroCalle: string,
    numeroDepartamento: string,
    comuna: string,
    ciudad: string,
    region: string,
    tipoDireccion: TipoDireccion[],
    informacionAdicional: string,
  ) {
    this.idDireccion = idDireccion;
    this.calle = calle;
    this.numeroCalle = numeroCalle;
    this.numeroDepartamento = numeroDepartamento;
    this.comuna = comuna;
    this.ciudad = ciudad;
    this.region = region;
    this.tipoDireccion = tipoDireccion;
    this.informacionAdicional = informacionAdicional;
  }
}
