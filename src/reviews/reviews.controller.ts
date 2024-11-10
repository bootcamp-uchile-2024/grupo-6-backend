import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ValidationPipe, UsePipes, ParseIntPipe } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

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
    name: 'isbnLibro',
    description: 'ISBN del libro al cual se le va a realizar la resena',
    required: true,
  })
  @UsePipes( new ValidationPipe())
  @Post()
  async createResena(
    @Query('idUsuario', new ParseIntPipe({ errorHttpStatusCode: 400})) idUsuario: number,
    // @Query('isbnLibro') isbnLibro: string,
    @Query('idLibro') idLibro: number,
    @Body() createReviewDto: CreateReviewDto): Promise<CreateReviewDto> {
    return await this.reviewsService.createResena(idUsuario,idLibro,createReviewDto)
    // return await this.reviewsService.createResena(idUsuario,isbnLibro,createReviewDto)
  }

  // @Get()
  // findAll() {
  //   return this.reviewsService.findAll();
  // }

}
