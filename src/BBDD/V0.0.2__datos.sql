USE paginas_selectas;

-- 1. Insertar en la tabla `usuario`
INSERT INTO usuario (nombre, segundo_nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena) VALUES 
('Juan', 'Carlos', 'Pérez', 'González', 'juan.perez@gmail.com', 'password123'),
('María', 'Elena', 'Soto', 'Lopez', 'maria.soto@gmail.com', 'password456'),
('Pedro', NULL, 'Ramírez', 'Martínez', 'pedro.ramirez@gmail.com', 'password789'),
('Ana', 'Lucía', 'Torres', 'Figueroa', 'ana.torres@gmail.com', 'password101'),
('Carlos', 'Alberto', 'Gómez', 'López', 'carlos.gomez@gmail.com', 'password202'),
('Luisa', 'Fernanda', 'Rojas', 'Navarro', 'luisa.rojas@gmail.com', 'password303'),
('Jorge', NULL, 'Lara', 'Mendoza', 'jorge.lara@gmail.com', 'password404'),
('Patricia', 'Victoria', 'Méndez', 'Duarte', 'patricia.mendez@gmail.com', 'password505'),
('Ricardo', 'Andrés', 'Vega', 'Cruz', 'ricardo.vega@gmail.com', 'password606'),
('Claudia', NULL, 'Morales', 'Peña', 'claudia.morales@gmail.com', 'password707'),
('Manuel', 'José', 'Bravo', 'Reyes', 'manuel.bravo@gmail.com', 'password808'),
('Andrea', 'Sofía', 'Quintero', 'Castro', 'andrea.quintero@gmail.com', 'password909'),
('Felipe', 'Ignacio', 'Araya', 'Silva', 'felipe.araya@gmail.com', 'password010'),
('Ximena', NULL, 'Campos', 'Moreno', 'ximena.campos@gmail.com', 'password111'),
('Raúl', 'Enrique', 'Sánchez', 'Hernández', 'raul.sanchez@gmail.com', 'password222'),
('Laura', 'Martina', 'Salinas', 'Pineda', 'laura.salinas@gmail.com', 'password333'),
('Sergio', NULL, 'Durán', 'Ortega', 'sergio.duran@gmail.com', 'password444'),
('Natalia', 'Gabriela', 'Serrano', 'Blanco', 'natalia.serrano@gmail.com', 'password555'),
('David', 'Esteban', 'Ferrer', 'Lagos', 'david.ferrer@gmail.com', 'password666'),
('Fernanda', 'Cecilia', 'Pizarro', 'Moya', 'fernanda.pizarro@gmail.com', 'password777');

-- 2. Insertar en la tabla `region`
INSERT INTO region (nombre) VALUES 
('Metropolitana'),
('Valparaíso'),
('O\'Higgins'),
('Maule'),
('Biobío'),
('Los Lagos'),
('Coquimbo'),
('La Araucanía'),
('Atacama'),
('Antofagasta'),
('Magallanes'),
('Tarapacá'),
('Aysén'),
('Ñuble'),
('Los Ríos'),
('Arica y Parinacota'),
('Tarapacá'),
('La Serena'),
('Chiloé'),
('Punta Arenas');

-- 3. Insertar en la tabla `ciudad`
INSERT INTO ciudad (nombre, id_region) VALUES 
('Santiago', 1),
('Valparaíso', 2),
('Rancagua', 3),
('Talca', 4),
('Concepción', 5),
('Puerto Montt', 6),
('La Serena', 7),
('Temuco', 8),
('Copiapó', 9),
('Antofagasta', 10),
('Punta Arenas', 11),
('Iquique', 12),
('Coyhaique', 13),
('Chillán', 14),
('Valdivia', 15),
('Arica', 16),
('Alto Hospicio', 17),
('La Serena', 18),
('Castro', 19),
('Natales', 20);

-- 4. Insertar en la tabla `comuna`
INSERT INTO comuna (nombre, id_ciudad) VALUES 
('Providencia', 1),
('Viña del Mar', 2),
('Machalí', 3),
('San Clemente', 4),
('San Pedro de la Paz', 5),
('Puerto Varas', 6),
('Ovalle', 7),
('Villarrica', 8),
('Tierra Amarilla', 9),
('Mejillones', 10),
('Natales', 11),
('Alto Hospicio', 12),
('Aysén', 13),
('San Carlos', 14),
('Panguipulli', 15),
('Camarones', 16),
('Pozo Almonte', 17),
('Coquimbo', 18),
('Ancud', 19),
('Porvenir', 20);

-- 5. Insertar en la tabla `tipoDireccion`
INSERT INTO tipoDireccion (descripcion) VALUES 
('Envio'),
('Facturacion');

-- 6. Insertar en la tabla `direccion`
INSERT INTO direccion (id_usuario, calle, numero_calle, numero_departamento, id_comuna, informacion_adicional) VALUES 
(1, 'Calle Falsa', '123', '12B', 1, 'Cerca del parque'),
(2, 'Avenida Principal', '456', NULL, 2, NULL),
(3, 'Los Robles', '789', '5A', 3, 'Al lado del colegio'),
(4, 'Paseo Ahumada', '101', NULL, 4, NULL),
(5, 'Callejón Oscuro', '202', '2C', 5, 'Entre las montañas'),
(6, 'Av. Las Condes', '300', '8F', 6, NULL),
(7, 'El Bosque', '400', '1A', 7, 'A una cuadra del supermercado'),
(8, 'Avenida Los Leones', '600', NULL, 8, NULL),
(9, 'Av. Apoquindo', '700', NULL, 9, 'Junto al metro'),
(10, 'Alameda', '800', '7C', 10, 'Frente al mall'),
(11, 'El Volcán', '900', '2B', 11, NULL),
(12, 'Las Torres', '1000', NULL, 12, NULL),
(13, 'Paseo Peatonal', '1100', '6A', 13, 'Frente a la plaza'),
(14, 'Camino del Inca', '1200', '5B', 14, NULL),
(15, 'Los Aromos', '1300', NULL, 15, NULL),
(16, 'Río Baker', '1400', '1C', 16, NULL),
(17, 'Avenida Cordillera', '1500', '4A', 17, 'Junto al río'),
(18, 'Ruta 5', '1600', NULL, 18, NULL),
(19, 'El Litoral', '1700', '3A', 19, 'Frente al mar'),
(20, 'Paseo de los Andes', '1800', NULL, 20, NULL);


ALTER TABLE direccion DROP FOREIGN KEY FK_id_comuna;
ALTER TABLE direccion DROP COLUMN id_comuna;
DROP TABLE comuna;
DROP TABLE ciudad;
DROP TABLE region;

ALTER TABLE direccion
  ADD COLUMN nombre_comuna varchar(50) NOT NULL,
  ADD COLUMN nombre_ciudad varchar(50) NOT NULL,
  ADD COLUMN nombre_region varchar(50) NOT NULL;
 

UPDATE direccion SET nombre_comuna = 'Las Condes', nombre_region = 'Metropolitana', nombre_ciudad = 'Santiago' WHERE id = 1;
UPDATE direccion SET nombre_comuna = 'Providencia', nombre_region = 'Metropolitana', nombre_ciudad = 'Santiago' WHERE id = 2;
UPDATE direccion SET nombre_comuna = 'Viña del Mar', nombre_region = 'Valparaíso', nombre_ciudad = 'Valparaíso' WHERE id = 3;
UPDATE direccion SET nombre_comuna = 'La Serena', nombre_region = 'Coquimbo', nombre_ciudad = 'La Serena' WHERE id = 4;
UPDATE direccion SET nombre_comuna = 'Antofagasta', nombre_region = 'Antofagasta', nombre_ciudad = 'Antofagasta' WHERE id = 5;
UPDATE direccion SET nombre_comuna = 'Temuco', nombre_region = 'Araucanía', nombre_ciudad = 'Temuco' WHERE id = 6;
UPDATE direccion SET nombre_comuna = 'Rancagua', nombre_region = 'O’Higgins', nombre_ciudad = 'Rancagua' WHERE id = 7;
UPDATE direccion SET nombre_comuna = 'Puerto Montt', nombre_region = 'Los Lagos', nombre_ciudad = 'Puerto Montt' WHERE id = 8;
UPDATE direccion SET nombre_comuna = 'Talca', nombre_region = 'Maule', nombre_ciudad = 'Talca' WHERE id = 9;
UPDATE direccion SET nombre_comuna = 'Iquique', nombre_region = 'Tarapacá', nombre_ciudad = 'Iquique' WHERE id = 10;
UPDATE direccion SET nombre_comuna = 'Valdivia', nombre_region = 'Los Ríos', nombre_ciudad = 'Valdivia' WHERE id = 11;
UPDATE direccion SET nombre_comuna = 'Chillán', nombre_region = 'Ñuble', nombre_ciudad = 'Chillán' WHERE id = 12;
UPDATE direccion SET nombre_comuna = 'Copiapó', nombre_region = 'Atacama', nombre_ciudad = 'Copiapó' WHERE id = 13;
UPDATE direccion SET nombre_comuna = 'Punta Arenas', nombre_region = 'Magallanes', nombre_ciudad = 'Punta Arenas' WHERE id = 14;
UPDATE direccion SET nombre_comuna = 'Quillota', nombre_region = 'Valparaíso', nombre_ciudad = 'Quillota' WHERE id = 15;
UPDATE direccion SET nombre_comuna = 'Curicó', nombre_region = 'Maule', nombre_ciudad = 'Curicó' WHERE id = 16;
UPDATE direccion SET nombre_comuna = 'Osorno', nombre_region = 'Los Lagos', nombre_ciudad = 'Osorno' WHERE id = 17;
UPDATE direccion SET nombre_comuna = 'Coyhaique', nombre_region = 'Aysén', nombre_ciudad = 'Coyhaique' WHERE id = 18;
UPDATE direccion SET nombre_comuna = 'Calama', nombre_region = 'Antofagasta', nombre_ciudad = 'Calama' WHERE id = 19;
UPDATE direccion SET nombre_comuna = 'Concepción', nombre_region = 'Biobío', nombre_ciudad = 'Concepción' WHERE id = 20;




-- 7. Insertar en la tabla `genero`
INSERT INTO genero (descripcion) VALUES 
('Ciencia Ficción'),
('Romance'),
('Fantasía'),
('Histórico'),
('Aventura'),
('Suspenso'),
('Terror'),
('Policiaco'),
('Drama'),
('Comedia'),
('Autoayuda'),
('Biografía'),
('Ensayo'),
('Educativo'),
('Infantil'),
('Juvenil'),
('Paranormal'),
('Religión'),
('Política'),
('Filosofía');

-- 8. Insertar en la tabla `autor`
INSERT INTO autor (nombre) VALUES 
('Isaac Asimov'),
('Jane Austen'),
('J.K. Rowling'),
('Gabriel García Márquez'),
('J.R.R. Tolkien'),
('Stephen King'),
('Agatha Christie'),
('Arthur Conan Doyle'),
('George Orwell'),
('Ernest Hemingway'),
('Charles Dickens'),
('Leo Tolstoy'),
('Jules Verne'),
('Victor Hugo'),
('Mark Twain'),
('Friedrich Nietzsche'),
('Plato'),
('Aristotle'),
('Immanuel Kant'),
('Homer');

-- 9. Insertar en la tabla `idioma_libro`
INSERT INTO idioma_libro (descripcion) VALUES 
('Español'),
('Inglés'),
('Francés'),
('Alemán'),
('Portugués'),
('Italiano'),
('Japonés'),
('Chino'),
('Ruso'),
('Coreano'),
('Árabe'),
('Hebreo'),
('Griego'),
('Latín'),
('Hindi'),
('Bengalí'),
('Vietnamita'),
('Polaco'),
('Turco'),
('Sueco');

-- 10. Insertar en la tabla `encuadernacion`
INSERT INTO encuadernacion (descripcion) VALUES 
('Tapa Dura'),
('Tapa Blanda'),
('Edición de Bolsillo'),
('Edición de Lujo'),
('Digital'),
('Audiolibro'),
('Impresión Bajo Demanda'),
('Coleccionista'),
('Edición Limitada'),
('Rústica'),
('Libreta de Apuntes'),
('Manual'),
('Guía de Viaje'),
('Cómic'),
('Manga'),
('Folleto'),
('Calendario'),
('Póster'),
('Plegable'),
('Tarjeta');

-- 11. Insertar en la tabla `editorial`
INSERT INTO editorial (descripcion) VALUES 
('Penguin Random House'),
('Planeta'),
('Alfaguara'),
('Anagrama'),
('Ediciones B'),
('SM'),
('Santillana'),
('Fondo de Cultura Económica'),
('Tusquets Editores'),
('Siglo XXI Editores'),
('Seix Barral'),
('Siruela'),
('Turner'),
('Debate'),
('Crítica'),
('Espasa'),
('Paidós'),
('Ariel'),
('Galaxia Gutenberg'),
('Acantilado');


-- 12. Insertar en la tabla `libro`
INSERT INTO libro (isbn, id_idioma, id_encuadernacion, nombre, stock_libro, precio, rating, id_editorial, agno_publicacion, numero_paginas, descuento, caratula, dimensiones, codigo_barra, resumen) VALUES
('9788408145703', 1, 1, 'Cien Años de Soledad', 100, 20000, 5, 1, 1967, 417, 10, 'cienAnosDeSoledad.jpg', '15x23 cm', '1234567890123', 'Obra maestra de Gabriel García Márquez'),
('9780439064873', 2, 2, 'Harry Potter and the Chamber of Secrets', 150, 30000, 5, 3, 1998, 341, 15, 'hpChamber.jpg', '14x21 cm', '1234567890456', 'Segunda entrega de la famosa saga de J.K. Rowling'),
('9788497592203', 1, 3, 'El Hobbit', 80, 18000, 5, 5, 1937, 310, 20, 'elHobbit.jpg', '12x18 cm', '1234567890789', 'La historia de Bilbo Bolsón y su aventura en la Tierra Media'),
('9780590353427', 2, 2, 'Harry Potter and the Sorcerer\'s Stone', 200, 25000, 5, 3, 1997, 309, 12, 'hpSorceres.jpg', '14x21 cm', '1234567890102', 'Primera entrega de la famosa saga de J.K. Rowling'),
('9786073120572', 1, 1, 'Don Quijote de la Mancha', 90, 22000, 4, 4, 1605, 945, 18, 'donQuijote.jpg', '16x24 cm', '1234567890345', 'Obra maestra de Miguel de Cervantes'),
('9788437604947', 1, 4, 'Crimen y Castigo', 75, 19000, 5, 5, 1866, 671, 10, 'crimenCastigo.jpg', '13x20 cm', '1234567890678', 'Obra maestra de Fiódor Dostoyevski'),
('9788437604893', 1, 1, 'El Principito', 200, 15000, 5, 6, 1943, 96, 0, 'elPrincipito.jpg', '15x23 cm', '1234567890987', 'Clásico de Antoine de Saint-Exupéry'),
('9780141439600', 2, 2, 'Pride and Prejudice', 120, 18000, 5, 2, 1813, 432, 5, 'prideAndPrejudice.jpg', '13x21 cm', '1234567890212', 'Clásico de Jane Austen'),
('9780140449136', 2, 1, 'The Odyssey', 100, 25000, 4, 9, -800, 512, 0, 'odyssey.jpg', '14x22 cm', '1234567890432', 'Poema épico de Homero'),
('9780316769488', 2, 2, 'The Catcher in the Rye', 130, 22000, 4, 7, 1951, 277, 5, 'catcherRye.jpg', '13x20 cm', '1234567890654', 'Novela de J.D. Salinger sobre el adolescente Holden Caulfield'),
('9780140449181', 2, 1, 'War and Peace', 50, 40000, 5, 5, 1869, 1225, 20, 'warPeace.jpg', '15x23 cm', '1234567890876', 'Obra maestra de León Tolstói'),
('9788497592319', 1, 3, 'El Silmarillion', 70, 28000, 4, 5, 1977, 480, 10, 'elSilmarillion.jpg', '12x18 cm', '1234567890120', 'Historia épica sobre la creación de la Tierra Media'),
('9780544003415', 2, 2, 'The Lord of the Rings', 200, 60000, 5, 5, 1954, 1178, 15, 'lordOfTheRings.jpg', '15x23 cm', '1234567890321', 'Saga épica de J.R.R. Tolkien'),
('9781400079988', 2, 1, '1984', 150, 18000, 5, 9, 1949, 328, 5, '1984.jpg', '13x20 cm', '1234567890567', 'Distopía clásica de George Orwell'),
('9780143039433', 2, 2, 'Anna Karenina', 80, 26000, 4, 4, 1877, 964, 12, 'annaKarenina.jpg', '14x21 cm', '1234567890798', 'Novela trágica de León Tolstói'),
('9780143105985', 2, 1, 'Moby-Dick', 60, 22000, 4, 6, 1851, 635, 15, 'mobyDick.jpg', '14x21 cm', '1234567890910', 'Historia épica de Herman Melville'),
('9781400031702', 2, 1, 'Crime and Punishment', 70, 19000, 5, 5, 1866, 671, 10, 'crimeAndPunishment.jpg', '13x20 cm', '1234567890980', 'Obra de Fiódor Dostoyevski sobre la culpa y el castigo'),
('9780553296983', 2, 2, 'Dune', 80, 25000, 5, 5, 1965, 412, 10, 'dune.jpg', '15x23 cm', '1234567890111', 'Ópera espacial de Frank Herbert'),
('9780451524935', 2, 2, 'Animal Farm', 150, 12000, 4, 9, 1945, 112, 0, 'animalFarm.jpg', '13x20 cm', '1234567890232', 'Sátira política de George Orwell'),
('9780307387899', 2, 1, 'The Road', 90, 22000, 5, 7, 2006, 287, 0, 'theRoad.jpg', '13x20 cm', '1234567890343', 'Novela post-apocalíptica de Cormac McCarthy');

-- 13. Insertar en la tabla `genero_libro`
INSERT INTO genero_libro (id_genero, id_libro) VALUES 
(1, 1), (3, 2), (3, 3), (1, 4), (4, 5), (6, 6), (4, 7), (1, 8), 
(9, 9), (2, 10), (1, 11), (5, 12), (7, 13), (10, 14), (3, 15), 
(11, 16), (6, 17), (12, 18), (1, 19), (8, 20);

-- 14. Insertar en la tabla `autor_libro`
INSERT INTO autor_libro (id_autor, id_libro) VALUES 
(4, 1), (3, 2), (5, 3), (3, 4), (6, 5), (6, 6), (9, 7), (8, 8), 
(1, 9), (2, 10), (4, 11), (5, 12), (13, 13), (7, 14), (14, 15), 
(6, 16), (3, 17), (2, 18), (10, 19), (5, 20);

-- 15. Insertar en la tabla `resena`
INSERT INTO resena (id_usuario, id_libro, comentario, rating, fecha) VALUES 
(1, 1, 'Excelente obra, me atrapó desde el inicio', 5, '2023-01-01'),
(2, 2, 'Una secuela aún mejor que la primera', 5, '2023-01-02'),
(3, 3, 'Aventura épica, un clásico de la literatura', 4, '2023-01-03'),
(4, 4, 'Gran inicio para una saga mágica', 5, '2023-01-04'),
(5, 5, 'Una de las mejores novelas históricas', 5, '2023-01-05'),
(6, 6, 'Suspenso hasta el último momento', 4, '2023-01-06'),
(7, 7, 'Un clásico que debe leerse al menos una vez', 5, '2023-01-07'),
(8, 8, 'Una obra maestra de la ficción inglesa', 5, '2023-01-08'),
(9, 9, 'Increíble relato de aventuras y mitología', 5, '2023-01-09'),
(10, 10, 'Una novela que te hace reflexionar profundamente', 4, '2023-01-10'),
(11, 11, 'Magnífica novela, aunque un poco larga', 4, '2023-01-11'),
(12, 12, 'Un clásico de la literatura rusa', 5, '2023-01-12'),
(13, 13, 'Increíble historia sobre la creación del mundo', 5, '2023-01-13'),
(14, 14, 'Una trilogía épica que no defrauda', 5, '2023-01-14'),
(15, 15, 'Una distopía aterradora y realista', 5, '2023-01-15'),
(16, 16, 'Gran historia, pero un poco densa', 4, '2023-01-16'),
(17, 17, 'Épico relato de aventuras en el mar', 5, '2023-01-17'),
(18, 18, 'Una historia sobre la culpa y el castigo', 4, '2023-01-18'),
(19, 19, 'Una ópera espacial que cambia el juego', 5, '2023-01-19'),
(20, 20, 'Sátira política muy ingeniosa', 5, '2023-01-20');


-- 16. Inserta en tabla `direccion_tipoDireccion`
INSERT INTO direccion_tipoDireccion (id_direccion,id_tipoDireccion) VALUES 
(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1),
(11,1),
(12,1),
(13,1),
(14,1),
(15,1),
(16,1),
(17,1),
(18,1),
(19,1),
(20,1);

INSERT INTO historial_compra (id_usuario, estatus_compra, fecha_compra, fecha_entrega, id_direccion_entrega) VALUES
(1, 'Completada', '2024-10-01', '2024-10-05', 1),
(2, 'En proceso', '2024-10-02', '2024-10-06', 2),
(3, 'Cancelada', '2024-10-03', '2024-10-07', 3),
(4, 'Completada', '2024-09-25', '2024-09-29', 4),
(5, 'En espera de pago', '2024-10-04', '2024-10-08', 5),
(6, 'Completada', '2024-09-22', '2024-09-26', 6),
(7, 'En proceso', '2024-09-29', '2024-10-03', 7),
(8, 'Completada', '2024-10-05', '2024-10-09', 8),
(9, 'En proceso', '2024-10-06', '2024-10-10', 9),
(10, 'Cancelada', '2024-09-15', '2024-09-20', 10),
(11, 'Completada', '2024-09-12', '2024-09-17', 11),
(12, 'En proceso', '2024-10-07', '2024-10-11', 12),
(13, 'Completada', '2024-10-01', '2024-10-05', 13),
(14, 'En espera de pago', '2024-10-08', '2024-10-12', 14),
(15, 'Completada', '2024-09-10', '2024-09-14', 15),
(16, 'En proceso', '2024-09-30', '2024-10-04', 16),
(17, 'Completada', '2024-09-05', '2024-09-09', 17),
(18, 'En espera de pago', '2024-09-12', '2024-09-16', 18),
(19, 'En proceso', '2024-09-28', '2024-10-02', 19),
(20, 'Completada', '2024-09-20', '2024-09-25', 20);


INSERT INTO libro_compra (id_compra, id_libro, cantidad) VALUES
(1, 1, 2),
(2, 2, 1),
(3, 3, 3),
(4, 4, 1),
(5, 5, 2),
(6, 6, 1),
(7, 7, 3),
(8, 8, 1),
(9, 9, 2),
(10, 10, 1),
(11, 11, 4),
(12, 12, 1),
(13, 13, 2),
(14, 14, 3),
(15, 15, 1),
(16, 16, 2),
(17, 17, 1),
(18, 18, 4),
(19, 19, 2),
(20, 20, 3);

-- nuevos valores para carrito de compras

INSERT INTO carrito (usuario_id, libro_id, cantidad) VALUE
(2, 5, 1),
(2, 19, 2),
(2, 2, 6),
(5, 7, 2),
(8, 8, 8),
(8, 13, 1),
(8, 17, 1),
(8, 20, 2),
(12, 1, 1),
(12, 6, 1),
(12, 15, 1),
(12, 12, 1),
(19, 4, 1);