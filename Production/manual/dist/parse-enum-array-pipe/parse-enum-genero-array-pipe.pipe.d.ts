import { PipeTransform } from '@nestjs/common';
import { Genero } from 'src/products/entities/genero';
export declare class ParseEnumGeneroArrayPipe implements PipeTransform {
    private readonly Genero;
    constructor(Genero: object);
    transform(value: Genero[]): Genero[];
}
