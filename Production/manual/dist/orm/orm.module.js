"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_1 = require("./entity/usuario");
const region_1 = require("./entity/region");
const ciudad_1 = require("./entity/ciudad");
const comuna_1 = require("./entity/comuna");
const direccion_1 = require("./entity/direccion");
const tipoDireccion_1 = require("./entity/tipoDireccion");
const genero_1 = require("./entity/genero");
const autor_1 = require("./entity/autor");
const idioma_libro_1 = require("./entity/idioma_libro");
const encuadernacion_1 = require("./entity/encuadernacion");
const editorial_1 = require("./entity/editorial");
const libro_1 = require("./entity/libro");
const resena_1 = require("./entity/resena");
const historial_compra_1 = require("./entity/historial_compra");
const libro_compra_1 = require("./entity/libro_compra");
const carrito_1 = require("./entity/carrito");
let OrmModule = class OrmModule {
};
exports.OrmModule = OrmModule;
exports.OrmModule = OrmModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'mysql',
                port: 3306,
                username: 'root',
                password: 'grupo-6',
                database: 'paginas_selectas',
                entities: [
                    usuario_1.Usuario,
                    region_1.Region,
                    ciudad_1.Ciudad,
                    comuna_1.Comuna,
                    direccion_1.Direccion,
                    tipoDireccion_1.TipoDireccion,
                    genero_1.Genero,
                    autor_1.Autor,
                    idioma_libro_1.IdiomaLibro,
                    encuadernacion_1.Encuadernacion,
                    editorial_1.Editorial,
                    libro_1.Libro,
                    resena_1.Resena,
                    historial_compra_1.HistorialCompra,
                    libro_compra_1.LibroCompra,
                    carrito_1.Carrito
                ]
            }),
            OrmModule,
        ],
    })
], OrmModule);
//# sourceMappingURL=orm.module.js.map