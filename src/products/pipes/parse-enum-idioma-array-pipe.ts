import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Idioma } from 'src/products/entities/idioma';

@Injectable()
export class ParseEnumIdiomaArrayPipe implements PipeTransform {
  constructor(private readonly Idioma: object) {}

  transform(value: string) {
    if (value !== undefined) {
      // Separar por comas
      let values = value.replace(' ', '').split(",").filter((v: string) => v !== "");

      // En caso de que es un string se convierte a un array
      const idiomaValues = Object.values(Idioma);

      return values.map((item) => {
        const transformedItem = idiomaValues.find(
          (enumVal) => enumVal === item,
        );

        if (!transformedItem) {
          throw new BadRequestException(`${item} no es un idioma válido`);
        }
        return item;
      });
    }
  }
}
