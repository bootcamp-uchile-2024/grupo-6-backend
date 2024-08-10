import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';

@Injectable()
export class EquipoService {
  private equipo: Equipo = new Equipo("13Design", ["Diseño UX-UI", "Frontend", "Backend"], [
    ["Yasna Cárdenas", "Vicente Naranjo", "Macarena Cerda", "Enzo Toledo", "Silvana Marín"], // Diseño UX/UI
    ["Alexandra Pavez", "Antonia Horta", "Daniela Gajardo", "Tatiana Martínez"], // Frontend
    ["José Martínez", "Sebastián Flores", "Nicole Carvajal"], // Backend
  ], ["Silvana Marín", "Alexandra Pávez", "José Martínez"])

  create(createEquipoDto: CreateEquipoDto) {
    return 'This action adds a new equipo';
  }

  // getEquipo :: -> string
  // Devuelve la información del equipo, indicando su nombre, áreas, integrantes y lider
  getEquipo() {
    let txt_Equipo: string = `Equipo: ${this.equipo.nombre}\n\n`;

    // Añadir información por área
    for (let i: number = 0; i < this.equipo.areas.length; i++){
      
      let area: string = this.equipo.areas[i]; 

      // Nombre de área
      txt_Equipo += `Área: ${area}\n`; 

      // Integrantes
      let integrantes: string = this.equipo.personas[i].join(', ');
      txt_Equipo += `Integrantes del área ${area}: ${integrantes}\n`;

      // Lider el grupo
      txt_Equipo += `Líder del área ${area}: ${this.equipo.lider[i]}\n\n`;

    }

    return txt_Equipo;
  }
  // findArea :: string -> string
  // A partir del nombre de un área, devuelve información de la misma
  findArea(area: string): string {
    let idx: number = this.equipo.areas.indexOf(area); // Encontrar índice del área

    // Información del área
    if (idx > 0){
      // Datos del área
      let integrantes: string = this.equipo.personas[idx].join(', ');
      let lider: string = this.equipo.lider[idx];
      
      return `Área: ${area}\nIntegrantes: ${integrantes}\nLíder: ${lider}`
    } else {
      return 'Área no encontrada'
    }
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
