import { ApiProperty } from '@nestjs/swagger';

import { Encuadernacion } from './encuadernacion';
import { Genero } from './genero';
import { Idioma } from './idioma';
import { Review } from './review';
import { ArrayNotEmpty, Contains, IsArray, IsDate, IsEnum, IsIn, IsInt, IsString, Max, MaxDate, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class Product {

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
    example: [Genero.NOVELA, Genero.CLASICO],
  })
  @ArrayNotEmpty()
  public genero: Genero[];

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
  @IsEnum({entity: Idioma})
  public idioma: Idioma;

  @ApiProperty({
    description: 'Tipo de encuadernación del libro',
    enum: [
      'Tapa dura',
      'Tapa blanda',
      'Encuadernación en espiral',
    ],
    example: Encuadernacion.TAPA_DURA,
  })
  @IsEnum({entity: Encuadernacion})
  public encuadernacion: Encuadernacion;

  @ApiProperty({
    description: 'Año de publicación del libro',
    type: Date,
    example: new Date(2015, 0),
  })
  @IsDate()
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

  @ApiProperty({
    description: 'Lista con las reseñas realizadas por los usuarios',
    type: [Review],
    default: [],
    isArray: true,
  })
  @IsArray()
  @ValidateNested({each: true})
  @Type( () => Review)
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
  public ean: string; // Código de barra del producto
  
  @ApiProperty({
    description: 'Resumen del libro',
    type: String,
    example:
      'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano (...)',
  })
  @IsString()
  public resumen: string;

  constructor(
    isbn: string,
    nombre: string,
    autor: string[],
    stockLibro: number,
    precio: number,
    genero: Genero[],
    editorial: string,
    idioma: Idioma,
    encuadernacion: Encuadernacion,
    agnoPublicacion: Date,
    numeroPaginas: number,
    descuento: number,
    caratula: string,
    dimensiones: string,
    ean: string,
    resumen: string,
  ) {
    this.isbn = isbn;
    this.nombre = nombre;
    this.autor = autor;
    this.stockLibro = stockLibro;
    this.precio = precio;
    this.rating = 0;
    this.genero = genero;
    this.editorial = editorial;
    this.idioma = idioma;
    this.encuadernacion = encuadernacion;
    this.agnoPublicacion = agnoPublicacion;
    this.numeroPaginas = numeroPaginas;
    this.resenas = [];
    this.descuento = descuento;
    this.caratula = caratula;
    this.dimensiones = dimensiones;
    this.ean = ean;
    this.resumen = resumen;
  }
}
