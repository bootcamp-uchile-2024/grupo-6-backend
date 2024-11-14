import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Libro } from "src/orm/entity/libro";
import { Repository } from "typeorm";
export declare class ValidationUpdateProductsPipe implements PipeTransform {
    private readonly productRepository;
    constructor(productRepository: Repository<Libro>);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
