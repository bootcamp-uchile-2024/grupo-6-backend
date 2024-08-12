import { Injectable } from '@nestjs/common';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';

@Injectable()
export class HomeService {
  // create(createHomeDto: CreateHomeDto) {
  //   return 'This action adds a new home';
  // }

  // nombreEpica :: -> string
  // Devuelve el nombre de la épica asociada a este módulo
  nombreEpica() {
    return `Este módulo corresponde a la épica "Home".`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} home`;
  // }

  // update(id: number, updateHomeDto: UpdateHomeDto) {
  //   return `This action updates a #${id} home`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} home`;
  // }
}
