import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, Contains, IsArray, IsDate, IsEnum, IsInt, IsOptional, IsString, Max, MaxDate, Min } from 'class-validator';
import { Encuadernacion } from '../entities/encuadernacion';
import { GeneroEnum } from '../entities/generoEnum';
import { Idioma } from '../entities/idioma';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    // @ApiProperty({ description: 'ISBN 13 del libro', type: String, example: '9788420412146', })
    // @IsString()
    // @IsOptional()
    // public isbn?: string;

    @ApiProperty({ description: 'Nombre del libro', type: String, example: 'Don Quijote de la Mancha' })
    @IsString()
    @IsOptional()
    public nombre?: string;

    // @ApiProperty({
    //     description: 'Array con los nombres de los autores del libro',
    //     type: [String],
    //     example: ['Miguel de Cervantes'],
    //     isArray: true,
    // })
    // @IsArray()
    // @IsOptional()
    // public autor?: string[];

    @ApiProperty({ 
        description: 'Número de libros en stock',
        minimum: 1,
        type: Number,
        example: 50, 
    })
    @Min(1)
    @IsOptional()
    public stock_libro?: number;

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

    @ApiProperty({ description: 'ID de la editorial del libro', type: Number, example: '1', })
    @IsInt()
    @IsOptional()
    public id_editorial?: number;

    @ApiProperty({ description: 'ID del idioma del libro', type: Number, example: '1', })
    @IsInt()
    @IsOptional()
    public id_idioma?: number;

    @ApiProperty({ description: 'ID de la encuadernación del libro', type: Number, example: '1', })
    @IsInt()
    @IsOptional()
    public id_encuadernacion?: number;

    @ApiProperty({
        description: 'Año de publicación del libro',
        type: Date,
        example: new Date(2015, 0),
        })
    @IsDate()
    @Type(() => Date)
    @MaxDate( () => new Date(), {
        message: () =>
            `No se puede ingresar una fecha mayor al día de hoy: ${new Date().toDateString()})`
        })
    @IsOptional()
    public agno_publicacion?: Date;

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
    public numero_paginas?: number;

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
        description: 'Dimensiones del libro en formato "Ancho cm x Alto cm"',
        example: '15cm x 25cm',
        type: String,
    })
    @IsString()
    @Contains('x')
    @IsOptional()
    public dimensiones?: string;

    @ApiProperty({
        description: 'Código de barra del libro en formato EAN-13',
        example: '978-8-42-041214-6',
        type: String,
    })
    @IsString()
    @IsOptional()
    public codigo_barra?: string;

    @ApiProperty({
        description: 'Resumen del libro',
        type: String,
        example:
            'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano (...)',
    })
    @IsString()
    @IsOptional()
    public resumen?: string;
}

