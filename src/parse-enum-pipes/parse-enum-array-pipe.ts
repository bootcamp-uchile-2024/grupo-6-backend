import { BadRequestException } from "@nestjs/common";

export function parseEnumArrayPipe(value: undefined | string | string[], Enum: Object, enumText: string){
    if (value !== undefined){
        // Se revisa que sea un array o string el valor ingresado
        if (!Array.isArray(value) && typeof value != "string"){
          throw new BadRequestException('Se espera un array de strings');
        }
  
        // En caso de que es un string se convierte a un array
        const values = Array.isArray(value) ? value : [value];
        const enumValues = Object.values(Enum);
  
        return values.map( item => {
          const transformedItem = enumValues.find(enumVal => enumVal === item);
  
          if (!transformedItem){
            throw new BadRequestException(`${item} no es un ${enumText} válido`)
          }
          return transformedItem;
        })
      }
}