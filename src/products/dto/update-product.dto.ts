import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, Contains, IsBoolean, IsEnum, IsInt, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { GeneroEnum } from '../entities/generoEnum';
import { CreateProductDto } from './create-product.dto';
import { Idioma } from '../entities/idioma';
import { EncuadernacionEnum } from '../entities/encuadernacionEnum';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @ApiProperty({ description: 'Nombre del libro', type: String, example: 'Don Quijote de la Mancha' })
    @IsString()
    @IsOptional()
    public nombre?: string;

    @ApiProperty({
        description: 'Autor del libro',
        type: String,
        example: 'Jane Austen',
    })
    @IsOptional()
    public autor?: string;

    @ApiProperty({ 
        description: 'Número de libros en stock',
        minimum: 1,
        type: Number,
        example: 50, 
    })
    @Min(1)
    @IsOptional()
    public stockLibro?: number;

    @ApiProperty({
        description: 'Precio del libro (sin descuento)',
        type: Number,
        minimum: 1,
        maximum: 10000000,
        example: 19000, 
    })
    @IsInt()
    @Min(1)
    @Max(10000000)
    @IsOptional()
    public precio?: number;

    @ApiProperty({
        description: 'Rating del libro',
        type: Number,
        minimum: 0,
        maximum: 5,
        example: 4, 
    })
    @IsInt()
    @Min(0)
    @Max(5)
    @IsOptional()
    public rating?: number;

    @ApiProperty({ description: 'Nombre de la editorial del libro', type: String, example: 'Alfaguara', })
    @IsOptional()
    public editorial?: string;

    @ApiProperty({
        description: 'Idioma del libro',
        enum: [
          'Español',
          'Inglés',
        ],
        example: Idioma.ESPANOL,
      })
    @IsOptional()
    @IsEnum(Idioma)
    public idioma?: Idioma;

    @ApiProperty({
        example: EncuadernacionEnum.TAPA_DURA,
        description: 'Tipo de encuadernación del libro',
        enum: [
          'Tapa Dura',
          'Tapa Blanda',
          'Edición de Bolsillo',
          'Edición de Lujo',
          'Digital',
          'Audiolibro',
          'Impresión Bajo Demanda',
          'Coleccionista',
          'Edición Limitada',
          'Rústica',
          'Libreta de Apuntes',
          'Manual',
          'Guía de Viaje',
          'Cómic',
          'Manga',
          'Folleto',
          'Calendario',
          'Póster',
          'Plegable',
          'Tarjeta',
        ],
      })
    @IsOptional()
    public encuadernacion?: EncuadernacionEnum;

    @ApiProperty({ description: 'Año de publicación del libro', type: 'number', example: 2001})
    @IsNumber()
    @IsOptional()
    public agnoPublicacion?: number;

    @ApiProperty({ 
        description: 'Número de páginas del libro',
        type: Number,
        minimum: 1,
        maximum: 10000,
        example: 150, 
    })
    @IsInt()
    @Min(1)
    @Max(10000)
    @IsOptional()
    public numeroPaginas?: number;

    @ApiProperty({ 
        description: 'Descuento aplicado al producto de 0 a 100',
        type: Number,
        default: 0,
        minimum: 0,
        maximum: 100,
        example: 50
    })
    @Min(0)
    @Max(100)
    @IsOptional()
    public descuento?: number;

    @ApiProperty({ description: 'Ruta de la carátula del libro', type: String, example: './images/portada.png' })
    @IsString()
    @IsOptional()
    public caratula?: string;

    @ApiProperty({
        description: 'Dimensiones del libro en formato "Ancho x Alto cm"',
        example: '15 x 25cm',
        type: String,
    })
    @IsString()
    @Contains('x')
    @IsOptional()
    public dimensiones?: string;

    @ApiProperty({
        description: 'Código de barra del libro en formato EAN-13',
        example: '9788420412146',
        type: String,
    })
    @IsString()
    @IsOptional()
    public codigoBarra?: string;

    @ApiProperty({
        description: 'Resumen del libro',
        type: String,
        example:
            'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano (...)',
    })
    @IsString()
    @IsOptional()
    public resumen?: string;

    @ApiProperty({
        description: 'Lista con el o los géneros del libro',
        enum: [
            'Ciencia Ficción',
            'Romance',
            'Fantasía',
            'Histórico',
            'Aventura',
            'Suspenso',
            'Terror',
            'Policiaco',
            'Drama',
            'Comedia',
            'Autoayuda',
            'Biografía',
            'Ensayo',
            'Educativo',
            'Infantil',
            'Juvenil',
            'Paranormal',
            'Religión y Mitología',
            'Política',
            'Filosofía',
            'Novelas',
            'Fotografía',
            'Cuentos',
            'Ilustración',
            'Diseño',
            'Biografías',
            'Deporte',
            'Motocicletas',
            'Arquitectura',
            'Literatura clásica',
          ],
        isArray: true,
        example: [GeneroEnum.ROMANCE, GeneroEnum.EDUCATIVO],
      })
      @ArrayNotEmpty()
      @IsOptional()
      public genero: GeneroEnum[];

    @ApiProperty({ description: 'Indicador de si el producto es destacado o no', type: Boolean, example: true })
    @IsBoolean()
    @IsOptional()
    public destacado?: boolean;

    @ApiProperty({ description: 'Indicador de si el producto esta habilitado o no', type: Boolean, example: true })
    @IsBoolean()
    @IsOptional()
    public habilitado?: boolean;
}
