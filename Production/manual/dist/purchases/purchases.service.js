"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const historial_compra_1 = require("../orm/entity/historial_compra");
const usuario_1 = require("../orm/entity/usuario");
const typeorm_2 = require("typeorm");
const purchases_mapper_1 = require("./mappers/purchases.mapper");
const direccion_1 = require("../orm/entity/direccion");
const carrito_1 = require("../orm/entity/carrito");
const libro_compra_1 = require("../orm/entity/libro_compra");
let PurchasesService = class PurchasesService {
    constructor(dataSource, historialCompraRepository, usuarioRepository, direccionRepository, carritoRepository, libroCompraRepository) {
        this.dataSource = dataSource;
        this.historialCompraRepository = historialCompraRepository;
        this.usuarioRepository = usuarioRepository;
        this.direccionRepository = direccionRepository;
        this.carritoRepository = carritoRepository;
        this.libroCompraRepository = libroCompraRepository;
    }
    async create(createPurchaseDto) {
        const fecha_compra = new Date();
        const fecha_entrega = new Date();
        fecha_entrega.setDate(fecha_entrega.getDate() + 10);
        const carritoUsuario = await this.carritoRepository.findBy({
            usuario_id: createPurchaseDto.id_usuario
        });
        const nuevoLibroCompra = carritoUsuario.map(item => this.libroCompraRepository.create({
            id_compra: createPurchaseDto.id,
            id_libro: item.libro_id,
            cantidad: item.cantidad,
        }));
        const direccion = await this.direccionRepository.findOneBy({
            id: createPurchaseDto.id_direccion_entrega
        });
        const nuevoPedido = this.historialCompraRepository.create({
            id: createPurchaseDto.id,
            id_usuario: createPurchaseDto.id_usuario,
            estatus_compra: 'En espera de pago',
            fecha_compra: fecha_compra,
            fecha_entrega: fecha_entrega,
            id_direccion_entrega: createPurchaseDto.id_direccion_entrega,
            libroCompra: nuevoLibroCompra,
            direccion: direccion,
        });
        await this.dataSource.transaction(async (transactionalEntityManager) => {
            await transactionalEntityManager.save(nuevoPedido);
            await transactionalEntityManager.delete(carrito_1.Carrito, {
                usuario_id: createPurchaseDto.id_usuario
            });
        });
        return purchases_mapper_1.PurchasesMapper.entityToDto(nuevoPedido);
    }
    async findAllClient(id_usuario) {
        const usuario = await this.usuarioRepository.findOne({
            where: { id: id_usuario }
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`No existe un usuario con ID: ${id_usuario}`);
        }
        const pedidos = await this.historialCompraRepository.find({
            where: {
                id_usuario: id_usuario,
            },
            relations: {
                direccion: true,
                libroCompra: true,
            }
        });
        return purchases_mapper_1.PurchasesMapper.entityListToDtoList(pedidos);
    }
    async findOne(id) {
        const pedido = await this.historialCompraRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                direccion: true,
                libroCompra: true,
            }
        });
        return purchases_mapper_1.PurchasesMapper.entityToDto(pedido);
    }
    async update(pedido, updatePurchaseDto) {
        let condiciones = {};
        if (updatePurchaseDto.estatus_compra) {
            condiciones.estatus_compra = updatePurchaseDto.estatus_compra;
        }
        ;
        if (updatePurchaseDto.fecha_entrega) {
            if (updatePurchaseDto.fecha_entrega !== null) {
                const nueva_fecha_entrega = new Date(updatePurchaseDto.fecha_entrega);
                const fecha_compra = new Date(pedido.fecha_compra);
                if (nueva_fecha_entrega < fecha_compra) {
                    throw new common_1.BadRequestException(`La nueva fecha de entrega debe ser mayor que la fecha de realización del pedido: ${fecha_compra}`);
                }
                condiciones.fecha_entrega = nueva_fecha_entrega;
            }
            ;
        }
        ;
        if (updatePurchaseDto.id_direccion_entrega) {
            const nueva_direccion = await this.direccionRepository.findOneBy({ id: updatePurchaseDto.id_direccion_entrega });
            if (nueva_direccion.id_usuario != pedido.id_usuario) {
                throw new common_1.BadRequestException(`La nueva dirección debe estar asociada al usuario del pedido. ID usuario: ${pedido.id_usuario}`);
            }
            condiciones.id_direccion_entrega = updatePurchaseDto.id_direccion_entrega;
        }
        ;
        await this.historialCompraRepository.update({ id: pedido.id, }, condiciones);
        return await this.findOne(pedido.id);
    }
    async remove(id) {
        await this.historialCompraRepository.delete(id);
        return `Fue eliminado el pedido con ID #${id}`;
    }
};
exports.PurchasesService = PurchasesService;
exports.PurchasesService = PurchasesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(historial_compra_1.HistorialCompra)),
    __param(2, (0, typeorm_1.InjectRepository)(usuario_1.Usuario)),
    __param(3, (0, typeorm_1.InjectRepository)(direccion_1.Direccion)),
    __param(4, (0, typeorm_1.InjectRepository)(carrito_1.Carrito)),
    __param(5, (0, typeorm_1.InjectRepository)(libro_compra_1.LibroCompra)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PurchasesService);
//# sourceMappingURL=purchases.service.js.map