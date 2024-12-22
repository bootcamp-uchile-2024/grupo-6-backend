import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { HashingService } from 'src/seguridad/service/hashing.service';

@Injectable()
export class HashPipe implements PipeTransform {

  constructor(
    private readonly hashingService: HashingService
  ) {
  }

  transform(value: any, metadata: ArgumentMetadata) {
    if(!value.contrasena){
      return value
    }
    value.contrasena = this.hashingService.getHash(value.contrasena);
    return value;
  }
}