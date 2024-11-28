import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty, Contains, IsArray,
  IsEnum, IsInt, IsNumber, IsString, Max,
  Min, ValidateNested
} from 'class-validator';
import { EncuadernacionEnum } from '../entities/encuadernacionEnum';
import { GeneroEnum } from '../entities/generoEnum';
import { Idioma } from '../entities/idioma';
import { Review } from '../entities/review';
import { CreateProductDto } from './create-product.dto';
import { Resena } from 'src/orm/entity/resena';

export class GetProductDto extends PartialType(CreateProductDto){

  @ApiProperty({
    description: 'ID del libro',
    type: Number,
    example: 1,
  })
  @IsNumber()
  public id: number;

  @ApiProperty({
    description: 'ISBN 13 del libro',
    type: String,
    example: '9788420412146',
  })
  @IsString()
  public isbn: string;

  @ApiProperty({
    description: 'Nombre del libro',
    type: String,
    example: 'Don Quijote de la Mancha',
  })
  @IsString()
  public nombre: string;

  @ApiProperty({
    description: 'Array con los nombres de los autores del libro',
    type: [String],
  })
  @IsArray()
  public autor: string[];

  @ApiProperty({
    description: 'Número de libros en stock',
    minimum: 1,
    type: Number,
  })
  @Min(1)
  public stockLibro: number;

  @ApiProperty({
    description: 'Precio del libro (sin descuento)',
    type: Number,
    minimum: 1,
    maximum: 10000000,
  })
  @IsInt()
  @Min(1)
  @Max(10000000)
  public precio: number;

  @ApiProperty({
    description: 'Calificación del libro de 0 a 5. Valor autocalculado con las reseñas.',
    minimum: 0,
    maximum: 5,
    default: 0,
    type: Number
  })
  @Min(0)
  @Max(5)
  public rating: number;

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
      'Religión',
      'Política',
      'Filosofía',
    ],
    isArray: true,
    example: [GeneroEnum.ROMANCE, GeneroEnum.EDUCATIVO],
  })
  @ArrayNotEmpty()
  public genero: GeneroEnum[];

  @ApiProperty({
    description: 'Nombre de la editorial del libro',
    type: String,
    example: 'Lengua Viva',
  })
  @IsString()
  public editorial: string;

  @ApiProperty({
    description: 'Idioma del libro',
    enum: [
      'Español',
      'Inglés',
      'Francés',
      'Alemán',
      'Portugués',
      'Italiano',
      'Japonés',
      'Chino',
      'Ruso',
      'Coreano',
      'Árabe',
      'Hebreo',
      'Griego',
      'Latín',
      'Hindi',
      'Bengalí',
      'Vietnamita',
      'Polaco',
      'Turco',
      'Sueco',
    ],
    example: Idioma.ESPANOL,
  })
  @IsEnum({entity: Idioma})
  public idioma: Idioma;

  @ApiProperty({
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
    example: EncuadernacionEnum.TAPA_DURA,
  })
  @IsEnum({entity: EncuadernacionEnum})
  public encuadernacion: EncuadernacionEnum;

  @ApiProperty({
    description: 'Año de publicación del libro',
    type: 'number',
    example: 2015,
  })
  @IsNumber()
  public agnoPublicacion: number;

  @ApiProperty({
    description: 'Número de páginas del libro',
    type: Number,
    minimum: 1,
    maximum: 10000,
    example: 150, 
  })
  @IsInt()
  @Min(1)
  @Max(10000)
  public numeroPaginas: number;

  @ApiProperty({
    description: 'Lista con las reseñas realizadas por los usuarios',
    type: [Resena],
    default: [],
    isArray: true,
  })
  @IsArray()
  @ValidateNested({each: true})
  @Type( () => Resena)
  public resenas: Resena[];

  @ApiProperty({
    description: 'Descuento aplicado al producto de 0 a 100',
    type: Number,
    default: 0,
    minimum: 0,
    maximum: 100,
    example: 50
  })
  @Min(0)
  @Max(100)
  public descuento: number;

  @ApiProperty({
    description: 'Ruta de la carátula del libro',
    type: String,
    example: '/cover/portada.png'
  })
  @IsString()
  public caratula: string;

  @ApiProperty({
    description: 'Dimensiones del libro en formato "Ancho cm x Alto cm"',
    example: '15cm x 25cm',
    type: String,
  })
  @IsString()
  @Contains('x')
  public dimensiones: string;

  @ApiProperty({
    description: 'Código de barra del libro en formato EAN-13',
    example: '978-8-42-041214-6',
    type: String,
  })
  @IsString()
  public ean: string;
  
  @ApiProperty({
    description: 'Resumen del libro',
    type: String,
    example:
      'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano (...)',
  })
  @IsString()
  public resumen: string;

  
}
