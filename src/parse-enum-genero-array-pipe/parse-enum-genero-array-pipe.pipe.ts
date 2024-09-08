import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Genero } from 'src/products/entities/genero';

@Injectable()
export class ParseEnumGeneroArrayPipePipe implements PipeTransform {
  constructor(private readonly Genero: object) {}

  transform(value: Genero[]) {
    if (value !== undefined){
      // Se revisa que sea un array o string el valor ingresado
      if (!Array.isArray(value) && typeof value != "string"){
        throw new BadRequestException('Se espera un array de strings');
      }

      // En caso de que es un string se convierte a un array
      const generos = Array.isArray(value) ? value : [value];
      const generoValues = Object.values(Genero);

      return generos.map( item => {
        const transformedItem = generoValues.find(enumVal => enumVal === item);

        if (!transformedItem){
          throw new BadRequestException(`${item} no es un genero válido`)
        }
        return item;
      })
    }
  }
}
