import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from 'src/orm/entity/carrito';
import { Direccion } from 'src/orm/entity/direccion';
import { HistorialCompra } from 'src/orm/entity/historial_compra';
import { LibroCompra } from 'src/orm/entity/libro_compra';
import { Usuario } from 'src/orm/entity/usuario';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      HistorialCompra,
      Direccion,
      Carrito,
      LibroCompra
    ])
  ],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
