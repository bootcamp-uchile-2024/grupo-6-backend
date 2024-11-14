import { ShoppingcartSalidaDto } from './dto/create-shoppingcart.salida.dto';
import { Carrito } from 'src/orm/entity/carrito';
import { Repository } from 'typeorm';
import { Libro } from 'src/orm/entity/libro';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { ShoppingcartUpdateDto } from './dto/shoppingcart.update.dto';
export declare class ShoppingcartService {
    private readonly carritoRepository;
    private readonly libroRepository;
    constructor(carritoRepository: Repository<Carrito>, libroRepository: Repository<Libro>);
    create(createShoppingcartDto: CreateShoppingcartDto): Promise<ShoppingcartSalidaDto>;
    obtenerCarrito(): Promise<ShoppingcartSalidaDto[]>;
    cantidadMasMenos(updateDto: ShoppingcartUpdateDto): Promise<void>;
    remove(id: number): Promise<ShoppingcartSalidaDto[]>;
}
