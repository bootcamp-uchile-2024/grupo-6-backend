import { ShoppingcartService } from './shoppingcart.service';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
export declare class ShoppingcartController {
    private readonly shoppingcartService;
    constructor(shoppingcartService: ShoppingcartService);
    create(createProductDto: CreateProductDto): import("./entities/shoppingcart.entity").Shoppingcart[];
    obtenerProductos(): import("./entities/shoppingcart.entity").Shoppingcart[];
    remove(item: number): string;
}
