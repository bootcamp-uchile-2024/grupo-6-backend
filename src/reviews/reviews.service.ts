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
    let existeUsuario: boolean = await this.usuarioRepository.existsBy({
      id: +idUsuario
    });
    if(!existeUsuario){
      throw new BadRequestException('No existe el usuario con el id ingresado.')
    }

    let existeLibro: boolean = await this.libroRepository.existsBy({
      id: +idLibro
    });
    if(!existeLibro){
      throw new BadRequestException('No existe el libro con el ID ingresado.')
    }

    let resena: Resena = ResenaMapper.dtoToEntity(+idUsuario,+idLibro,createReviewDto);
    await this.resenaRepository.save(resena)

    return createReviewDto;
  }

  async findResenasUsuario(idUsuario: number): Promise<Resena[]> {

    let existeUsuario: boolean = await this.usuarioRepository.existsBy({
      id: +idUsuario
    });
    if(!existeUsuario){
      throw new BadRequestException('No existe el usuario con el id ingresado.')
    }

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


  async findResenasLibro(idLibro: number): Promise<Resena[]> {

    let existeLibro: boolean = await this.libroRepository.existsBy({
      id: +idLibro
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
          nombre: true,
          segundo_nombre: true,
          apellido_paterno: true,
          apellido_materno: true,
        }
      },
      where: {
        id_libro: +idLibro
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
