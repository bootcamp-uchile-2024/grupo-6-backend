import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/orm/entity/usuario';
import { HistorialCompra } from 'src/orm/entity/historial_compra';
import { Direccion } from 'src/orm/entity/direccion';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      HistorialCompra,
      Direccion
    ])
  ],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
