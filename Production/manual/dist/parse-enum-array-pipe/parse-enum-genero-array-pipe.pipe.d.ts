import { PipeTransform } from '@nestjs/common';
import { GeneroEnum } from 'src/products/entities/generoEnum';
export declare class ParseEnumGeneroArrayPipe implements PipeTransform {
    private readonly GeneroEnum;
    constructor(GeneroEnum: object);
    transform(value: GeneroEnum[]): GeneroEnum[];
}
