
import { Encuadernacion } from './encuadernacion';
import { GeneroEnum } from './generoEnum';
import { Idioma } from './idioma';
import { Review } from './review';

export class Product {

  public isbn: string;
  public nombre: string;
  public autor: string[];
  public stockLibro: number;
  public precio: number;
  public rating: number;
  public genero: GeneroEnum[];
  public editorial: string;
  public idioma: Idioma;
  public encuadernacion: Encuadernacion;
  public agnoPublicacion: Date;
  public numeroPaginas: number;
  public resenas: Review[];
  public descuento: number;
  public caratula: string;
  public dimensiones: string;
  public ean: string; // Código de barra del producto
  public resumen: string;

  constructor(
    isbn: string,
    nombre: string,
    autor: string[],
    stockLibro: number,
    precio: number,
    genero: GeneroEnum[],
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
