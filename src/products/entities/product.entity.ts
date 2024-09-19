import { ApiProperty } from '@nestjs/swagger';

import { Encuadernacion } from './encuadernacion';
import { Genero } from './genero';
import { Idioma } from './idioma';
import { Review } from './review';

export class Product {
  @ApiProperty()
  public isbn: string;
  @ApiProperty()
  public nombre: string;
  @ApiProperty()
  public autor: string[];
  @ApiProperty()
  public stockLibro: number;
  @ApiProperty()
  public precio: number;
  @ApiProperty()
  public rating: number;
  @ApiProperty()
  public genero: Genero[];
  @ApiProperty()
  public editorial: string;
  @ApiProperty()
  public idioma: Idioma;
  @ApiProperty()
  public encuadernacion: Encuadernacion;
  @ApiProperty()
  public agnoPublicacion: Date;
  @ApiProperty()
  public numeroPaginas: number;
  @ApiProperty()
  public resenas: Review[];
  @ApiProperty()
  public descuento: number;
  @ApiProperty()
  public caratula: string;
  @ApiProperty()
  public dimensiones: string;
  @ApiProperty()
  public ean: string; // Código de barra del producto
  @ApiProperty()
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
