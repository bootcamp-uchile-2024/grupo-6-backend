import { ApiProperty } from '@nestjs/swagger';
import { Encuadernacion } from '../entities/encuadernacion';
import { GeneroEnum } from '../entities/generoEnum';
import { Idioma } from '../entities/idioma';
import { Review } from '../entities/review';
import { ArrayNotEmpty, Contains, IsArray, IsDate, IsEnum, IsInt, IsString, Max, MaxDate, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
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
    example: 'Miguel de Cervantes',
    isArray: true,
  })
  @IsArray()
  public autor: string[];

  @ApiProperty({ 
    description: 'Número de libros en stock',
    minimum: 1,
    type: Number,
    example: 50, 
  })
  @Min(1)
  public stockLibro: number;

  @ApiProperty({
    description: 'Precio del libro (sin descuento)',
    type: Number,
    minimum: 1,
    maximum: 10000000,
    example: 19000, 
  })
  @IsInt()
  @Min(1)
  @Max(10000000)
  public precio: number;

  public rating: number;

  @ApiProperty({
    description: 'Lista con el o los géneros del libro',
    enum: [
      'Thriller', 'Novela histórica', 'Romance', 'Ciencia ficción',
      'Distópia', 'Aventura', 'Fantasía', 'Contemporáneo', 'Terror',
      'Paranormal', 'Poesía', 'Juvenil', 'Infantil', 'Novela',
      'Clásico', 'Autoayuda', 'Salud y deporte',
      'Técnicos y especializados', 'Biografías y autobiografías',
      'Cocina', 'Viajes', 'Arte', 'Ciencia y matemáticas',
      'Computación', 'Derecho y política', 'Economía y finanzas',
      'Historia', 'Filosofía y religión', 'Educación',
    ],
    isArray: true,
    example: [GeneroEnum.NOVELA, GeneroEnum.CLASICO],
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
    ],
    example: Idioma.ESPANOL,
  })
  @IsEnum(Idioma)
  public idioma: Idioma;

  @ApiProperty({
    example: Encuadernacion.TAPA_DURA,
    description: 'Tipo de encuadernación del libro',
    enum: [
      'Tapa dura',
      'Tapa blanda',
      'Encuadernación en espiral',
    ]
  })
  public encuadernacion: Encuadernacion;

  @ApiProperty({
    description: 'Año de publicación del libro',
    type: Date,
    example: new Date(2015, 0),
  })
  @IsDate()
  @Type(() => Date)
  @MaxDate( () => new Date(), {
    message: () =>
      `No se puede ingresar una fecha mayor al día de hoy: ${new Date().toDateString()})`
  })
  public agnoPublicacion: Date;

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

  public resenas: Review[];

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
    example: './images/portada.png'
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
