import { ArgumentMetadata, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Libro } from "src/orm/entity/libro";
import { Repository } from "typeorm";

export class ValidationUpdateProductsPipe implements PipeTransform {

    constructor(
        @InjectRepository(Libro)
        private readonly productRepository: Repository<Libro>,
    ){}
    
    async transform(value: any, metadata: ArgumentMetadata) {
        // Validación de ID de libro
        if (metadata.type === 'param'){
            const libro: Libro = await this.productRepository.findOneBy({ id: value });
            
            // Validar existencia de libro
            if (!libro){
                throw new NotFoundException(`No existe un libro con ID: ${value}`)
            }
            return libro;
        }

        return value;
    }
}