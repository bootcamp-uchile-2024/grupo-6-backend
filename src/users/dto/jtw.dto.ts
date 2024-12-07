import { ApiProperty } from "@nestjs/swagger";

export class JwtDto {

  @ApiProperty({ example: '12.345.678-9', description: 'Token JWT' })
  token: string;

}