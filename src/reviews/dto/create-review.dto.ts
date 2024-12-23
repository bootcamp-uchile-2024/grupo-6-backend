import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateReviewDto {
    @ApiProperty({
    example: 'Muy buen libro!',
    description:
        'Comentario que un usuario asigna a un libro especifico.'
    })
    @IsOptional()
    @IsString({ message: 'Introducir un formato de comentario tipo string correcto.' })
    @MaxLength(1000,{message: "El comentario ingresado necesita contener menos de 1000 caracteres."})
    public comentario?: string;

    @ApiProperty({
    example: 4,
    description:
        'Rating que un usuario asigna a un libro especifico, minimo 1 y maximo 5.',
    })
    @IsNumber()
    @Min(1)
    @Max(5)
    @IsNotEmpty({message: 'Favor introducir un valor.'})
    public rating: number;
}
    