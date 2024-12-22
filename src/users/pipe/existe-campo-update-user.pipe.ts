import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ExisteAlMenosUnoUpdateUserPipe implements PipeTransform {
  
  async transform(value: any, metadata: ArgumentMetadata) {
  const camposValidos = ['nombres', 'apellidoPaterno', 'apellidoMaterno', 'correoElectronico', 'contrasena'];

  const existeAlmenosUno = 
  Object.keys(value).every((key) => camposValidos.includes(key)) && // Todos los campos deben ser válidos
  Object.entries(value)
    .filter(([key]) => camposValidos.includes(key)) // Filtra solo los campos válidos
    .some(([, campo]) => campo !== undefined && campo !== null); // Al menos uno debe tener valor

    if (!existeAlmenosUno) {
        throw new BadRequestException("'Debe enviar al menos uno de los campos: nombres, apellidoPaterno, apellidoMaterno, correoElectronico o contrasena.'");
    }

    return value;
  }
}