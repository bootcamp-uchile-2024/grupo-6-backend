import { ArgumentMetadata, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Libro } from "src/orm/entity/libro";
import { Repository } from "typeorm";

export class ValidationGetProductsPipe implements PipeTransform {

    constructor(
        @InjectRepository(Libro)
        private readonly libroRepository: Repository<Libro>,
    ){}

    async transform(value: any, metadata: ArgumentMetadata) {
        // Validar que existe libro buscado
        const existeLibro = await this.libroRepository.existsBy({
            isbn: value,
            habilitado: true,
        })
        if (!existeLibro){
            throw new NotFoundException(`No existe libro con ISBN: ${value}`)
        }
        return value;
    }
}