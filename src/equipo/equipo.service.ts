import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';
import { Area } from './entities/area';

@Injectable()
export class EquipoService {
  // Creación de áreas
  private equipo: Equipo = new Equipo(
    "13Design", 
    [
      new Area("Diseño UX-UI", ["Yasna Cárdenas", "Vicente Naranjo", "Macarena Cerda", "Enzo Toledo", "Silvana Marín"], "Silvana Marín"),
      new Area("Frontend", ["Alexandra Pavez", "Antonia Horta", "Daniela Gajardo", "Tatiana Martínez"], "Alexandra Pávez"),
      new Area("Backend", ["José Martínez", "Sebastián Flores", "Nicole Carvajal"], "José Martínez")
    ]
  );

  create(createEquipoDto: CreateEquipoDto) {
    return 'This action adds a new equipo';
  }

  // getEquipo :: -> Equipo
  // Devuelve objeto Equipo, indicando su nombre, áreas, integrantes y lider
  getEquipo() {
    return this.equipo;
  }
  // findArea :: string -> Area
  // A partir del nombre de un área, devuelve objeto de la misma
  findArea(area: string): Area {
    return this.equipo.areas.find(areas => areas.nombre == area);
  }

  findOne(id: number) {
    return `This action returns a #${id} equipo`;
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto) {
    return `This action updates a #${id} equipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipo`;
  }
}
