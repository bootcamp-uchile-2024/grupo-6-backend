import { Encuadernacion } from 'src/products/entities/encuadernacion';
import { Genero } from 'src/products/entities/genero';

export class Shoppingcart {
  public isbn: string;
  public item: number;
  public nombre: string;
  public autor: string[];
  public stockLibro: number;
  public precio: number;
  public genero: Genero[];
  public editorial: string;
  public encuadernacion: Encuadernacion;
  public descuento: number;
  public caratula: string;
  public cantidad: number;
}
