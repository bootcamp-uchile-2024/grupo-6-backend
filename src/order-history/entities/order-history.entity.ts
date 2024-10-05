import { User } from "dist/users/entities/user.entity";
import { ItemPedido } from "./ItemPedido";

export class orderHistory{
    constructor(
        public id: number,
        public usuario: User,
        public fechaPedido: string,
        public estado: string,
        public total: number,
        public items: ItemPedido[]
      ) {}
}