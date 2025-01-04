import { CallHandler, CanActivate, ExecutionContext, Injectable, NestInterceptor, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable } from "rxjs";
import { Carrito } from "src/orm/entity/carrito";
import { CarritoInformacion } from "src/orm/entity/carrito_informacion";
import { Libro } from "src/orm/entity/libro";
import { Repository } from "typeorm";

@Injectable()
export class ExistUserShoppingCardInterceptor implements NestInterceptor {

    constructor (
        @InjectRepository(CarritoInformacion)
        private readonly carritoInfoRepository: Repository<CarritoInformacion>,

        @InjectRepository(Carrito)
        private readonly carritoRepository: Repository<Carrito>,

        @InjectRepository(Libro)
        private readonly libroRepository: Repository<Libro>,
    ){}

    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        // Datos del usuario
        const request = context.switchToHttp().getRequest();
        const id_usuario = request.datosUsuario.idUsuario;

        // Buscar carritoInfo del usuario
        const carritoInfo: CarritoInformacion = await this.carritoInfoRepository.findOneBy({ 
            usuario_id: id_usuario
        });

        if (!carritoInfo){
            throw new NotFoundException('El usuario no tiene un carrito asociado')
        }

        // Buscar carrito
        const id_carrito = carritoInfo.id_carrito;

        const carrito: Carrito[] = await this.carritoRepository.findBy({
            carrito_id: id_carrito });

        if (carrito.length === 0) {
            throw new NotFoundException(`No existe un carrito de compra con ID ${id_carrito}`)
        };     
        
        // Agregar carritoInfo y carrito al request
        request.carritoInfo = carritoInfo;
        request.carrito = carrito;
        
        // Validar stock
        for (let item_carrito of carrito){
            const libro = await this.libroRepository.findOneBy({
                isbn: item_carrito.isbn_libro
            })

            if (!libro){
                throw new NotFoundException(`No existe un libro con ISBN: ${item_carrito.isbn_libro}`)
            }

            if (libro.stock_libro < item_carrito.cantidad){
                throw new NotFoundException(`No hay stock suficiente para el libro con ISBN: ${item_carrito.isbn_libro}`)
            };
        }

        return next.handle();
    }
}