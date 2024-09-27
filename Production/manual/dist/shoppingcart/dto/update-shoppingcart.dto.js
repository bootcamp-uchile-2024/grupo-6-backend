"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShoppingcartDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_shoppingcart_dto_1 = require("./create-shoppingcart.dto");
class UpdateShoppingcartDto extends (0, mapped_types_1.PartialType)(create_shoppingcart_dto_1.CreateShoppingcartDto) {
}
exports.UpdateShoppingcartDto = UpdateShoppingcartDto;
//# sourceMappingURL=update-shoppingcart.dto.js.map