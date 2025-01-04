import { CallHandler, ExecutionContext, Injectable, NestInterceptor, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable } from "rxjs";
import { Direccion } from "src/orm/entity/direccion";
import { Repository } from "typeorm";

@Injectable()
export class ExistUserAdressInterceptor implements NestInterceptor {

    constructor(
        @InjectRepository(Direccion)
        private readonly direccionRepository: Repository<Direccion>,
    ){}

    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        // Datos del usuario
        const request = context.switchToHttp().getRequest();
        const { id_usuario } = request.datosUsuario;
        const { body } = request;

        // Buscar dirección
        const existe_direccion: boolean = await this.direccionRepository.existsBy({
            id_usuario: id_usuario,
            id: body.idDireccionEntrega,
        })

        if (!existe_direccion){
            throw new NotFoundException('La dirección no existe o no pertenece al usuario')
        }

        return next.handle();
    }
}