import { HistorialCompra } from "src/orm/entity/historial_compra";
import { GetPurchaseDto } from "../dto/get-purchase.dto";
export declare class PurchasesMapper {
    static entityToDto(entity: HistorialCompra): GetPurchaseDto;
    static dtoToEntity(dto: GetPurchaseDto): HistorialCompra;
    static entityListToDtoList(compras: HistorialCompra[]): GetPurchaseDto[];
}
