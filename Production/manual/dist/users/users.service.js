"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const tipoDireccion_entity_1 = require("./entities/tipoDireccion.entity");
const clientType_entity_1 = require("./entities/clientType.entity");
const clientState_entity_1 = require("./entities/clientState.entity");
const address_entity_1 = require("./entities/address.entity");
const console_1 = require("console");
const class_validator_1 = require("class-validator");
let UsersService = class UsersService {
    constructor() {
        this.usuarios = [
            new user_entity_1.User(1, 'Cristobal Andres', 'Sanchez', 'Ossandon', 'c.sanch.oss@gmail.com', 'qwerty', [
                new address_entity_1.Address(1, 'El condor', '125', 'N/A', 'Nunoa', 'Santiago', 'Region Metropolitana', [tipoDireccion_entity_1.TipoDireccion.ENVIO, tipoDireccion_entity_1.TipoDireccion.FACTURACION], 'CASA'),
            ], clientType_entity_1.ClientType.PREMIUM, clientState_entity_1.ClientState.ACTIVO),
            new user_entity_1.User(2, 'Daniel Antonio', 'Fernandez', 'Correa', 'd.fernandez.correa@gmail.com', '12345', [
                new address_entity_1.Address(1, 'San Marcos', '27', 'N/A', 'Penalolen', 'Santiago', 'Region Metropolitana', [tipoDireccion_entity_1.TipoDireccion.ENVIO, tipoDireccion_entity_1.TipoDireccion.FACTURACION], 'CASA'),
            ], clientType_entity_1.ClientType.ESTANDAR, clientState_entity_1.ClientState.ACTIVO),
        ];
    }
    createSHA256Hash(inputString) {
        const crypto = require('crypto');
        const hash = crypto.createHash('sha256');
        hash.update(inputString);
        return hash.digest('hex');
    }
    create(createUserDto) {
        const existeUsuario = this.usuarios.findIndex((element) => element.correoElectronico == createUserDto.correoElectronico);
        if (existeUsuario != -1) {
            throw new console_1.error();
        }
        const usuario = new user_entity_1.User(this.usuarios.length + 1, createUserDto.nombres, createUserDto.apellidoPaterno, createUserDto.apellidoMaterno, createUserDto.correoElectronico, this.createSHA256Hash(createUserDto.contrasena), [], createUserDto.tipoCliente, createUserDto.estado);
        this.usuarios.push(usuario);
        return usuario;
    }
    findOne(id) {
        const usuario = this.usuarios.find((element) => element.idUsuario == id);
        if (!usuario) {
            throw new Error();
        }
        return usuario;
    }
    update(id, nombres, apellidoPaterno, apellidoMaterno, correoElectronico, contrasena, tipoCliente, estado) {
        const elemento = this.usuarios.findIndex((element) => element.idUsuario == id);
        if (elemento == -1) {
            throw new Error();
        }
        if (nombres) {
            this.usuarios[elemento].nombres = nombres;
        }
        if (apellidoPaterno) {
            this.usuarios[elemento].apellidoPaterno = apellidoPaterno;
        }
        if (apellidoMaterno) {
            this.usuarios[elemento].apellidoMaterno = apellidoMaterno;
        }
        if (correoElectronico) {
            this.usuarios[elemento].correoElectronico = correoElectronico;
        }
        if (contrasena) {
            this.usuarios[elemento].contrasena = this.createSHA256Hash(contrasena);
        }
        if (tipoCliente) {
            this.usuarios[elemento].tipoCliente = tipoCliente;
        }
        if (estado) {
            this.usuarios[elemento].estado = estado;
        }
        return this.usuarios[elemento];
    }
    createAddress(idUsuario, calle, numeroCalle, comuna, ciudad, region, tipoDireccion, numeroDepartamento, informacionAdicional) {
        const elementoUs = this.usuarios.findIndex((element) => element.idUsuario == idUsuario);
        if (elementoUs == -1) {
            throw new common_1.HttpException('No existe usuario con el id ingresado.', 404);
        }
        const newAdress = new address_entity_1.Address(0, '', '', '', '', '', '', [], '');
        const idDireccion = this.usuarios[elementoUs].direccion.length + 1;
        newAdress.idDireccion = idDireccion;
        newAdress.calle = calle;
        newAdress.numeroCalle = numeroCalle;
        newAdress.comuna = comuna;
        newAdress.ciudad = ciudad;
        newAdress.region = region;
        if (!(0, class_validator_1.isArray)(tipoDireccion)) {
            newAdress.tipoDireccion.push(tipoDireccion);
        }
        else {
            newAdress.tipoDireccion = tipoDireccion;
        }
        if (numeroDepartamento) {
            newAdress.numeroDepartamento = numeroDepartamento;
        }
        if (informacionAdicional) {
            newAdress.informacionAdicional = informacionAdicional;
        }
        this.usuarios[elementoUs].direccion.push(newAdress);
        return newAdress;
    }
    updateAddress(idUsuario, idDireccion, calle, numeroCalle, numeroDepartamento, comuna, ciudad, region, tipoDireccion, informacionAdicional) {
        const elementoUs = this.usuarios.findIndex((element) => element.idUsuario == idUsuario);
        if (elementoUs == -1) {
            throw new common_1.HttpException('No existe usuario con el id ingresado.', 404);
        }
        const elementoAd = this.usuarios[elementoUs].direccion.findIndex((element) => element.idDireccion == idDireccion);
        if (elementoAd == -1) {
            throw new common_1.HttpException('No existe direccion con el id ingresado.', 404);
        }
        if (calle) {
            this.usuarios[elementoUs].direccion[elementoAd].calle = calle;
        }
        if (numeroCalle) {
            this.usuarios[elementoUs].direccion[elementoAd].numeroCalle = numeroCalle;
        }
        if (numeroDepartamento) {
            this.usuarios[elementoUs].direccion[elementoAd].numeroDepartamento =
                numeroDepartamento;
        }
        if (comuna) {
            this.usuarios[elementoUs].direccion[elementoAd].comuna = comuna;
        }
        if (ciudad) {
            this.usuarios[elementoUs].direccion[elementoAd].ciudad = ciudad;
        }
        if (region) {
            this.usuarios[elementoUs].direccion[elementoAd].region = region;
        }
        if (tipoDireccion) {
            if (!(0, class_validator_1.isArray)(tipoDireccion)) {
                this.usuarios[elementoUs].direccion[elementoAd].tipoDireccion = [];
                this.usuarios[elementoUs].direccion[elementoAd].tipoDireccion.push(tipoDireccion);
            }
            else {
                this.usuarios[elementoUs].direccion[elementoAd].tipoDireccion = [];
                this.usuarios[elementoUs].direccion[elementoAd].tipoDireccion =
                    tipoDireccion;
            }
        }
        if (informacionAdicional) {
            this.usuarios[elementoUs].direccion[elementoAd].informacionAdicional =
                informacionAdicional;
        }
        return this.usuarios[elementoUs].direccion[elementoAd];
    }
    remove(id) {
        const elemento = this.usuarios.findIndex((element) => element.idUsuario == id);
        if (elemento == -1) {
            throw new Error();
        }
        this.usuarios.splice(elemento, 1);
    }
    removeAddress(idUser, idAdress) {
        const elementoUs = this.usuarios.findIndex((element) => element.idUsuario == idUser);
        if (elementoUs == -1) {
            throw new common_1.HttpException('No existe usuario con el id ingresado.', 404);
        }
        const elementoAd = this.usuarios[elementoUs].direccion.findIndex((element) => element.idDireccion == idAdress);
        if (elementoAd == -1) {
            throw new common_1.HttpException('No existe direccion con el id ingresado.', 404);
        }
        this.usuarios[elementoUs].direccion.splice(elementoAd, 1);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map