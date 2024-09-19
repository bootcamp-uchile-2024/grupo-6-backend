import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';
import { Area } from './entities/area';
import { Ecommerce } from './entities/ecommerce';

@Injectable()
export class EquipoService {
  // Creación de áreas
  private equipo: Equipo = new Equipo('13Design', [
    new Area(
      'Diseño UX-UI',
      [
        'Yasna Cárdenas',
        'Vicente Naranjo',
        'Macarena Cerda',
        'Enzo Toledo',
        'Silvana Marín',
      ],
      'Silvana Marín',
    ),
    new Area(
      'Frontend',
      [
        'Alexandra Pavez',
        'Antonia Horta',
        'Daniela Gajardo',
        'Tatiana Martínez',
      ],
      'Alexandra Pávez',
    ),
    new Area(
      'Backend',
      ['José Martínez', 'Sebastián Flores', 'Nicole Carvajal'],
      'José Martínez',
    ),
  ]);
  private ecommerce: Ecommerce = new Ecommerce(
    'Paginas Selectas',
    'Venta de libros, mediante una experiencia de recomendaciones personalizada basada en los gustos del usuario.',
    'E-commerce tipo B2C de venta de libros.',
    'Ofrecer una experiencia de compra personalizada de una amplia variedad de libros, permitiendo a los usuarios con hábitos de lectura establecidos o en proceso de retomarlos descubrir y adquirir fácilmente a un extenso catálogo literario, fomentando una comunidad de lectores para compartir sus intereses.',
    [
      '1. Implementar un sistema de recomendaciones personalizadas de catalógos de libros basado en las preferencias de los usuarios.',
      '2. Desarrollar y ofrecer mystery boxes mensuales que contengan una selección de libros y artículos relacionados a la lectura, separada por generos literarios y además de ofrecer suscripciones  mensuales para cursos y club de lectura, entre otros servicios.',
    ],
  );

  create(createEquipoDto: CreateEquipoDto) {
    return 'This action adds a new equipo';
  }

  // getEquipo :: -> Equipo
  // Devuelve objeto Equipo, indicando su nombre, áreas, integrantes y lider
  getEquipo() {
    return this.equipo;
  }
  // getAreas :: -> Area[]
  // Devuelve todas las areas del equipo.
  getAreas() {
    return this.equipo.areas;
  }

  // getEcommerceInfo :: -> Ecommerce
  // Devuelve la informacion general del Ecommerce.
  getEcommerceInfo() {
    return this.ecommerce;
  }

  // findArea :: string -> Area
  // A partir del nombre de un área, devuelve objeto de la misma
  findArea(area: string): Area {
    return this.equipo.areas.find((areas) => areas.nombre == area);
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
