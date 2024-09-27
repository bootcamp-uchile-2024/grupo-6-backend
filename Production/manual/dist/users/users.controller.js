"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./entities/user.entity");
const address_entity_1 = require("./entities/address.entity");
const clientType_entity_1 = require("./entities/clientType.entity");
const clientState_entity_1 = require("./entities/clientState.entity");
const tipoDireccion_entity_1 = require("./entities/tipoDireccion.entity");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserDto) {
        try {
            const usuario = this.usersService.create(createUserDto);
            return usuario;
        }
        catch (error) {
            throw new common_1.HttpException('Ya existe usuario con el correo electronico ingresado.', 400);
        }
    }
    createAddress(idUsuario, calle, numeroCalle, comuna, ciudad, region, tipoDireccion, numeroDepartamento, informacionAdicional) {
        const createAddress = this.usersService.createAddress(idUsuario, calle, numeroCalle, comuna, ciudad, region, tipoDireccion, numeroDepartamento, informacionAdicional);
        return createAddress;
    }
    findOne(id) {
        try {
            const usuario = this.usersService.findOne(id);
            return usuario;
        }
        catch (error) {
            throw new common_1.HttpException('No existe usuario con el id ingresado.', 404);
        }
    }
    update(id, nombres, apellidoPaterno, apellidoMaterno, correoElectronico, contrasena, tipoCliente, estado) {
        try {
            const updateUsuario = this.usersService.update(id, nombres, apellidoPaterno, apellidoMaterno, correoElectronico, contrasena, tipoCliente, estado);
            return updateUsuario;
        }
        catch (error) {
            throw new common_1.HttpException('No existe usuario con el id ingresado.', 404);
        }
    }
    updateAddress(idUsuario, idDireccion, calle, numeroCalle, numeroDepartamento, comuna, ciudad, region, tipoDireccion, informacionAdicional) {
        const updateAddress = this.usersService.updateAddress(idUsuario, idDireccion, calle, numeroCalle, numeroDepartamento, comuna, ciudad, region, tipoDireccion, informacionAdicional);
        return updateAddress;
    }
    remove(id) {
        try {
            const usuario = this.usersService.remove(id);
        }
        catch (error) {
            throw new common_1.HttpException('No existe usuario con el id ingresado.', 404);
        }
    }
    removeAdress(idUsuario, idDireccion) {
        const usuario = this.usersService.removeAddress(idUsuario, idDireccion);
        return usuario;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Este codigo se debe a que se pudo crear correctamente el usuario.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Este codigo se debe a que ya existe un usuario con el correo electronico ingresado.',
    }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", create_user_dto_1.CreateUserDto)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Este codigo se debe a que se pudo crear la direccion del usuario de manera exitosa.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Este codigo se debe a que no existe un usuario con el id ingresado.',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'calle',
        description: 'Nombre de la calle. (debe contener un formato de string correcto).',
        required: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'numeroCalle',
        description: 'Numero de la calle (debe contener un formato de string correcto).',
        required: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'numeroDepartamento',
        description: 'Numero del departamento (debe contener formato de string  correcto).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'comuna',
        description: 'Comuna a la que vive el usuario (debe contener formato de string correcto).',
        required: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'ciudad',
        description: 'Ciudad a la que vive el usuario (debe contener formato de string correcto).',
        required: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'region',
        description: 'Region a la que vive el usuario (debe contener formato de string correcto).',
        required: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'tipoDireccion',
        description: "Tipo de direccion, puede ser 'Envio' o 'Facturacion'.",
        required: true,
        enum: tipoDireccion_entity_1.TipoDireccion,
        isArray: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'informacionAdicional',
        description: 'Informacion adicional de la direccion del usuario, como por ejemplo referencias para llegar a la direccion.',
        required: false,
    }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)(':idUsuario/address'),
    __param(0, (0, common_1.Param)('idUsuario', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(1, (0, common_1.Query)('calle')),
    __param(2, (0, common_1.Query)('numeroCalle')),
    __param(3, (0, common_1.Query)('comuna')),
    __param(4, (0, common_1.Query)('ciudad')),
    __param(5, (0, common_1.Query)('region')),
    __param(6, (0, common_1.Query)('tipoDireccion', new common_1.ParseArrayPipe({ items: String, separator: ',', optional: true }))),
    __param(7, (0, common_1.Query)('numeroDepartamento')),
    __param(8, (0, common_1.Query)('informacionAdicional')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, Object, String, String]),
    __metadata("design:returntype", address_entity_1.Address)
], UsersController.prototype, "createAddress", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Este codigo se debe a que se pudo encontrar el usuario de manera exitosa.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Este codigo se debe a que no existe un usuario con el id ingresado.',
    }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", user_entity_1.User)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Este codigo se debe a que se pudo modificar el usuario de manera exitosa.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Este codigo se debe a que no existe un usuario con el id ingresado.',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'nombres',
        description: 'Primer y segundo nombre del usuario (debe contener un formato de string correcto).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'apellidoPaterno',
        description: 'Apellido paterno del usuario (debe contener un formato de string correcto).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'apellidoMaterno',
        description: 'Apellido materno del usuario (debe contener un formato de string correcto).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'correoElectronico',
        description: 'Correo electronico del usuario (debe ser un correo con formato válido).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'contrasena',
        description: 'Contrasena del usuario.',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'tipoCliente',
        description: 'Tipo de usuario, puede ser Premium o Estandar.',
        required: false,
        enum: clientType_entity_1.ClientType,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'estado',
        description: 'Estado del usuario, puede ser Activo o Baneado.',
        required: false,
        enum: clientState_entity_1.ClientState,
    }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(1, (0, common_1.Query)('nombres')),
    __param(2, (0, common_1.Query)('apellidoPaterno')),
    __param(3, (0, common_1.Query)('apellidoMaterno')),
    __param(4, (0, common_1.Query)('correoElectronico')),
    __param(5, (0, common_1.Query)('contrasena')),
    __param(6, (0, common_1.Query)('tipoCliente')),
    __param(7, (0, common_1.Query)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String]),
    __metadata("design:returntype", create_user_dto_1.CreateUserDto)
], UsersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Este codigo se debe a que se pudo modificar la direccion del usuario de manera exitosa.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Este codigo se debe a que no existe un usuario con el id ingresado, o no existe el id de la direccion ingresada.',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'calle',
        description: 'Nombre de la calle. (debe contener un formato de string correcto).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'numeroCalle',
        description: 'Numero de la calle (debe contener un formato de string correcto).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'numeroDepartamento',
        description: 'Numero del departamento (debe contener formato de string  correcto).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'comuna',
        description: 'Comuna a la que vive el usuario (debe contener formato de string correcto).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'ciudad',
        description: 'Ciudad a la que vive el usuario (debe contener formato de string correcto).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'region',
        description: 'Region a la que vive el usuario (debe contener formato de string correcto).',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'tipoDireccion',
        description: "Tipo de direccion, puede ser 'Envio' o 'Facturacion'.",
        required: false,
        enum: tipoDireccion_entity_1.TipoDireccion,
        isArray: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'informacionAdicional',
        description: 'Informacion adicional de la direccion del usuario, como por ejemplo referencias para llegar a la direccion.',
        required: false,
    }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)(':idUsuario/address/:idDireccion'),
    __param(0, (0, common_1.Param)('idUsuario', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(1, (0, common_1.Param)('idDireccion', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(2, (0, common_1.Query)('calle')),
    __param(3, (0, common_1.Query)('numeroCalle')),
    __param(4, (0, common_1.Query)('numeroDepartamento')),
    __param(5, (0, common_1.Query)('comuna')),
    __param(6, (0, common_1.Query)('ciudad')),
    __param(7, (0, common_1.Query)('region')),
    __param(8, (0, common_1.Query)('tipoDireccion', new common_1.ParseArrayPipe({ items: String, separator: ',', optional: true }))),
    __param(9, (0, common_1.Query)('informacionAdicional')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, String, String, String, String, Object, String]),
    __metadata("design:returntype", address_entity_1.Address)
], UsersController.prototype, "updateAddress", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Este codigo se debe a que se pudo eliminar el usuario de manera exitosa.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Este codigo se debe a que no existe un usuario con el id ingresado.',
    }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Este codigo se debe a que se pudo eliminar el usuario de manera exitosa.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Este codigo se debe a que no existe un usuario con el id ingresado o no existe el id del correo electronico ingresado.',
    }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Delete)(':idUsuario/address/:idDireccion'),
    __param(0, (0, common_1.Param)('idUsuario', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(1, (0, common_1.Param)('idDireccion', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeAdress", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map