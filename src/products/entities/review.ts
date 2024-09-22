import { IsDate, IsNumber, IsString, Max, Min } from "class-validator";

export class Review {
  @IsNumber()
  public idResena: number;

  @IsString()
  public nombreUsuario: string;

  @IsString()
  public textoResena: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  public rating: number;

  @IsDate()
  public fecha: Date;
}
