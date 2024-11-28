import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Autor } from "src/orm/entity/autor";
import { Editorial } from "src/orm/entity/editorial";
import { Encuadernacion } from "src/orm/entity/encuadernacion";
import { Genero } from "src/orm/entity/genero";
import { IdiomaLibro } from "src/orm/entity/idioma_libro";
import { Libro } from "src/orm/entity/libro";
import { Repository } from "typeorm";
export declare class ValidationCreateProductsPipe implements PipeTransform {
    private readonly libroRepository;
    private readonly idiomaRepository;
    private readonly encuadernacionRepository;
    private readonly editorialRepository;
    private readonly generoRepository;
    private readonly autorRepository;
    constructor(libroRepository: Repository<Libro>, idiomaRepository: Repository<IdiomaLibro>, encuadernacionRepository: Repository<Encuadernacion>, editorialRepository: Repository<Editorial>, generoRepository: Repository<Genero>, autorRepository: Repository<Autor>);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
