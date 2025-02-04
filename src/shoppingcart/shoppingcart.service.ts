import { Injectable, NotFoundException } from '@nestjs/common';
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
import { CarritoInformacion } from 'src/orm/entity/carrito_informacion';
import { estadoEnum } from './enum/estado.enum';
import { SalidaShoppingcartDto } from './dto/salida-shoppingcart.dto';

@Injectable()
export class ShoppingcartService {

  constructor (
    @InjectRepository(Carrito) private readonly carritoRepository: Repository<Carrito>,
    @InjectRepository(CarritoInformacion) private readonly carritoInformacionRepository: Repository<CarritoInformacion>
  ){}

  async create(datosUsuario, createShoppingcartDto: CreateShoppingcartDto): Promise <SalidaShoppingcartDto> {

    const exist = await this.carritoInformacionRepository.findOne({
      where:{
        usuario_id: datosUsuario.idUsuario,
        estado: estadoEnum.activo
      }
    });

    if(!exist){
      const infoCarrito = new CarritoInformacion();

      infoCarrito.usuario_id = datosUsuario.idUsuario;
      infoCarrito.fecha_actualizacion = createShoppingcartDto.fechaCompra;
      infoCarrito.precio_total = createShoppingcartDto.precioTotal;

      await this.carritoInformacionRepository.save(infoCarrito);

      const carritoID = infoCarrito.id_carrito;

      const carritos: Carrito[] = [];
      for(const carritoEntity of createShoppingcartDto.shoppingCart){
        const carrito = new Carrito();
        carrito.carrito_id = carritoID;
        carrito.isbn_libro = carritoEntity.isbn;
        carrito.cantidad = carritoEntity.cantidad;
        carrito.precio = carritoEntity.precio;
        carrito.descuento = carritoEntity.descuento;
        carritos.push(carrito);
      }

      await this.carritoRepository.save(carritos);
    
      return CarritoMapper.entityToDto(carritos, infoCarrito);
    };

    if(exist){

      exist.fecha_actualizacion = createShoppingcartDto.fechaCompra;
      exist.precio_total = createShoppingcartDto.precioTotal;

      await this.carritoInformacionRepository.save(exist)

      const productos = await this.carritoRepository.find({
        where:{
          carrito_id: exist.id_carrito
        }
      });

      for (const producto of productos){
        await this.carritoRepository.remove(producto);
      };
  
      const carritoID = exist.id_carrito;

      const carritos: Carrito[] = [];
      for(const carritoEntity of createShoppingcartDto.shoppingCart){
        const carrito = new Carrito();
        carrito.carrito_id = carritoID;
        carrito.isbn_libro = carritoEntity.isbn;
        carrito.cantidad = carritoEntity.cantidad;
        carrito.precio = carritoEntity.precio;
        carrito.descuento = carritoEntity.descuento;
        carritos.push(carrito);
      }

      await this.carritoRepository.save(carritos);

      return CarritoMapper.entityToDto(carritos, exist);
    }

  }


  async obtenerCarrito(datosUsuario): Promise <SalidaShoppingcartDto> {

    const carritofind = await this.carritoInformacionRepository.findOne({
      where:{
        usuario_id: datosUsuario.idUsuario,
        estado: estadoEnum.activo
      }
    });    
    
    if(carritofind){
  
      const productos = await this.carritoRepository.find({
        where:{
          carrito_id: carritofind.id_carrito
        }

      });
  
      return CarritoMapper.entityToDto(productos, carritofind);

    }
  
    if(!carritofind){
      throw new NotFoundException();
    }
  }

  async cancelarCarrito(datosUsuario): Promise <string> {

    const carritofind = await this.carritoInformacionRepository.findOne({
      where:{
        usuario_id: datosUsuario.idUsuario,
        estado: estadoEnum.activo
      }
    });

    if(carritofind){

      carritofind.estado = estadoEnum.cancelado;

      await this.carritoInformacionRepository.save(carritofind);
    
      return "Carrito eliminado con exito";

    }

    if(!carritofind){
      throw new NotFoundException();
    }   
  }
}
