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

  getEquipo(){
    return this.equipo;
  }

  // getEquipo() {
  //   let txt_Equipo: string = `Equipo: ${this.equipo.nombre}\n\n`;

  //   // Añadir información por área
  //   for (let i: number = 0; i < this.equipo.areas.length; i++){
      
  //     let area: string = this.equipo.areas[i]; 

  //     // Nombre de área
  //     txt_Equipo += `Área: ${area}\n`; 

  //     // Integrantes
  //     let integrantes: string = this.equipo.personas[i].join(', ');
  //     txt_Equipo += `Integrantes del área ${area}: ${integrantes}\n`;

  //     // Lider el grupo
  //     txt_Equipo += `Líder del área ${area}: ${this.equipo.lider[i]}\n\n`;

  //   }

  //   return txt_Equipo;
  // }

  findArea(area: string): object{
    let idx: number = this.equipo.areas.indexOf(area); // Encontrar índice del área

    // Datos del área
    let integrantes: string[] = this.equipo.personas[idx];
    let lider: string = this.equipo.lider[idx];

    const info_area = {
      'area': area,
      'integrantes': integrantes,
      'lider': lider,
    }

    return info_area;
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
