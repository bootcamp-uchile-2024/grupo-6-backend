import { Product } from "dist/products/entities/product.entity";

export class ItemPedido{
    constructor(
        public libro: Product,
        public cantidad: number
      ) {}
}