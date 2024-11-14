import { Resena } from 'src/orm/entity/resena';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewsService } from './reviews.service';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    createResena(idUsuario: number, idLibro: number, createReviewDto: CreateReviewDto): Promise<CreateReviewDto>;
    findResenasUsuario(idUsuario: number): Promise<Resena[]>;
    findResenasLibro(idLibro: number): Promise<Resena[]>;
}
