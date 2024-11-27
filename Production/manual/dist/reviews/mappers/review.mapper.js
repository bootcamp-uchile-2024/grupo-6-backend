"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResenaMapper = void 0;
const resena_1 = require("../../orm/entity/resena");
class ResenaMapper {
    static dtoToEntity(idUsuario, idLibro, dto) {
        const entidad = new resena_1.Resena();
        entidad.id_usuario = idUsuario;
        entidad.id_libro = idLibro;
        entidad.comentario = dto.comentario;
        entidad.rating = dto.rating;
        entidad.fecha = new Date();
        return entidad;
    }
}
exports.ResenaMapper = ResenaMapper;
//# sourceMappingURL=review.mapper.js.map