import { Region } from "./region";
import { Comuna } from "./comuna";
export declare class Ciudad {
    id: number;
    nombre: string;
    id_region: number;
    region: Region;
    comuna: Comuna[];
}
