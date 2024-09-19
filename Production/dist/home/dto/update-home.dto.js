"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHomeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_home_dto_1 = require("./create-home.dto");
class UpdateHomeDto extends (0, mapped_types_1.PartialType)(create_home_dto_1.CreateHomeDto) {
}
exports.UpdateHomeDto = UpdateHomeDto;
//# sourceMappingURL=update-home.dto.js.map