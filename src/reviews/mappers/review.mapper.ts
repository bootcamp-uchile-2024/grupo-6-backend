import { Resena } from "src/orm/entity/resena";
import { CreateReviewDto } from "../dto/create-review.dto";
import { GetReviewDto } from "../dto/get-review.dto";

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

    // static entityToGetDto(entidad: Resena): GetReviewDto{
    //     const getReview = new GetReviewDto();
    //     getReview.id = entidad.id;
    //     getReview.nombreLibro = idLibro;
    //     getReview.comentario = dto.comentario;
    //     getReview.rating = dto.rating;
    //     getReview.fecha = new Date();
    //     return entidad;
    // }
}