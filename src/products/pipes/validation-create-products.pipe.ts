import { ArgumentMetadata, BadRequestException, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Autor } from "src/orm/entity/autor";
import { Editorial } from "src/orm/entity/editorial";
import { Encuadernacion } from "src/orm/entity/encuadernacion";
import { Genero } from "src/orm/entity/genero";
import { IdiomaLibro } from "src/orm/entity/idioma_libro";
import { Libro } from "src/orm/entity/libro";
import { Repository } from "typeorm";

export class ValidationCreateProductsPipe implements PipeTransform {

    constructor(
        @InjectRepository(Libro)
        private readonly libroRepository: Repository<Libro>,

        @InjectRepository(IdiomaLibro)
        private readonly idiomaRepository: Repository<IdiomaLibro>,

        @InjectRepository(Encuadernacion)
        private readonly encuadernacionRepository: Repository<Encuadernacion>,

        @InjectRepository(Editorial)
        private readonly editorialRepository: Repository<Editorial>,

        @InjectRepository(Genero)
        private readonly generoRepository: Repository<Genero>,

        @InjectRepository(Autor)
        private readonly autorRepository: Repository<Autor>,
    ){}

    async transform(value: any, metadata: ArgumentMetadata) {
        if (metadata.type === 'body'){

            // Revisar que no exista otro libro con igual ISBN
            const existeProductoISBN = await this.libroRepository.existsBy({
                isbn: value.isbn,
            })
            if (existeProductoISBN){
                throw new BadRequestException(`Ya existe un libro con ISBN: ${value.isbn}`)
            }
            // Revisar que no exista otro libro con igual codigo de barra
            const existeProductoEAN = await this.libroRepository.existsBy({
                codigo_barra: value.ean,
            })
            if (existeProductoEAN){
                throw new BadRequestException(`Ya existe un libro con código de barra: ${value.ean}`)
            }
            // Revisar existencia idioma y obtener ID
            const idiomaEntity: IdiomaLibro = await this.idiomaRepository.findOneBy({
                descripcion: value.idioma,
            });
            if (!idiomaEntity){
                throw new NotFoundException(`No existe el idioma: ${value.idioma}`);
            }
            value.id_idioma = idiomaEntity.id;

            // Revisar existencia encuadernacion y obtener ID
            const encuadernacionEntity: Encuadernacion = await this.encuadernacionRepository.findOneBy({
              descripcion: value.encuadernacion,
            })
            if (!encuadernacionEntity){
                throw new NotFoundException(`No existe la encuadernación: ${value.encuadernacion}`);
            }
            value.id_encuadernacion = encuadernacionEntity.id;

            // Revisar existencia editorial
            const editorialEntity: Editorial = await this.editorialRepository.findOneBy({
                descripcion: value.editorial,
            })
            
            if (editorialEntity){
                value.id_editorial = editorialEntity.id;
            } else {
                value.id_editorial = false;
            };

            // Revisar existencia de generos
            const id_generos: number[] = [];

            for (const g of value.genero){
                const generoEntity: Genero = await this.generoRepository.findOneBy({
                    descripcion: g
                })

                if (!generoEntity){
                    throw new NotFoundException(`No existe un genero: ${g}`);
                } else {
                    id_generos.push(generoEntity.id)
                }
            }
            value.id_generos = id_generos;
            
            // Revisar existencia de autores
            const id_autores = [];

            for (const autor of value.autor){
                const autorEntity: Autor = await this.autorRepository.findOneBy({
                    nombre: autor
                })

                if (autorEntity){
                    id_autores.push(autorEntity.id);
                } else {
                    id_autores.push(false);
                };
            }
            value.id_autores = id_autores;

        } else if (metadata.type == 'custom'){
            // Revisar que no exista el mismo archivo
            const existeArchivo = await this.libroRepository.existsBy({
                caratula: value.originalname,
            });
            if (existeArchivo){
                throw new BadRequestException(`Ya existe caratula con este nombre "${value.originalname}"`);
            }
        }


        return value;
    }
}