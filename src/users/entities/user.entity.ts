import { ApiProperty } from "@nestjs/swagger";
import { ClientType } from "./clientType.entity";
import { ClientState } from "./clientState.entity";
import { Address } from "./address.entity";


export class User {
    @ApiProperty()
    public idUsuario: number;
    @ApiProperty()
    public nombres: string;
    @ApiProperty()
    public apellidoPaterno: string;
    @ApiProperty()
    public apellidoMaterno: string;
    @ApiProperty()
    public correoElectronico: string;
    @ApiProperty()
    public contrasena: string;
    @ApiProperty()
    public direccion: Address[];
    // @ApiProperty()
    // public historialPedidos: Pedidos;
    @ApiProperty()
    public tipoCliente: ClientType;
    @ApiProperty()
    public estado: ClientState;
    constructor(
        idUsuario: number,
        nombres: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        correoElectronico: string,
        contrasena: string,
        direccion: Address[],
        tipoCliente: ClientType,
        estado: ClientState,
      ) {
        this.idUsuario = idUsuario;
        this.nombres = nombres;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.correoElectronico = correoElectronico;
        this.contrasena = contrasena;
        this.direccion = direccion;
        this.tipoCliente = tipoCliente;
        this.estado = estado;
      }
}