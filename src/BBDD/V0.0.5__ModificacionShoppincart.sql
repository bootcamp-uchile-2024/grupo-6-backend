USE paginas_selectas;

ALTER TABLE carrito ADD COLUMN precio INT;

UPDATE carrito SET precio = 38800 WHERE isbn_libro = '9783836593397';
UPDATE carrito SET precio = 34900 WHERE isbn_libro = '9788413411491';
UPDATE carrito SET precio = 38800 WHERE isbn_libro = '9783836597982';
UPDATE carrito SET precio = 18000 WHERE isbn_libro = '9789566205203';
UPDATE carrito SET precio = 33800 WHERE isbn_libro = '9788410048478';
UPDATE carrito SET precio = 26000 WHERE isbn_libro = '9788439732471';
UPDATE carrito SET precio = 24800 WHERE isbn_libro = '9783836598187';
UPDATE carrito SET precio = 17290 WHERE isbn_libro = '9788418933493';
UPDATE carrito SET precio = 38800 WHERE isbn_libro = '9783836598408';
UPDATE carrito SET precio = 16490 WHERE isbn_libro = '9788418933394';
UPDATE carrito SET precio = 38800 WHERE isbn_libro = '9783836526470';
UPDATE carrito SET precio = 24800 WHERE isbn_libro = '9783836597036';
UPDATE carrito SET precio = 52800 WHERE isbn_libro = '9788419785855';

ALTER TABLE carrito ADD COLUMN descuento INT;

UPDATE carrito SET descuento = 1 WHERE isbn_libro = '9783836593397';
UPDATE carrito SET descuento = 2 WHERE isbn_libro = '9788413411491';
UPDATE carrito SET descuento = 3 WHERE isbn_libro = '9783836597982';
UPDATE carrito SET descuento = 3 WHERE isbn_libro = '9789566205203';
UPDATE carrito SET descuento = 2 WHERE isbn_libro = '9788410048478';
UPDATE carrito SET descuento = 1 WHERE isbn_libro = '9788439732471';
UPDATE carrito SET descuento = 1 WHERE isbn_libro = '9783836598187';
UPDATE carrito SET descuento = 2 WHERE isbn_libro = '9788418933493';
UPDATE carrito SET descuento = 1 WHERE isbn_libro = '9783836598408';
UPDATE carrito SET descuento = 3 WHERE isbn_libro = '9788418933394';
UPDATE carrito SET descuento = 2 WHERE isbn_libro = '9783836526470';
UPDATE carrito SET descuento = 1 WHERE isbn_libro = '9783836597036';
UPDATE carrito SET descuento = 1 WHERE isbn_libro = '9788419785855';

CREATE TABLE carrito_informacion (
    id_carrito INT AUTO_INCREMENT,
    usuario_id INT,
    fecha_actualizacion DATE,
    precio_total INT,
    PRIMARY KEY (id_carrito, usuario_id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

INSERT INTO carrito_informacion (id_carrito, usuario_id, fecha_actualizacion, precio_total) VALUES 
(1, 2, '2024-12-15', 112500),
(2, 5, '2024-12-15', 18000),
(3, 8, '2024-12-15', 101890),
(4, 12, '2024-12-15', 118890),
(5, 19, '2024-12-15', 52800);

CREATE TABLE purchase (
    id_compra INT,
    carrito_id INT,
    id_metodo_pago INT,
    fecha_compra DATE,
    usuario_id INT,
    id_direccion INT,
    PRIMARY KEY (id_compra, usuario_id),
    FOREIGN KEY (id_compra) REFERENCES historial_compra(id),
    FOREIGN KEY (carrito_id) REFERENCES carrito_informacion(id_carrito),
    FOREIGN KEY (id_direccion) REFERENCES direccion(id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

INSERT INTO purchase (id_compra, carrito_id, id_metodo_pago, fecha_compra, usuario_id, id_direccion) VALUES 
(1, 5, 1, '2024-12-15', 19, 19),
(2, 3, 2, '2024-12-15', 8, 8);