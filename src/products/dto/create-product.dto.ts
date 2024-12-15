import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, Contains, IsBoolean, IsEnum, IsInt, IsNumber, IsString, Max, Min } from 'class-validator';
import { EncuadernacionEnum } from '../entities/encuadernacionEnum';
import { GeneroEnum } from '../entities/generoEnum';
import { Idioma } from '../entities/idioma';

export class CreateProductDto {
  @ApiProperty({ description: 'ISBN 13 del libro', type: String, example: '9788420412146', })
  @IsString()
  public isbn: string;

  @ApiProperty({ description: 'Nombre del libro', type: String, example: 'Don Quijote de la Mancha', })
  @IsString()
  public nombre: string;

  @ApiProperty({
    description: 'Nombre del autor del libro',
    type: String,
    example: 'Miguel de Cervantes',
  })
  public autor: string;

  @ApiProperty({ description: 'Número de libros en stock', minimum: 1, type: Number, example: 50,  })
  @Min(1)
  public stockLibro: number;

  @ApiProperty({ description: 'Precio del libro (sin descuento)', type: Number, minimum: 1, maximum: 10000000, example: 19000, })
  @IsInt()
  @Min(1)
  @Max(10000000)
  public precio: number;

  @ApiProperty({ description: 'Nombre de la editorial del libro', type: String, example: 'Lengua Viva', })
  @IsString()
  public editorial: string;

  @ApiProperty({
    description: 'Idioma del libro',
    enum: [
      'Español',
      'Inglés',
    ],
    example: Idioma.ESPANOL,
  })
  @IsEnum(Idioma)
  public idioma: Idioma;

  @ApiProperty({
    example: EncuadernacionEnum.TAPA_DURA,
    description: 'Tipo de encuadernación del libro',
    enum: [
      'Tapa Dura',
      'Tapa Blanda',
      'Edición de Bolsillo',
      'Edición de Lujo',
      'Digital',
      'Audiolibro',
      'Impresión Bajo Demanda',
      'Coleccionista',
      'Edición Limitada',
      'Rústica',
      'Libreta de Apuntes',
      'Manual',
      'Guía de Viaje',
      'Cómic',
      'Manga',
      'Folleto',
      'Calendario',
      'Póster',
      'Plegable',
      'Tarjeta',
    ],
  })
  public encuadernacion: EncuadernacionEnum;

  @ApiProperty({ description: 'Año de publicación del libro', type: 'number', example: 2001})
  @IsNumber()
  public agnoPublicacion: number;

  @ApiProperty({ description: 'Número de páginas del libro', type: Number, minimum: 1, maximum: 10000, example: 150, })
  @IsInt()
  @Min(1)
  @Max(10000)
  public numeroPaginas: number;

  @ApiProperty({ description: 'Descuento aplicado al producto de 0 a 100', type: Number, default: 0, minimum: 0, maximum: 100, example: 50 })
  @Min(0)
  @Max(100)
  public descuento: number;

  @ApiProperty({ description: 'Dimensiones del libro en formato "Ancho cm x Alto cm"', example: '15cm x 25cm', type: String, })
  @IsString()
  @Contains('x')
  public dimensiones: string;

  @ApiProperty({ description: 'Código de barra del libro en formato EAN-13', example: '9788420412146', type: String, })
  @IsString()
  public codigoBarra: string;

  @ApiProperty({
    description: 'Lista con el o los géneros del libro',
    enum: [
      'Ciencia Ficción',
      'Romance',
      'Fantasía',
      'Histórico',
      'Aventura',
      'Suspenso',
      'Terror',
      'Policiaco',
      'Drama',
      'Comedia',
      'Autoayuda',
      'Biografía',
      'Ensayo',
      'Educativo',
      'Infantil',
      'Juvenil',
      'Paranormal',
      'Religión y Mitología',
      'Política',
      'Filosofía',
      'Novelas',
      'Fotografía',
      'Cuentos',
      'Ilustración',
      'Diseño',
      'Biografías',
      'Deporte',
      'Motocicletas',
      'Arquitectura',
      'Literatura clásica',
    ],
    isArray: true,
    example: [GeneroEnum.ROMANCE, GeneroEnum.EDUCATIVO],
  })
  @ArrayNotEmpty()
  public genero: string[];

  @ApiProperty({ description: 'Resumen del libro', type: String, example: 'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano (...)', })
  @IsString()
  public resumen: string;

  @ApiProperty({ description: 'Indicador de si el producto es destacado o no', type: Boolean, example: true })
  @IsBoolean()
  public destacado: boolean;


}
