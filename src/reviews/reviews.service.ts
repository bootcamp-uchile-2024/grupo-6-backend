import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from 'src/orm/entity/libro';
import { Resena } from 'src/orm/entity/resena';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { ResenaMapper } from './mappers/review.mapper';

@Injectable()
export class ReviewsService {

  constructor(
    @InjectRepository(Resena) private readonly resenaRepository: Repository<Resena>,
    @InjectRepository(Libro) private readonly libroRepository: Repository<Libro>,
  ) {}
  
  async createResena(idUsuario: number, isbn_libro: string, createReviewDto: CreateReviewDto): Promise<CreateReviewDto> {
    let existeLibro: boolean = await this.libroRepository.existsBy({
      isbn: isbn_libro
    });
    if(!existeLibro){
      throw new BadRequestException('No existe el libro con el ISBN ingresado.')
    }

    let resena: Resena = ResenaMapper.dtoToEntity(+idUsuario, isbn_libro, createReviewDto);
    await this.resenaRepository.save(resena)

    return createReviewDto;
  }

  async findResenasUsuario(idUsuario: number): Promise<Resena[]> {

    let resenasUsuario = await this.resenaRepository.find({
      select: {
        id: true,
        rating: true,
        comentario:true,
        fecha: true,
        libro: {
          nombre: true
        }
      },
      where: {
        id_usuario: +idUsuario
      },
      relations: {
        libro: true
      }
    }) 

    if(resenasUsuario == undefined || resenasUsuario == null || resenasUsuario.length == 0){
      throw new BadRequestException('El usuario no ha realizado ninguna resena todavia.')
    }


    return resenasUsuario;

  }


  async findResenasLibro(isbn_libro: string): Promise<Resena[]> {

    let existeLibro: boolean = await this.libroRepository.existsBy({
      isbn: isbn_libro
    });
    if(!existeLibro){
      throw new BadRequestException('No existe el libro con el ID ingresado.')
    }

    let resenasLibro = await this.resenaRepository.find({
      select: {
        id: true,
        rating: true,
        comentario:true,
        fecha: true,
        usuario: {
          nombres: true,
          apellido_paterno: true,
          apellido_materno: true,
        }
      },
      where: {
        isbn_libro: isbn_libro
      },
      relations: {
        usuario: true
      }
    }) 

    if(resenasLibro == undefined || resenasLibro == null || resenasLibro.length == 0){
      throw new BadRequestException('El libro no ha recibido ninguna resena todavia.')
    }

    return resenasLibro;

  }


}
