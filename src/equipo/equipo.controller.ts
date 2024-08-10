import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Response } from 'express';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Post()
  create(@Body() createEquipoDto: CreateEquipoDto) {
    return this.equipoService.create(createEquipoDto);
  }
  // Obtener los datos del equipo
  @Get()
  getEquipo() {
    return this.equipoService.getEquipo();
  }
  // Dado el nombre de un área, entregar información sus integrante y líder
  @Get(':area')
  findOne(@Param('area') area: string, @Res() response: Response): void {

    const area_info = this.equipoService.findArea(area);

    if (area_info == 'Área no encontrada'){
      response.status(400).send(area_info)
    } else {
      response.status(200).send(area_info);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipoDto: UpdateEquipoDto) {
    return this.equipoService.update(+id, updateEquipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipoService.remove(+id);
  }
}
