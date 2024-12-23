USE paginas_selectas;

ALTER TABLE carrito DROP FOREIGN KEY carrito_ibfk_1;

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

ALTER TABLE carrito RENAME COLUMN usuario_id TO carrito_id;

UPDATE carrito SET carrito_id = 1 WHERE isbn_libro = '9783836593397';
UPDATE carrito SET carrito_id = 1 WHERE isbn_libro = '9788413411491';
UPDATE carrito SET carrito_id = 1 WHERE isbn_libro = '9783836597982';
UPDATE carrito SET carrito_id = 2 WHERE isbn_libro = '9789566205203';
UPDATE carrito SET carrito_id = 3 WHERE isbn_libro = '9788410048478';
UPDATE carrito SET carrito_id = 3 WHERE isbn_libro = '9788439732471';
UPDATE carrito SET carrito_id = 3 WHERE isbn_libro = '9783836598187';
UPDATE carrito SET carrito_id = 3 WHERE isbn_libro = '9788418933493';
UPDATE carrito SET carrito_id = 4 WHERE isbn_libro = '9783836598408';
UPDATE carrito SET carrito_id = 4 WHERE isbn_libro = '9788418933394';
UPDATE carrito SET carrito_id = 4 WHERE isbn_libro = '9783836526470';
UPDATE carrito SET carrito_id = 4 WHERE isbn_libro = '9783836597036';
UPDATE carrito SET carrito_id = 5 WHERE isbn_libro = '9788419785855';

CREATE TABLE carrito_informacion (
    id_carrito INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    fecha_actualizacion DATE,
    precio_total INT,
    estado ENUM ('activo', 'completado', 'cancelado') DEFAULT 'activo',
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

INSERT INTO carrito_informacion (id_carrito, usuario_id, fecha_actualizacion, precio_total, estado) VALUES 
(1, 2, '2024-12-15', 112500, 'activo'),
(2, 5, '2024-12-15', 18000, 'activo'),
(3, 8, '2024-12-15', 101890, 'activo'),
(4, 12, '2024-12-15', 118890, 'activo'),
(5, 19, '2024-12-15', 52800, 'activo');

ALTER TABLE carrito ADD CONSTRAINT fk_carrito_carrito_informacion FOREIGN KEY (carrito_id) REFERENCES carrito_informacion(id_carrito);