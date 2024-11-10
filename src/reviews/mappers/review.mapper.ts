import { Resena } from "src/orm/entity/resena";
import { CreateReviewDto } from "../dto/create-review.dto";

export class ResenaMapper{

    static dtoToEntity(idUsuario: number, isbnLibro: string, dto: CreateReviewDto): Resena{
        const entidad = new Resena();
        entidad.id_usuario = idUsuario;
        entidad.isbn_libro = isbnLibro;
        entidad.comentario = dto.comentario;
        entidad.rating = dto.rating;
        entidad.fecha = new Date();
        return entidad;
    }
}