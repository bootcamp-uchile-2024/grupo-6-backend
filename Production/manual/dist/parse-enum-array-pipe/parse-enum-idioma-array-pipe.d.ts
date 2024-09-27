import { PipeTransform } from '@nestjs/common';
export declare class ParseEnumIdiomaArrayPipe implements PipeTransform {
    private readonly Idioma;
    constructor(Idioma: object);
    transform(value: string): string[];
}
