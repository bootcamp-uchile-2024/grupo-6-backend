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
  ){}

  // Crear pedido
  async create(createPurchaseDto: CreatePurchaseDto, datosUsuario) { //Promise<GetPurchaseDto> {
    
    // Obtener carrito y carrito_informacion según ID carrito
    const carritoInfo: CarritoInformacion = await this.carritoInfoRepository.findOneBy({ id_carrito: createPurchaseDto.idCarrito });
    console.log(carritoInfo, datosUsuario)
    if (carritoInfo.usuario_id != datosUsuario.idUsuario){
      throw new BadRequestException(`El usuario no tiene un carrito de ID: ${carritoInfo.id_carrito} asociado`)
    }
    
    // Realizar registro en historial_compra
    const historial_compra: HistorialCompra = HistorialCompraMapper.createDtoToEntity(createPurchaseDto, datosUsuario);

    try {
      // await this.historialCompraRepository.save(historial_compra);
    } catch (error) {
      throw new HttpException('Error al guardar historial compra', 400)
    }
    // Realizar registros en libro_compra
    const carrito: Carrito[] = await this.carritoRepository.findBy({
      carrito_id: createPurchaseDto.idCarrito
    })

    const librosCompra: LibroCompra[] = carrito.map(
      c => LibroCompraMapper.carritoToEntity(c, historial_compra)
    )
    console.log(carrito)

    

    // const nuevoLibroCompra: LibroCompra[] = carrito.map(
    //   item => this.libroCompraRepository.create({
    //     id_compra: createPurchaseDto.id,
    //     isbn_libro: item.isbn_libro,
    //     cantidad: item.cantidad,
    //   })
    // )

 

    // await this.dataSource.transaction( async (transactionalEntityManager) => {
    //   // Guardar pedido
    //   await transactionalEntityManager.save(nuevoPedido);

    //   // Borrar carrito de compra
    //   await transactionalEntityManager.delete(Carrito, {
    //     usuario_id: createPurchaseDto.id_usuario
    //   });
    // });

    // return PurchasesMapper.entityToDto(nuevoPedido);
  }

  // Obtener pedidos de usuario
  async findAllClient(id_usuario: number): Promise<GetPurchaseDto[]> {

    // Obtener pedidos
    const pedidos: HistorialCompra[] = await this.historialCompraRepository.find({
      where: { 
        id_usuario: id_usuario,
      },
      relations: {
        direccion: true,
        libroCompra: true,
      }
    });

    return HistorialCompraMapper.entityListToDtoList(pedidos);
  }

  // Obtener 1 pedido
  async findOne(id: number): Promise<GetPurchaseDto> {
    const pedido: HistorialCompra = await this.historialCompraRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        direccion: true,
        libroCompra: true,
      }
    });

    return HistorialCompraMapper.entityToDto(pedido);
  }

  // Actualizar estado de pedido
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
          `La nueva dirección debe estar asociada al usuario del pedido. ID usuario: ${pedido.id_usuario}`)
      }

      condiciones.id_direccion_entrega = updatePurchaseDto.id_direccion_entrega;
    };

    await this.historialCompraRepository.update(
      { id: pedido.id, },
      condiciones
    );
    
    // Devolver pedido actualizado
    return await this.findOne(pedido.id);
  }

  // Eliminar pedido 
  async remove(id: number): Promise<string> {
    await this.historialCompraRepository.delete(id);

    return `Fue eliminado el pedido con ID #${id}`;
  }

}
