import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from 'src/orm/entity/carrito';
import { Direccion } from 'src/orm/entity/direccion';
import { HistorialCompra } from 'src/orm/entity/historial_compra';
import { LibroCompra } from 'src/orm/entity/libro_compra';
import { Usuario } from 'src/orm/entity/usuario';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';
import { UsersModule } from 'src/users/users.module';
import { CarritoInformacion } from 'src/orm/entity/carrito_informacion';
import { Libro } from 'src/orm/entity/libro';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      HistorialCompra,
      Direccion,
      Carrito,
      CarritoInformacion,
      LibroCompra,
      Libro,
    ]),
    UsersModule
  ],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
