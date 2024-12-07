import { ApiProperty } from '@nestjs/swagger';
import { TipoDireccionEnum } from '../enum/tipoDireccion.enum';
import { ArrayMaxSize, ArrayNotEmpty, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Estado } from '../enum/estado.enum';

export class CreateAddressDto {

  @IsNotEmpty({ message: 'Por favor introducir un calle.' })
  @IsString({ message: 'Introducir un formato de string correcto para la calle.' })
  @ApiProperty({
    example: 'Avenida Principal',
    description:
      'Nombre de la calle.',
  })
  public calle: string;

  @IsNotEmpty({ message: 'Por favor introducir un numero calle.' })
  @IsString({ message: 'Introducir un formato de string correcto para el numero calle.' })
  @ApiProperty({
    example: '456',
    description:
      'Numero de la calle..',
  })
  public numeroCalle: string;

  @IsNotEmpty({ message: 'Por favor introducir una comuna.' })
  @IsString({ message: 'Introducir un formato de string correcto para la comuna.' })
  @ApiProperty({
    example: 'Providencia',
    description:
      'Comuna de la direccion.',
  })
  public comuna: string;

  @IsNotEmpty({ message: 'Por favor introducir una ciudad.' })
  @IsString({ message: 'Introducir un formato de string correcto para la ciudad.' })
  @ApiProperty({
    example: 'Santiago',
    description:
      'Ciudad de la direccion.',
  })
  public ciudad: string;

  @IsNotEmpty({ message: 'Por favor introducir una region.' })
  @IsString({ message: 'Introducir un formato de string correcto para la region.' })
  @ApiProperty({ example: 'Metropolitana', description: 'Region de la direccion.' }) 
  public region: string;

  @ArrayNotEmpty()
  @ArrayMaxSize(2)
  @IsEnum(TipoDireccionEnum, {each: true})
  @ApiProperty({ 
    example: [TipoDireccionEnum.ENVIO,TipoDireccionEnum.FACTURACION], 
    description: 'Tipo de direccion del usuario, puede ser Facturacion y/o Envio.' ,
    isArray: true,
    enum: TipoDireccionEnum})
  public tipoDireccion: TipoDireccionEnum[];
  
  @IsOptional()
  @IsString({ message: 'Introducir un formato de string correcto para el numero de departamento.' })
  @ApiProperty({ example: '152', description: 'Numero del departamento, dato opcional.' })
  public numeroDepartamento: string;

  @IsOptional()
  @IsString({ message: 'Introducir un formato de string correcto para la informacion adicional.' })
  @ApiProperty({ example: 'Cerca del Jumbo.', description: 'Informacion adicional para poder encontrar la direccion, dato opcional.' })
  public informacionAdicional: string;

}
