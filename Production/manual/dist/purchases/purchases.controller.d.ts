import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { GetPurchaseDto } from './dto/get-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PurchasesService } from './purchases.service';
import { HistorialCompra } from 'src/orm/entity/historial_compra';
export declare class PurchasesController {
    private readonly purchasesService;
    constructor(purchasesService: PurchasesService);
    create(createPurchaseDto: CreatePurchaseDto): string;
    findAll(id_usuario: number): Promise<GetPurchaseDto[]>;
    findOne(id: string): Promise<GetPurchaseDto>;
    update(id: HistorialCompra, updatePurchaseDto: UpdatePurchaseDto): Promise<GetPurchaseDto>;
    remove(id: string): Promise<string>;
}
