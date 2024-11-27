import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';
import { Area } from './entities/area';
import { Ecommerce } from './entities/ecommerce';
export declare class EquipoService {
    private equipo;
    private ecommerce;
    create(createEquipoDto: CreateEquipoDto): string;
    getEquipo(): Equipo;
    getAreas(): Area[];
    getEcommerceInfo(): Ecommerce;
    findArea(area: string): Area;
    findOne(id: number): string;
    update(id: number, updateEquipoDto: UpdateEquipoDto): string;
    remove(id: number): string;
}
