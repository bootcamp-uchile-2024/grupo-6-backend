import { Resena } from "src/orm/entity/resena";
import { CreateReviewDto } from "../dto/create-review.dto";
import { GetReviewDto } from "../dto/get-review.dto";

export class ResenaMapper{

    static dtoToEntity(idUsuario: number, isbn_libro: string, dto: CreateReviewDto): Resena{
        const entidad = new Resena();
        entidad.id_usuario = idUsuario;
        entidad.isbn_libro = isbn_libro;
        entidad.comentario = dto.comentario;
        entidad.rating = dto.rating;
        entidad.fecha = new Date();
        return entidad;
    }

    static entityToGetDto(entidad: Resena): GetReviewDto{
        const dto = new GetReviewDto();
        dto.id = entidad.id;
        dto.isbnLibro = entidad.isbn_libro;
        dto.comentario = entidad.comentario;
        dto.rating = entidad.rating;
        dto.fecha = entidad.fecha;

        return dto;
    }
}