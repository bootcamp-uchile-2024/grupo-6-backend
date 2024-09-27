import { TipoDireccion } from './tipoDireccion.entity';
export declare class Address {
    idDireccion: number;
    calle: string;
    numeroCalle: string;
    numeroDepartamento: string;
    comuna: string;
    ciudad: string;
    region: string;
    tipoDireccion: TipoDireccion[];
    informacionAdicional: string;
    constructor(idDireccion: number, calle: string, numeroCalle: string, numeroDepartamento: string, comuna: string, ciudad: string, region: string, tipoDireccion: TipoDireccion[], informacionAdicional: string);
}
