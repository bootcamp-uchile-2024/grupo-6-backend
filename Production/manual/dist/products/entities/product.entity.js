"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(isbn, nombre, autor, stockLibro, precio, genero, editorial, idioma, encuadernacion, agnoPublicacion, numeroPaginas, descuento, caratula, dimensiones, ean, resumen) {
        this.isbn = isbn;
        this.nombre = nombre;
        this.autor = autor;
        this.stockLibro = stockLibro;
        this.precio = precio;
        this.rating = 0;
        this.genero = genero;
        this.editorial = editorial;
        this.idioma = idioma;
        this.encuadernacion = encuadernacion;
        this.agnoPublicacion = agnoPublicacion;
        this.numeroPaginas = numeroPaginas;
        this.resenas = [];
        this.descuento = descuento;
        this.caratula = caratula;
        this.dimensiones = dimensiones;
        this.ean = ean;
        this.resumen = resumen;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map