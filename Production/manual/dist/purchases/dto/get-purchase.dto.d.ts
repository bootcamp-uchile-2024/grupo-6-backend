import { Direccion } from "src/orm/entity/direccion";
import { LibroCompra } from "src/orm/entity/libro_compra";
export declare class GetPurchaseDto {
    id: number;
    id_usuario: number;
    estatus_compra: string;
    fecha_compra: Date;
    fecha_entrega: Date;
    direccion: Direccion;
    libroCompra: LibroCompra[];
}
