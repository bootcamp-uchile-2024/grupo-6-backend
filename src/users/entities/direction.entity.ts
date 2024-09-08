import { ApiProperty } from "@nestjs/swagger";
import { TipoDireccion } from "./tipoDireccion.entity";

export class Directions {
    public idDireccion: number;
    public calle: string;
    public numeroCalle: string;
    public numeroDepartamento: string;
    public comuna: string;
    public ciudad: string;
    public region: string;
    // @ApiProperty({example: TipoDireccion.ENVIO, description: 'Tipo de direccion, puede ser Envio o Facturacion.', enum: TipoDireccion})
    public tipoDireccion: TipoDireccion[];
    public informacionAdicional: string;
    constructor(
        idDireccion: number,
        calle: string,
        numeroCalle: string,
        numeroDepartamento: string,
        comuna: string,
        ciudad: string,
        region: string,
        tipoDireccion: TipoDireccion[],
        informacionAdicional: string,
      ) {
        this.idDireccion = idDireccion
        this.calle = calle
        this.numeroCalle = numeroCalle
        this.numeroDepartamento = numeroDepartamento
        this.comuna = comuna
        this.ciudad = ciudad
        this.region = region
        this.tipoDireccion = tipoDireccion
        this.informacionAdicional = informacionAdicional
      }

}