import { ArgumentMetadata, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Libro } from "src/orm/entity/libro";
import { Repository } from "typeorm";

export class ValidationDeleteProductsPipe implements PipeTransform {

    constructor (
        @InjectRepository(Libro)
        private readonly productRepository: Repository<Libro>
    ){}

    async transform(value: any, metadata: ArgumentMetadata) {

        if (! (await this.productRepository.existsBy({ isbn: value }))){
            throw new NotFoundException(`No existe un libro con ID: ${value}`)
        };
        
        return value;
    }
}