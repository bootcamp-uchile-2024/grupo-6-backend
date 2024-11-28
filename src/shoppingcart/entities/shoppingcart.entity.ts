import { EncuadernacionEnum } from 'src/products/entities/encuadernacionEnum';
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
  public encuadernacion: EncuadernacionEnum;
  public descuento: number;
  public caratula: string;
  public cantidad: number;
}
