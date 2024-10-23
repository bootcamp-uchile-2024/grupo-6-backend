import { Encuadernacion } from 'src/products/entities/encuadernacion';
import { GeneroEnum } from 'src/products/entities/generoEnum';

export class Shoppingcart {
  public isbn: string;
  public item: number;
  public nombre: string;
  public autor: string[];
  public stockLibro: number;
  public precio: number;
  public genero: GeneroEnum[];
  public editorial: string;
  public encuadernacion: Encuadernacion;
  public descuento: number;
  public caratula: string;
  public cantidad: number;
}
