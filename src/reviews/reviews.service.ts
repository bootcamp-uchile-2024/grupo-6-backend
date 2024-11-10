import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resena } from 'src/orm/entity/resena';
import { Repository } from 'typeorm';
import { Usuario } from 'src/orm/entity/usuario';
import { Libro } from 'src/orm/entity/libro';
import { ResenaMapper } from './mappers/review.mapper';

@Injectable()
export class ReviewsService {

  constructor(
    @InjectRepository(Resena) private readonly resenaRepository: Repository<Resena>,
    @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Libro) private readonly libroRepository: Repository<Libro>
  ) {}
  
  async createResena(idUsuario: number, isbnLibro: string, createReviewDto: CreateReviewDto): Promise<CreateReviewDto> {
    const existeUsuario: boolean = await this.usuarioRepository.existsBy({
      id: idUsuario
    });
    if(!existeUsuario){
      throw new BadRequestException('No existe el usuario con el id ingresado.')
    }

    const existeLibro: boolean = await this.libroRepository.existsBy({
      isbn: isbnLibro
    });
    if(!existeLibro){
      throw new BadRequestException('No existe el libro con el isbn ingresado.')
    }

    const resena: Resena = ResenaMapper.dtoToEntity(idUsuario,isbnLibro,createReviewDto);
    await this.resenaRepository.save(resena)

    return createReviewDto;
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
