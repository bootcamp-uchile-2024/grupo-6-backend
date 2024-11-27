import { Libro } from 'src/orm/entity/libro';
import { Resena } from 'src/orm/entity/resena';
import { Usuario } from 'src/orm/entity/usuario';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewsService {
    private readonly resenaRepository;
    private readonly usuarioRepository;
    private readonly libroRepository;
    constructor(resenaRepository: Repository<Resena>, usuarioRepository: Repository<Usuario>, libroRepository: Repository<Libro>);
    createResena(idUsuario: number, idLibro: number, createReviewDto: CreateReviewDto): Promise<CreateReviewDto>;
    findResenasUsuario(idUsuario: number): Promise<Resena[]>;
    findResenasLibro(idLibro: number): Promise<Resena[]>;
}
