import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';

@Module({
  controllers: [EquipoController],
  providers: [EquipoService],
})
export class EquipoModule {}
