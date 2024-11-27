import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Usuario } from "src/orm/entity/usuario";
import { Repository } from "typeorm";
export declare class ValidacionExisteUsuarioPipe implements PipeTransform {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    transform(value: any, metadata: ArgumentMetadata): Promise<void>;
}
