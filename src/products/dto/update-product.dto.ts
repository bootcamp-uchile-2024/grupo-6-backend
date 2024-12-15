import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, Contains, IsBoolean, IsInt, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { GeneroEnum } from '../entities/generoEnum';
import { CreateProductDto } from './create-product.dto';

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
        minimum: 1,
        maximum: 5,
        example: 4, 
    })
    @IsInt()
    @Min(1)
    @Max(5)
    @IsOptional()
    public rating?: number;

    @ApiProperty({ description: 'Nombre de la editorial del libro', type: String, example: 'Alfaguara', })
    @IsOptional()
    public editorial?: string;

    @ApiProperty({ description: 'ID del idioma del libro', type: Number, example: '1', })
    @IsInt()
    @IsOptional()
    public id_idioma?: number;

    @ApiProperty({ description: 'ID de la encuadernación del libro', type: Number, example: '1', })
    @IsInt()
    @IsOptional()
    public id_encuadernacion?: number;

    @ApiProperty({ description: 'Año de publicación del libro', type: 'number', example: 2001})
    @IsNumber()
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
      public genero: GeneroEnum[];

    @ApiProperty({ description: 'Indicador de si el producto es destacado o no', type: Boolean, example: true })
    @IsBoolean()
    public destacado?: boolean;

    @ApiProperty({ description: 'Indicador de si el producto esta habilitado o no', type: Boolean, example: true })
    @IsBoolean()
    public habilitado?: boolean;
}
