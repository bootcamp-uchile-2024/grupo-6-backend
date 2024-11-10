import { Resena } from "src/orm/entity/resena";
import { CreateReviewDto } from "../dto/create-review.dto";

export class ResenaMapper{

    static dtoToEntity(idUsuario: number, idLibro: number, dto: CreateReviewDto): Resena{
        const entidad = new Resena();
        entidad.id_usuario = idUsuario;
        // entidad.isbn_libro = isbnLibro;
        entidad.id_libro = idLibro;
        entidad.comentario = dto.comentario;
        entidad.rating = dto.rating;
        entidad.fecha = new Date();
        return entidad;
    }
}