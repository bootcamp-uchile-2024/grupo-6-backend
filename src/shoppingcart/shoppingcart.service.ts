import { Injectable } from '@nestjs/common';
import { Shoppingcart } from './entities/shoppingcart.entity';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { ShoppingcartSalidaDto } from './dto/create-shoppingcart.salida.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrito } from 'src/orm/entity/carrito';
import { Repository } from 'typeorm';
import { CarritoMapper } from './mapper/shoppingCart.mapper';
import { Libro } from 'src/orm/entity/libro';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { ShoppingcartUpdateDto } from './dto/shoppingcart.update.dto';

@Injectable()
export class ShoppingcartService {

  constructor (
    @InjectRepository(Carrito) private readonly carritoRepository: Repository<Carrito>,
    @InjectRepository(Libro) private readonly libroRepository: Repository<Libro>
  ){}
  //shoppingcart: Shoppingcart[] = [];

  async create(createShoppingcartDto: CreateShoppingcartDto): Promise <ShoppingcartSalidaDto> {
    const libroEncontrado = await this.libroRepository.findOne({
      where:{
        id: createShoppingcartDto.libro_id
      }
    }) 
    const carrito = this.carritoRepository.create(createShoppingcartDto);
    await this.carritoRepository.save(carrito);
    return CarritoMapper.entityToDto(carrito, libroEncontrado);
  }


  async obtenerCarrito(): Promise <ShoppingcartSalidaDto[]> {
    const carritos = await this.carritoRepository.find();
    const items: ShoppingcartSalidaDto[] = [];
    for (const carrito of carritos){
      const libroEncontrado = await this.libroRepository.findOne({
        where:{
          id: carrito.libro_id
        }
      })
      const item = CarritoMapper.entityToDto(carrito, libroEncontrado);
      items.push(item);
    }
    return items;
  }


  async cantidadMasMenos(updateDto: ShoppingcartUpdateDto): Promise<void> {
    
    if ( updateDto.cantidad > 0){
      const productoEncontrado = await this.carritoRepository.findOne({
        where:{
          usuario_id: updateDto.usuario_id,
          libro_id: updateDto.libro_id
        }   
      })
      productoEncontrado.cantidad = updateDto.cantidad;
      await this.carritoRepository.save(productoEncontrado);
    }
    if (updateDto.cantidad === 0){
      const productoEncontrado = await this.carritoRepository.findOne({
        where:{
          usuario_id: updateDto.usuario_id,
          libro_id: updateDto.libro_id
        }   
      })
      await this.carritoRepository.remove(productoEncontrado);
    }
  }


  async remove(id: number): Promise <ShoppingcartSalidaDto[]> {
    const carritos = await this.carritoRepository.find({
      where:{
        usuario_id: id
      }
    });
    const items: ShoppingcartSalidaDto[] = [];
    for (const carrito of carritos){
      const libroEncontrado = await this.libroRepository.findOne({
        where:{
          id: carrito.libro_id
        }
      })
      const item = CarritoMapper.entityToDto(carrito, libroEncontrado);
      items.push(item);
      await this.carritoRepository.remove(carrito);
    }
    return items;
  }
}
