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
const autor_1 = require("./entity/autor");
const direccion_1 = require("./entity/direccion");
const editorial_1 = require("./entity/editorial");
const encuadernacion_1 = require("./entity/encuadernacion");
const genero_1 = require("./entity/genero");
const historial_compra_1 = require("./entity/historial_compra");
const idioma_libro_1 = require("./entity/idioma_libro");
const libro_1 = require("./entity/libro");
const libro_compra_1 = require("./entity/libro_compra");
const resena_1 = require("./entity/resena");
const tipoDireccion_1 = require("./entity/tipoDireccion");
const usuario_1 = require("./entity/usuario");
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
                database: 'Paginas_Selectas',
                entities: [
                    usuario_1.Usuario,
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
                    libro_compra_1.LibroCompra
                ]
            }),
            OrmModule,
        ],
    })
], OrmModule);
//# sourceMappingURL=orm.module.js.map