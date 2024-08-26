import { Injectable } from '@nestjs/common';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { UpdateShoppingcartDto } from './dto/update-shoppingcart.dto';
import { Shoppingcart } from './entities/shoppingcart.entity';

@Injectable()
export class ShoppingcartService {

  shoppingcart: Shoppingcart [] = [];

  create(createShoppingcartDto: CreateShoppingcartDto) {
    const encontrado = this.shoppingcart.find((element) => element.nombre == createShoppingcartDto.nombre)
      if(encontrado){
        //Desarrollar lógica para sumatoria de la cantidad (pendiente)
      }else{
      const cart: Shoppingcart = new Shoppingcart();
      cart.item = this.shoppingcart.length + 1;
      cart.nombre = createShoppingcartDto.nombre;
      cart.autor = createShoppingcartDto.autor;
      cart.caratula = createShoppingcartDto.caratula;
      cart.editorial = createShoppingcartDto.editorial;
      cart.genero = createShoppingcartDto.genero;
      cart.precio = createShoppingcartDto.precio;
      cart.descuento = createShoppingcartDto.descuento;
      cart.encuadernacion = createShoppingcartDto.encuadernacion;
      cart.cantidad = 1;
      cart.stockLibro = createShoppingcartDto.stockLibro;
    
      this.shoppingcart.push(cart);
      return this.shoppingcart;
      }
    
  }

  /*obtenerNombreEpica() {
    return "Este modulo corresponde a la Épica Generación de compra";
  }*/

  obtenerProductos() {
    return this.shoppingcart;
  }

  /*findOne(id: number) {
    return `This action returns a #${id} shoppingcart`;
  }

  update(id: number, updateShoppingcartDto: UpdateShoppingcartDto) {
    return `This action updates a #${id} shoppingcart`;
  }*/

    remove(item: number) {
      const encontrado = this.shoppingcart.find( (element) => element.item == item);
      if(encontrado){
        const index = this.shoppingcart.indexOf(encontrado);
        this.shoppingcart.splice(index, 1);
        return encontrado;
      }else{
        return null;
      }
    }
}
