import { HistorialCompra } from 'src/orm/entity/historial_compra';
import { Usuario } from 'src/orm/entity/usuario';
import { DataSource, Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { GetPurchaseDto } from './dto/get-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Direccion } from 'src/orm/entity/direccion';
import { Carrito } from 'src/orm/entity/carrito';
import { LibroCompra } from 'src/orm/entity/libro_compra';
export declare class PurchasesService {
    private readonly dataSource;
    private readonly historialCompraRepository;
    private readonly usuarioRepository;
    private readonly direccionRepository;
    private readonly carritoRepository;
    private readonly libroCompraRepository;
    constructor(dataSource: DataSource, historialCompraRepository: Repository<HistorialCompra>, usuarioRepository: Repository<Usuario>, direccionRepository: Repository<Direccion>, carritoRepository: Repository<Carrito>, libroCompraRepository: Repository<LibroCompra>);
    create(createPurchaseDto: CreatePurchaseDto): Promise<GetPurchaseDto>;
    findAllClient(id_usuario: number): Promise<GetPurchaseDto[]>;
    findOne(id: number): Promise<GetPurchaseDto>;
    update(pedido: HistorialCompra, updatePurchaseDto: UpdatePurchaseDto): Promise<GetPurchaseDto>;
    remove(id: number): Promise<string>;
}
