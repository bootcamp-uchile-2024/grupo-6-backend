import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class ValidationSearchProductsPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata) {
        if (metadata.type === 'query' && metadata.data === 'query' && typeof value === 'string' &&  value.length < 3){
            throw new BadRequestException('Debe ingresar una solicitud con 3 o más caracteres')
        }
        return value;
    }
}