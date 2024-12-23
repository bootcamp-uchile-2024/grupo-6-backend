import { ArgumentMetadata, BadRequestException, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Direccion } from "src/orm/entity/direccion";
import { Usuario } from "src/orm/entity/usuario";
import { Repository } from "typeorm";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";
import { Carrito } from "src/orm/entity/carrito";
import { HistorialCompra } from "src/orm/entity/historial_compra";
import { CarritoInformacion } from "src/orm/entity/carrito_informacion";
import { Libro } from "src/orm/entity/libro";

export class ValidationCreatePurchasePipe implements PipeTransform {
    constructor (

        @InjectRepository(Direccion)
        private readonly direccionRepository: Repository<Direccion>,

        @InjectRepository(CarritoInformacion)
        private readonly carritoInfoRepository: Repository<CarritoInformacion>,

        @InjectRepository(Carrito)
        private readonly carritoRepository: Repository<Carrito>,

        @InjectRepository(Libro)
        private readonly libroRepository: Repository<Libro>,

    ){}

    async transform(value: CreatePurchaseDto, metadata: ArgumentMetadata) {

        // Validar que exista carrito de compra
        const existeCarritoInfo = await this.carritoInfoRepository.existsBy({
            id_carrito: value.idCarrito });

        if (!existeCarritoInfo) {
            throw new NotFoundException(`No existe información de carrito de compra con ID ${value.idCarrito}`)
        };

        const carrito: Carrito[] = await this.carritoRepository.findBy({
            carrito_id: value.idCarrito });

        if (carrito.length === 0) {
            throw new NotFoundException(`No existe un carrito de compra con ID ${value.idCarrito}`)
        };

        // Validar dirección de entrega
        const direccion: Direccion = await this.direccionRepository.findOneBy({ 
            id: value.idDireccionEntrega
        });

        if (! direccion) {
            throw new NotFoundException(`No existe una dirección con ID: ${value.idDireccionEntrega}`)
        };

        // Validar stock
        for (let item_carrito of carrito){
            const libro = await this.libroRepository.findOneBy({
                isbn: item_carrito.isbn_libro
            })

            if (! libro){
                throw new NotFoundException(`No existe un libro con ISBN: ${item_carrito.isbn_libro}`)
            }

            if (libro.stock_libro < item_carrito.cantidad){
                throw new NotFoundException(`No hay stock suficiente para el libro con ISBN: ${item_carrito.isbn_libro}`)
            };
        }

        return value;
    }
}