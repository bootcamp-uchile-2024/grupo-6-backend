import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Resena } from 'src/orm/entity/resena';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewsService } from './reviews.service';
import { ValidacionExisteUsuarioPipe } from './pipe/validacion-existe-usuario-pipe';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @ApiTags('reviews')
  @ApiQuery({
    name: 'idUsuario',
    description: 'ID del usuario que va a escribir la resena.',
    required: true,
  })
  @ApiQuery({
    name: 'idLibro',
    description: 'ID del libro al cual se le va a realizar la resena',
    required: true,
  })
  @UsePipes( new ValidationPipe())
  @Post()
  async createResena(
    // @Query('idUsuario', new ParseIntPipe({ errorHttpStatusCode: 400}), ValidacionExisteUsuarioPipe) idUsuario: number,
    @Query('idUsuario', new ParseIntPipe({ errorHttpStatusCode: 400})) idUsuario: number,
    @Query('isbnLibro') isbn_libro: string,
    @Body() createReviewDto: CreateReviewDto): Promise<CreateReviewDto> {
    return await this.reviewsService.createResena(idUsuario, isbn_libro, createReviewDto)
  }

  @ApiTags('reviews')
  @Get('/user/:id')
  async findResenasUsuario(@Param('id') idUsuario: number): Promise<Resena[]> {
    return this.reviewsService.findResenasUsuario(idUsuario);
  }

  @ApiTags('reviews')
  @Get('product/:isbn')
  async findResenasLibro(@Param('isbn') isbn_libro: string): Promise<Resena[]> {
    return this.reviewsService.findResenasLibro(isbn_libro);
  }

}
