import { ShoppingcartService } from './shoppingcart.service';
import { ShoppingcartSalidaDto } from './dto/create-shoppingcart.salida.dto';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { ShoppingcartUpdateDto } from './dto/shoppingcart.update.dto';
export declare class ShoppingcartController {
    private readonly shoppingcartService;
    constructor(shoppingcartService: ShoppingcartService);
    create(createShoppingcartDto: CreateShoppingcartDto): Promise<ShoppingcartSalidaDto>;
    obtenerCarrito(): Promise<ShoppingcartSalidaDto[]>;
    cantidadMasMenos(updateDto: ShoppingcartUpdateDto): Promise<void>;
    remove(id: number): Promise<ShoppingcartSalidaDto[]>;
}
