import { Body, Controller, Get, Param, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Resena } from 'src/orm/entity/resena';
import { RolesAutorizados } from 'src/seguridad/decorator/rol.decorator';
import { JwtGuard } from 'src/seguridad/guard/jwt.guard';
import { ValidarRolGuard } from 'src/seguridad/guard/validar-rol.guard';
import { Rol } from 'src/users/enum/rol.enum';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @ApiOperation({ summary: 'Crear resena por un usuario.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que el usuario pudo crear correctamente la resena.', type: CreateReviewDto,
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que el ISBN ingresado no existe.',
  })
  @ApiTags('reviews')
  @UsePipes( new ValidationPipe())
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER)
  @Post(':isbnLibro')
  async createResena(
    @Param('isbnLibro') isbn_libro: string,
    @Body() createReviewDto: CreateReviewDto,
    @Req() request): Promise<CreateReviewDto> {
    const datosUsuario = request.datosUsuario;
    return await this.reviewsService.createResena(+datosUsuario.idUsuario, isbn_libro, createReviewDto)
  }

  @ApiOperation({ summary: 'Buscar todas las resenas de un usuario.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo encontrar todas las resenas correctamente.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que el usuario no tiene ninguna resena creada.',
  })
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER)
  @ApiTags('reviews')
  @Get('/user')
  async findResenasUsuario(
    @Req() request
  ): Promise<Resena[]> {
    const datosUsuario = request.datosUsuario;
    return this.reviewsService.findResenasUsuario(+datosUsuario.idUsuario);
  }

  @ApiOperation({ summary: 'Buscar todas las resenas de un libro.'})
  @ApiResponse({
    status: 200,
    description:
      'Este codigo se debe a que se pudo encontrar todas las resenas correctamente.',
  })
  @ApiResponse({
    status: 404,
    description:
      'Este codigo se debe a que el libro no tiene ninguna resena creada.',
  })
  @ApiTags('reviews')
  @Get('product/:isbn')
  async findResenasLibro(@Param('isbn') isbn_libro: string): Promise<Resena[]> {
    return this.reviewsService.findResenasLibro(isbn_libro);
  }

}
