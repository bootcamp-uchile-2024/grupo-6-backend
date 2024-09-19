import { PipeTransform } from '@nestjs/common';
import { Genero } from 'src/products/entities/genero';
export declare class ParseEnumGeneroArrayPipePipe implements PipeTransform {
    private readonly Genero;
    constructor(Genero: object);
    transform(value: Genero[]): Genero[];
}
