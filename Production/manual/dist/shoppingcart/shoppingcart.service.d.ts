import { Shoppingcart } from './entities/shoppingcart.entity';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
export declare class ShoppingcartService {
    shoppingcart: Shoppingcart[];
    create(createProductotDto: CreateProductDto): Shoppingcart[];
    obtenerProductos(): Shoppingcart[];
    remove(item: number): Shoppingcart;
}
