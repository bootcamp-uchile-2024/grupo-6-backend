import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from 'src/orm/entity/libro';
import { Resena } from 'src/orm/entity/resena';
import { Usuario } from 'src/orm/entity/usuario';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { ResenaMapper } from './mappers/review.mapper';

@Injectable()
export class ReviewsService {

  constructor(
    @InjectRepository(Resena) private readonly resenaRepository: Repository<Resena>,
    @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Libro) private readonly libroRepository: Repository<Libro>
  ) {}
  
  async createResena(idUsuario: number, idLibro: number, createReviewDto: CreateReviewDto): Promise<CreateReviewDto> {
    // async createResena(idUsuario: number, isbnLibro: string, createReviewDto: CreateReviewDto): Promise<CreateReviewDto> {
    const existeUsuario: boolean = await this.usuarioRepository.existsBy({
      id: idUsuario
    });
    if(!existeUsuario){
      throw new BadRequestException('No existe el usuario con el id ingresado.')
    }

    const existeLibro: boolean = await this.libroRepository.existsBy({
      id: idLibro
    });
    if(!existeLibro){
      throw new BadRequestException('No existe el libro con el ID ingresado.')
    }

    // const existeLibro: boolean = await this.libroRepository.existsBy({
    //   isbn: isbnLibro
    // });
    // if(!existeLibro){
    //   throw new BadRequestException('No existe el libro con el isbn ingresado.')
    // }

    const resena: Resena = ResenaMapper.dtoToEntity(idUsuario,idLibro,createReviewDto);
    // const resena: Resena = ResenaMapper.dtoToEntity(idUsuario,isbnLibro,createReviewDto);
    await this.resenaRepository.save(resena)

    return createReviewDto;
  }

  // async findResenasUsuario(idUsuario: number): Promise<getResenasUsuario> {

  //   const resenasUsuario: Promise<Resena[]> = await this.resenaRepository.find({
  //     where: {
  //       id_usuario: idUsuario
  //     }
  //   }) 



  //   return `This action returns all reviews`;
  // }

  // findResenasLibro(id: number) {
  //   return `This action returns a #${id} review`;
  // }



}
