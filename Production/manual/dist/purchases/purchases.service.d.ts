import { HistorialCompra } from 'src/orm/entity/historial_compra';
import { Usuario } from 'src/orm/entity/usuario';
import { Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { GetPurchaseDto } from './dto/get-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Direccion } from 'src/orm/entity/direccion';
export declare class PurchasesService {
    private readonly historialCompraRepository;
    private readonly usuarioRepository;
    private readonly direccionRepository;
    constructor(historialCompraRepository: Repository<HistorialCompra>, usuarioRepository: Repository<Usuario>, direccionRepository: Repository<Direccion>);
    create(createPurchaseDto: CreatePurchaseDto): string;
    findAllClient(id_usuario: number): Promise<GetPurchaseDto[]>;
    findOne(id: number): Promise<GetPurchaseDto>;
    update(pedido: HistorialCompra, updatePurchaseDto: UpdatePurchaseDto): Promise<GetPurchaseDto>;
    remove(id: number): Promise<string>;
}
