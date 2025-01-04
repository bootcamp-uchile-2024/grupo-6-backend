import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { HistorialCompra } from 'src/orm/entity/historial_compra';
import { Usuario } from 'src/orm/entity/usuario';
import { DataSource, Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { GetPurchaseDto } from './dto/get-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Direccion } from 'src/orm/entity/direccion';
import { Carrito } from 'src/orm/entity/carrito';
import { LibroCompra } from 'src/orm/entity/libro_compra';
import { CarritoInformacion } from 'src/orm/entity/carrito_informacion';
import { HistorialCompraMapper } from './mappers/historialCompra.mapper';
import { LibroCompraMapper } from './mappers/libroCompra.mapper';
import { Libro } from 'src/orm/entity/libro';

@Injectable()
export class PurchasesService {

  constructor (
    @InjectDataSource()
    private readonly dataSource: DataSource,

    @InjectRepository(HistorialCompra) 
    private readonly historialCompraRepository: Repository<HistorialCompra>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(Direccion)
    private readonly direccionRepository: Repository<Direccion>,

    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,

    @InjectRepository(CarritoInformacion)
    private readonly carritoInfoRepository: Repository<CarritoInformacion>,

    @InjectRepository(LibroCompra)
    private readonly libroCompraRepository: Repository<LibroCompra>,
    
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
  ){}

  // Crear pedido ------------------------------------------------------------------------------------
  async create(createPurchaseDto: CreatePurchaseDto, request): Promise<GetPurchaseDto> {
    const datosUsuario = request.datosUsuario;
    const carritoInfo: CarritoInformacion = request.carritoInfo;
    const carrito = request.carrito;

    const id_carrito = carritoInfo.id_carrito;
    
    // Realizar registro en historial_compra
    const historial_compra: HistorialCompra = HistorialCompraMapper.createDtoToEntity(createPurchaseDto, datosUsuario);
    await this.historialCompraRepository.save(historial_compra);

    // Realizar registros en libro_compra
    for (let carrito_i of carrito){
      const carritoEntity = LibroCompraMapper.carritoToEntity(carrito_i, historial_compra);
      // Almacenar en BD
      await this.libroCompraRepository.save(carritoEntity)

      // Reducir stock de libros
      const libro = await this.libroRepository.findOneBy({
        isbn: carrito_i.isbn_libro
      })

      await this.libroRepository.update(
        carrito_i.isbn_libro, 
        { stock_libro: libro.stock_libro - carrito_i.cantidad });
    }

    // Borrar carrito de compra
    await this.carritoRepository.delete({
      carrito_id: id_carrito
    })

    await this.carritoInfoRepository.delete({
      id_carrito: id_carrito
    })

    // Resultado
    const nuevo_pedido = await this.historialCompraRepository.findOne({
      where: {id: historial_compra.id},
      relations: {
        libroCompra: true
      }
    })
    return HistorialCompraMapper.entityToDto(nuevo_pedido);
  }


  // Obtener pedidos de usuario --------------------------------------------------------------------
  async findAllClient(datosUsuario): Promise<GetPurchaseDto[]> {

    // Obtener pedidos
    const pedidos: HistorialCompra[] = await this.historialCompraRepository.find({
      where: { 
        id_usuario: datosUsuario.idUsuario,
      },
      relations: {
        direccion: true,
        libroCompra: true,
      }
    });

    return HistorialCompraMapper.entityListToDtoList(pedidos);
  }


  // Obtener 1 pedido --------------------------------------------------------------------------------
  async findOne(id: number, datosUsuario): Promise<GetPurchaseDto> {
    // Obtener pedido
    const pedido: HistorialCompra = await this.historialCompraRepository.findOne({
      where: {
        id: id,
        id_usuario: datosUsuario.idUsuario
      },
      relations: {
        direccion: true,
        libroCompra: true,
      }
    });
    if (!pedido){
      throw new NotFoundException(`No existe un pedido con ID: ${id} asociado al usuario`)
    }

    return HistorialCompraMapper.entityToDto(pedido);
  }


  // Actualizar pedido -------------------------------------------------------------------------------------
  async update(pedido: HistorialCompra, updatePurchaseDto: UpdatePurchaseDto): Promise<GetPurchaseDto> {
    
    let condiciones: { [key: string]: any } = {};

    // Actualizar estatus
    if (updatePurchaseDto.estatus_compra){
      condiciones.estatus_compra = updatePurchaseDto.estatus_compra;
    };

    // Actualizar fecha entrega
    if (updatePurchaseDto.fecha_entrega){

      // Validar nueva fecha de entrega
      if (updatePurchaseDto.fecha_entrega !== null) {
          const nueva_fecha_entrega: Date = new Date(updatePurchaseDto.fecha_entrega);
          const fecha_compra: Date = new Date(pedido.fecha_compra);

          if (nueva_fecha_entrega < fecha_compra){
            throw new BadRequestException(
              `La nueva fecha de entrega debe ser mayor que la fecha de realización del pedido: ${fecha_compra}`)
          }
          // Actualizar
          condiciones.fecha_entrega = nueva_fecha_entrega;
      };
    };


    // Actualizar dirección de entrega de compra
    if (updatePurchaseDto.id_direccion_entrega){
      // Validar que dirección este asociada al usuario del pedido
      const nueva_direccion = await this.direccionRepository.findOneBy({ id: updatePurchaseDto.id_direccion_entrega});

      if (nueva_direccion.id_usuario != pedido.id_usuario){
        throw new BadRequestException(
          `La nueva dirección debe estar asociada al usuario del pedido.`)
      }

      condiciones.id_direccion_entrega = updatePurchaseDto.id_direccion_entrega;
    };

    await this.historialCompraRepository.update(
      { id: pedido.id, },
      condiciones
    );
    
    // Devolver pedido actualizado
    const pedidoActualizado: HistorialCompra = await this.historialCompraRepository.findOne({
      where: {
        id: pedido.id,
      },
      relations: {
        direccion: true,
        libroCompra: true,
      }
    });

    return HistorialCompraMapper.entityToDto(pedidoActualizado);
  }


  // Eliminar pedido ------------------------------------------------------------------------
  async remove(id: number): Promise<string> {
    // Eliminar en tabla "libro_compra"
    await this.libroCompraRepository.delete({
      id_compra: id
    })
    // Eliminar en tabla "historial_compra"
    await this.historialCompraRepository.delete({id});

    return `Fue eliminado el pedido con ID: ${id}`;
  }

}
