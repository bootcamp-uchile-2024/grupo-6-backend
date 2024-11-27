import { Resena } from "src/orm/entity/resena";
import { CreateReviewDto } from "../dto/create-review.dto";
export declare class ResenaMapper {
    static dtoToEntity(idUsuario: number, idLibro: number, dto: CreateReviewDto): Resena;
}
