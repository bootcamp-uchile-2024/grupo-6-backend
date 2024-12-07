import { ApiProperty } from "@nestjs/swagger";
import { GetUserDto } from "./get-user.dto";

export class GetAllUsersDto<T> {

    @ApiProperty({
        example: 12,
        description:
        'Cantidad de usuarios existentes.',
    })
    totalUsuarios: number;

    @ApiProperty({
        example: 4,
        description:
        'Cantidad total de paginas.',
    })
    totalPaginas: number;

    @ApiProperty({
        example: 1,
        description:
        'Numero de pagina.',
    })
    nroPagina: number;

    @ApiProperty({
        example: 3,
        description:
        'Cantidad de usuarios a mostrar por pagina.',
    })
    cantidadPorPagina: number;

    @ApiProperty ({
        description: 'Lista total de clientes que han creado una cuenta en la pagina.',
        type: [GetUserDto],
        example: [
            new GetUserDto(
            1,
            "Juan Carlos",
            "Pérez",
            "González",
            "juan.perez@gmail.com"
            ),
            new GetUserDto(
            2,
            "María Elena",
            "Soto",
            "Lopez",
            "maria.soto@gmail.com"
            ),
            new GetUserDto(
            3,
            "Pedro",
            "Ramírez",
            "Martínez",
            "pedro.ramirez@gmail.com"
            )
        ]
    })
    usuarios: GetUserDto[]
  
  }