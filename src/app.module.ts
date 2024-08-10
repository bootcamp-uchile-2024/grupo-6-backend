import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoModule } from './equipo/equipo.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [EquipoModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
