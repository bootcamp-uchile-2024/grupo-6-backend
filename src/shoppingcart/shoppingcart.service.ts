import { Injectable } from '@nestjs/common';
import { Shoppingcart } from './entities/shoppingcart.entity';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

@Injectable()
export class ShoppingcartService {
  shoppingcart: Shoppingcart[] = [];

  create(createProductotDto: CreateProductDto) {
    const encontrado = this.shoppingcart.find(
      (element) => element.isbn == createProductotDto.isbn,
    );
    if (encontrado) {
      const cartCantidad = this.shoppingcart.find(
        (element) => element.isbn == encontrado.isbn,
      ); //Desarrollar lógica para sumatoria de la cantidad (pendiente)
      if (cartCantidad) {
        cartCantidad.cantidad = cartCantidad.cantidad + 1;
      }
    } else {
      const cart: Shoppingcart = new Shoppingcart();
      cart.isbn = createProductotDto.isbn;
      cart.item = this.shoppingcart.length + 1;
      cart.nombre = createProductotDto.nombre;
      cart.autor = createProductotDto.autor;
      cart.caratula = createProductotDto.caratula;
      cart.editorial = createProductotDto.editorial;
      cart.precio = createProductotDto.precio;
      cart.descuento = createProductotDto.descuento;
      cart.encuadernacion = createProductotDto.encuadernacion;
      cart.cantidad = 1;
      cart.stockLibro = createProductotDto.stockLibro;
      this.shoppingcart.push(cart);
      return this.shoppingcart;
    }
  }

  obtenerProductos() {
    return this.shoppingcart;
  }

  remove(item: number) {
    const encontrado = this.shoppingcart.find(
      (element) => element.item == item,
    );
    if (encontrado) {
      const index = this.shoppingcart.indexOf(encontrado);
      this.shoppingcart.splice(index, 1);
      return encontrado;
    } else {
      return null;
    }
  }
}
