"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEquipoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_equipo_dto_1 = require("./create-equipo.dto");
class UpdateEquipoDto extends (0, mapped_types_1.PartialType)(create_equipo_dto_1.CreateEquipoDto) {
}
exports.UpdateEquipoDto = UpdateEquipoDto;
//# sourceMappingURL=update-equipo.dto.js.map