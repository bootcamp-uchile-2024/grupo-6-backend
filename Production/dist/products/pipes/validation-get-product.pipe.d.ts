import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Libro } from "src/orm/entity/libro";
import { Repository } from "typeorm";
export declare class ValidationGetProductsPipe implements PipeTransform {
    private readonly libroRepository;
    constructor(libroRepository: Repository<Libro>);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
