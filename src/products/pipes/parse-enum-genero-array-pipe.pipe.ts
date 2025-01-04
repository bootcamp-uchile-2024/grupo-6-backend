import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { GeneroEnum } from 'src/products/entities/generoEnum';

@Injectable()
export class ParseEnumGeneroArrayPipe implements PipeTransform {
  constructor(private readonly GeneroEnum: object) {}

  transform(value: GeneroEnum[]) {
    if (value !== undefined) {
      // Se revisa que sea un array o string el valor ingresado
      if (!Array.isArray(value) && typeof value != 'string') {
        throw new BadRequestException('Se espera un array de strings');
      }

      // En caso de que es un string se convierte a un array
      const generos = Array.isArray(value) ? value : [value];
      const generoValues = Object.values(GeneroEnum);

      return generos.map((item) => {
        const transformedItem = generoValues.find(
          (enumVal) => enumVal === item,
        );

        if (!transformedItem) {
          throw new BadRequestException(`${item} no es un genero válido`);
        }
        return item;
      });
    } else {
      return undefined;
    }
  }
}
