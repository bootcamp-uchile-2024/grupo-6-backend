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

-- 7. Modificación sobre tablas comuna, ciudad y region
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


-- 8. Insertar en la tabla `genero`
INSERT INTO genero (id, descripcion) VALUES 
(1, 'Novelas'),
(2, 'Fotografía'),
(3, 'Ciencia Ficción'),
(4, 'Cuentos'),
(5, 'Ilustración'),
(6, 'Diseño'),
(7, 'Fantasía'),
(8, 'Terror'),
(9, 'Biografías'),
(10, 'Religión y Mitología'),
(11, 'Deporte'),
(12, 'Motocicletas'),
(13, 'Arquitectura'),
(14, 'Literatura clásica');


-- 9. Insertar en la tabla `autor`
INSERT INTO autor (id, nombre) VALUES 
(1,	  'Gabriel García Marquéz'),
(2,	  'Steve McCurry'),
(3,	  'Brian Aldiss'),
(4,	  'Horacio Quiroga'),
(5,	  'Chelsea Ward'),
(6,	  'Charlotte y Peter Fiell'),
(7,	  'Elizabeth Wilhide'),
(8,	  'J. R. R. Tolkien'),
(9,	  'Bram Stoker'),
(10,	'Homero'),
(11,	'Mario Amorós'),
(12,	'Sunil Sethi'),
(13,	'Kikan Massara'),
(14,	'Julius Wiedemann'),
(15,	'Michael Freeman'),
(16,	'Herman Melville'),
(17,	'George Orwell'),
(18,	'Harry Benson'),
(19,	'Philip Jodidio'),
(20,	'Simon "Woody" Wood');

-- 10. Insertar en la tabla `idioma_libro`
INSERT INTO idioma_libro (id, descripcion) VALUES 
(1, 'Español'),
(2, 'Inglés');

-- 11. Insertar en la tabla `encuadernacion`
INSERT INTO encuadernacion (id, descripcion) VALUES 
(1, 'Tapa Dura'),
(2, 'Tapa Blanda');

-- 12. Insertar en la tabla `editorial`
INSERT INTO editorial (id, descripcion) VALUES 
(1, 'Literatura Random House'),
(2, 'Planeta'),
(3, 'Taschen'),
(4, 'Edhasa'),
(5, 'Biblok'),
(6, 'Blume'),
(7, 'Alma'),
(8, 'Librero'),
(9, 'Planeta Cómic'),
(10, 'Ediciones B');

-- 13. Insertar en la tabla `libro`
INSERT INTO libro (
isbn,             nombre, id_autor, stock_libro, precio, rating, id_editorial, id_idioma, id_encuadernacion, agno_publicacion, numero_paginas, descuento, dimensiones, codigo_barra, caratula, fecha_creacion, destacado, habilitado, resumen ) VALUES  
('9788439732471', 'Cien Años de Soledad',                                                       1,  100,  26000, 5, 1,  1, 1, 2017, 417, 10,  '23,7x18 cm',   '1234567890123', 'cienanosdesoledad.jpg',   '2024-11-13', TRUE,   TRUE,   '\"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.\"Con esta cita comienza una de las novelas más importantes del siglo XX y una de las aventuras literarias más fascinantes de todos los tiempos. Millones de ejemplares de Cien años de soledad leídos en todas las lenguas y el premio Nobel de Literatura coronando una obra que se había abierto paso «boca a boca» -como gustaba decir el escritor- son la más palpable demostración de que la aventura fabulosa de la familia Buendía-Iguarán, con sus milagros, fantasías, obsesiones, tragedias, incestos, adulterios, rebeldías, descubrimientos y condenas, representaba al mismo tiempo el mito y la historia, la tragedia y el amor del mundo entero.'),
('9783836597036', 'Animals',                                                                    2,  150,  24800, 5, 3,  2, 1, 2019, 192, 15,  '14x19,5 cm',   '1234567890456', 'animals.jpg',             '2024-11-14', FALSE,  TRUE,   'En Animals descubrimos una nueva faceta del famoso fotógrafo Steve McCurry, quien explora con perspicacia la compleja relación de los animales con los humanos y el medioambiente. La ternura abunda, especialmente en escenas de perros callejeros que duermen apaciblemente junto a una persona. Pero también hay una especie de soledad muy visible en criaturas que no pertenecen a nadie y que deambulan por la vida sin más que su instinto de supervivencia. Ante nosotros transitan camellos atrapados en el fuego cruzado durante la primera guerra del Golfo; un pastor del norte de Pakistán que alimenta con delicadeza a sus cabras; perros acicalados en Beverly Hills; carreras de caballos en una azotea de Hong Kong; y elefantes en Tailandia, entre muchas otras imágenes seleccionadas por McCurry de sus extensos archivos.'),
('9788497592203', 'El Árbol de Saliva',                                                         3,  80,   21800, 5, 4,  1, 2, 2022, 352, 20,  '13x21 cm',     '1234567890789', 'arboldesaliva.jpg',       '2024-11-15', FALSE,  TRUE,   'Lo que al principio parece una bendición caída del cielo en la granja de los Grendon no tarda en revelarse como una inagotable fuente de problemas. El meteorito ha traído consigo a unos extraños seres que quieren acabar con la humanidad, y el joven Gregory Rolles pronto intuye que algo raro está sucediendo e inicia una compleja investigación... Así comienza El árbol de saliva, sin duda el más conocido de los relatos de Aldiss, claro e inquietante homenaje a H.G. Wells por el que obtuvo en su día el Premio Nebula y que está considerado como el maestro del cuento y el relato breve. Es este libro un conjunto de relatos de ciencia ficción de una extraordinaria tensión narrativa y calidad literaria, con los más variados temas y registros. Además del que da título al volumen, incluye, entre otros, Peligro: Religión, La joven y el robot con flores, Un hábito solitario y Un placer compartido. Todo un clásico de la ciencia ficción, en una nueva edición en al que se ha revisado la traducción. Obra indispensable para los amantes de este género, que nos muestra el sentido del humor, la acción y la tensión narrativa, que imponía Aldiss en todos sus relatos.'),
('9788412004335', 'Cuentos de amor, de locura y de muerte',                                     4,  200,  14800, 5, 5,  1, 2, 2019, 338, 12,  '12,5x19,5 cm', '1234567890102', 'cuentosdeamor.jpg',       '2024-11-16', TRUE,   TRUE,   'Colección Selecta. La muerte planeó siempre sobre la cabeza de Horacio Quiroga, como accidente violento, como penosa enfermedad, como suicidio. Por eso estos impresionantes relatos tienen esa conmovedora carga de autenticidad.'),
('9788411540681', 'Dibujo Fácil',                                                               5,  0,    18800, 4, 8,  1, 2, 2024, 112, 18,  '16,5x24,1 cm', '1234567890345', 'dibujofacil.jpg',         '2024-11-17', FALSE,  TRUE,   'Estas páginas contienen sencillas lecciones paso a paso para aprender a dibujar. Sin verse apabullados por un exceso de detalles técnicos, los aspirantes a artistas convertirán este en su manual favorito para acercarse al mundo del dibujo. Bastan pocos materiales para esbozar los primeros trazos y dar vida a proyectos que, en esta ocasión, incluyen frutas y verduras, plantas, personas, animales, paisajes y objetos cotidianos, entre otros.'),
('9783836598408', 'Diseño Escandinavo',                                                         6,  75,   38800, 5, 3,  1, 1, 2024, 512, 10,  '15,6x21,7 cm', '1234567890678', 'disenoescandinavo.jpg',   '2024-11-18', FALSE,  TRUE,   'Los escandinavos son mundialmente conocidos por sus diseños inimitables y democráticos que tienden un puente entre la artesanía y la producción industrial. Esta guía exhaustiva proporciona una visión detallada sobre mobiliario escandinavo, vidrio, cerámica, textiles, joyería, objetos de metal y diseño industrial desde 1900 hasta hoy en día, con artículos detallados sobre 125 diseñadores y compañías líderes del sector.'),
('9788419785855', 'Diseño, Toda la historia',                                                   7,  200,  52800, 5, 6,  1, 2, 2024, 576, 0,   '17x24,5 cm',   '1234567890987', 'disenohistoria.jpg',      '2024-11-19', FALSE,  TRUE,   'Todos los objetos creados por el hombre desde el inicio de la civilización han sido diseñados. Una olla moldeada y cocida hace miles de años bajo el sol de Mesopotamia es fruto del diseño tanto como un vehículo conceptual o un iPhone. No obstante, el diseño entendido como práctica especializada, distinta del proceso de fabricación, del arte y de la artesanía, presenta una historia mucho más breve, que data de los inicios de la revolución industrial. Este libro analiza los desarrollos, movimientos y figuras clave del diseño mundial, desde los inicios de la producción industrial hasta la actualidad. La obra está organizada de forma cronológica y explora en profundidad los objetos clave y los diseños más célebres, situando el diseño dentro de su contexto tecnológico, cultural, económico, estético y teórico. Desde los moralistas del siglo xix hasta los pensadores radicales del movimiento moderno, pasando por la emergencia de artistas como Raymond Loewy, en la década de 1930, o los genios actuales, como Philippe Starck, este volumen analiza aspectos básicos del diseño y la forma en que afectan a nuestras vidas.'),
('9789562476171', 'El Hobbit',                                                                  8,  120,  12900, 5, 2,  1, 2, 2013, 320, 5,   '20x25 cm',     '1234567890212', 'elhobbit.jpg',            '2024-11-20', TRUE,   TRUE,   'Cuando alrededor de 1930, J.R.R. Tolkien comenzó a escribir El Hobbit, hacía ya diez años que trabajaba en el vasto panorama mitológico de El Libro de los Relatos, que más tarde se llamaría El Silmarillion. Así como esas crónicas tempranas narraban los mitos inmemoriales de la Primera y Segunda Edad, Tolkien pronto advirtió que El Hobbit iba ordenándose de algún modo como un relato de la Tercera Edad (Gandalf habla del Nigromante en las primeras páginas), aunque las inesperadas aventuras de un pacífico hombre del campo no parecieran tener mucha relación con las vastas y oscuras mitologías de la Tierra Media. El estilo directo y lineal, con alusiones (que el autor deploró más tarde) a un público infantil, no impide la poderosa irrupción -unas pocas veces en términos de comedia- de los grandes temas tolkienianos (el poder, la codicia, la guerra, la muerte) que reaparecerían en una dimensión a menudo obviamente épica en El Señor de los Anillos.'),
('9788418933493', 'El invitado de Drácula y otros relatos',                                     9,  100,  17290, 4, 7,  1, 1, 2024, 144, 0,   '15,5x21,5 cm', '1234567890432', 'elinvitadodracula.jpg',   '2024-11-21', TRUE,   TRUE,   'Bram Stoker pasó los primeros siete años de su vida recluido en su casa a causa de una enfermedad. Su único entretenimiento eran las oscuras leyendas irlandesas que su madre le contaba. No sería de extrañar que esas crónicas hilvanadas con elementos sobrenaturales generaran el caldo de cultivo que llevó a Stoker a convertirse en uno de los más grandes autores de terror gótico. Durante mucho tiempo se consideró «El invitado de Drácula» un primer capítulo eliminado de Drácula, la obra capital de Stoker, si bien el estudio de las notas del autor a partir de los años setenta desechó esta idea y dio pie a otras teorías. Sea como fuere, la historia, que funciona de manera independiente, vio la luz en 1914, dos años después de la muerte del escritor irlandés, como parte de una recopilación de sus mejores relatos. Reunidas de nuevo en esta edición, estas ocho joyas del género demuestran la maestría de Bram Stoker para desarrollar ficciones escalofriantes que pondrán a prueba los límites de nuestro miedo.'),
('9788418008962', 'La Iliada',                                                                  10, 130,  22790, 4, 7,  1, 1, 2021, 464, 5,   '15,5x21,5 cm', '1234567890654', 'lailiada.jpg',            '2024-11-22', FALSE,  TRUE,   'Literalmente, nuestro mundo sería diferente si Homero no hubiera existido. El genial bardo ciego retrata con maestría la guerra de Troya, las hazañas de los contendientes y las rencillas entre los dioses con una intensidad y una fuerza que todavía conmueven. La Ilíada de Homero no solo marca el comienzo de la literatura griega, sino también el de la cultura occidental tal y como la conocemos.'),
('9788413411491', 'La Odisea Ilustrada',                                                        10, 50,   34900, 5, 9,  1, 1, 2024, 352, 20,  '18,3x25,5 cm', '1234567890876', 'odiseailustrada.jpg',     '2024-11-23', TRUE,   TRUE,   'Edición ilustrada de un clásico de todos los tiempos. La Odisea es sin duda uno de los más grandes poemas épicos de todos los tiempos. En él se narra el regreso del héroe, Odiseo, a su patria, Ítaca, después de la conquista de Troya. En esta edición acompañada por el magnífico dibujo de Miguel Brieva, se ha modificado la estructura y se han reducido algunos pasajes, pero se ha mantenido la magnífica composición de las escenas más relevantes, así como la resonancia épica del estilo. Las ilustraciones de Brieva pretenden dar una visión realista de los personajes y los hechos, de manera que, imbricadas en la narración, ayuden al lector a introducirse tanto en el mundo imaginario del cuento popular como en el día a día de la civilización micénica.'),
('9789566205203', 'La Vida es Eterna. Biografía de Víctor Jara',                                11, 70,   18000, 4, 10, 1, 2, 2023, 404, 10,  '15x23 cm',     '1234567890120', 'lavidaeseterna.jpg',      '2024-11-24', TRUE,   TRUE,   'Con el rigor bibliográfico y documental que lo caracteriza, además de su reconocida capacidad narrativa, Mario Amorós traza la más completa biografía del ícono chileno hasta hoy publicada. Un repaso desde sus orígenes en la localidad rural de San Ignacio, su formación como director teatral de avanzada, su conversión en un símbolo del folk latinoamericano y de la izquierda mundial, hasta su detención y asesinato en el Estadio Chile. La historia de Víctor Jara no es solo la de una de las mentes chilenas más interesantes e influyentes del siglo XX, sino también el retrato de una época de profunda efervescencia política y artística, interrumpida de manera salvaje por el Golpe de Estado.'),
('9783836599238', 'Living in Asia',                                                             12, 200,  38800, 5, 3,  2, 1, 2019, 480, 15,  '15,6x21,7 cm', '1234567890321', 'livinginasia.jpg',        '2024-11-25', TRUE,   TRUE,   'Zen, relajantes, místicos, meditativos: las palabras no pueden hacer justicia a los interiores más hermosos de Asia. Ya sea un dorado monasterio tibetano, una plantación en Sri Lanka o una casa de campo en Tailandia, cada uno de los paraísos que aparece en este libro es extraordinario tanto por su estética como por su espíritu. Esta colección presenta unos 40 escenarios excepcionales de Tíbet, Nepal, India, Sri Lanka, Birmania, Tailandia, Laos, Camboya, Singapur y Malasia. Entre las obras destacadas se cuentan casas tradicionales birmanas; el espectacular palacio Shiv Niwas en India, que recibió la visita de James Bond en Octopussy; templos camboyanos; una barcaza para el transporte de arroz convertida en casa flotante en Tailandia; la "Mansión Azul", la magnífica casa con patio pintada de color índigo que aparece en la película Indochina; un impresionante jardín diseñado por el arquitecto cingalés Geoffrey Bawa; y muchas, muchas más.'),
('9783836598644', 'Los 12 Pasos. Los símbolos, los mitos y los archetipos de la recuperación',  13, 150,  49800, 5, 3,  1, 1, 2024, 384, 5,   '17x24 cm',     '1234567890567', 'losdocepasos.jpg',        '2024-11-26', TRUE,   TRUE,   'Esta inspiradora edición presenta más de 150 obras de arte fascinantes y atemporales, que abarcan desde la Antigüedad hasta la actualidad, para describir metafóricamente un camino conmovedor hacia la curación y la transformación sobre la base de unos principios de recuperación que continúan ayudando a millones de personas. Con estudios en profundidad realizados por destacados expertos en varios campos convergentes, el libro examina la historia detrás de los doce pasos, desde los orígenes del programa en los Estados Unidos de la era de la Depresión hasta la construcción de una base para la recuperación que incorpora conceptos identificados por el psicólogo C. G. Jung. El volumen también ofrece información relevante sobre el significado de la adicción en la sociedad actual. Con imágenes sorprendentes, citas literarias y referencias psicológicas, el programa de los doce pasos se presenta nuevamente a una audiencia más amplia de un modo accesible y constructivo. En un momento de cambios radicales y oportunidades, esta edición visual honra el poder transformador de estos principios universales y explora reflexivamente formas de alinearse con ellos.'),
('9783836526470', '100 Manga Artists',                                                          14, 80,   38800, 4, 3,  2, 1, 2016, 576, 12,  '15,6x21,7 cm', '1234567890798', 'mangaartists.jpg',        '2024-11-27', FALSE,  TRUE,   'Desde que TASCHEN publicara la edición original de Manga Design, el fenómeno del cómic japonés no ha dejado de sumar fascinantes personajes y nuevos talentos. Esta edición revisada y actualizada presenta a los mejores últimos y mejores creadores, los que impulsan el universo del manga. De la A a la Z, este directorio descubrirá a las superestrellas, reales y de ficción, de una industria que ha traspasado fronteras convirtiéndose en fuente de inspiración para publicistas y cineastas, para creativos y millones de fans entusiastas, por no hablar del fenómeno cosplay, que lleva a los aficionados del manga a enfundarse elaborados trajes para celebrar la existencia de sus personajes en multitudinarios encuentros entre Los Ángeles (EEUU) y Leipzig (Alemania). De maestros clásicos como Osamu Tezuka (creador de Astro Boy) y Katsuhiro Otomo (creador de Akira) a jóvenes promesas como Hajime Isayama, cada apartado dedicado a un artista incluye información biográfica y bibliográfica, descripciones de los principales personajes y, por supuesto, muchos ejemplos de páginas interiores y portadas de los mejores mangas de cada creador.'),
('9788410048478', 'Manual del Fotógrafo',                                                       15, 60,   33800, 4, 6,  1, 1, 2019, 240, 15,  '16x23 cm',     '1234567890910', 'manualfotografo.jpg',     '2024-11-28', FALSE,  TRUE,   'Del autor que ha vendido millones de libros, este manual combina una guía sencilla con aspectos artísticos. Una herramienta esencial para fotógrafos de cualquier estilo y nivel de experiencia: muestra cómo sacar el máximo partido al equipo, a componer y captar todos los temas y estilos clásicos, y a perfeccionar la posproducción para crear un flujo de trabajo de factura profesional. Incluye datos, información y consejos para conocer todo lo que precisa saber para ser un fotógrafo de éxito.'),
('9788416574995', 'Moby Dick',                                                                  16, 70,   10800, 5, 8,  1, 1, 2021, 50,  10,  '19,5x25,5 cm', '1234567890980', 'mobydick.jpg',            '2024-11-29', FALSE,  TRUE,   'Esta obra narra la travesía del barco ballenero Pequod, comandado por el capitán Ahad, junto a Ismael y el arponero Quiqueg en la obsesiva y autodestructiva persecución de un cachalote blanco.'),
('9783836598774', 'Motorcycles',                                                                6,  80,   38800, 5, 3,  2, 1, 2019, 512, 10,  '15,6x21,7 cm', '1234567890111', 'motorcycles.jpg',         '2024-11-30', FALSE,  TRUE,   'Viajes de ensueño: Las motos más espectaculares del planeta. Desde la Hildebrand & Wolfmüller de 1894 hasta la Aston Martin AMB 001 de 2020, este libro explora en profundidad 50 de las motocicletas más deseadas que jamás hayan recorrido un circuito o una carretera. Desde ingenios pioneros que batieron récords, lujosas motos viajeras y legendarias máquinas de carretera hasta diseños ganadores de grandes premios, superbikes icónicas y exóticas motos custom, este libro celebra el diseño y la ingeniería de motocicletas en su más alto nivel. Muchos ejemplos provienen de importantes colecciones privadas y se ven en ocasiones muy contadas. Otros son las estrellas absolutas de museos de motocicletas de renombre, como la "Golden Dream" de Brough Superior de 1938 o la MV Agusta 500 4C de 1957, que llevó a John Surtees a la gloria en el Campeonato Mundial. Junto a algunas supervivientes de los primeros tiempos en un estado sorprendentemente original, hay un conjunto de motos de carreras legendarias, las máquinas reales con las que compitieron personajes como Tarquinio Provini, Mike Hailwood, Giacomo Agostini y Barry Sheene.'),
('9788418933394', 'Rebelión en la Granja',                                                      17, 150,  16490, 4, 7,  1, 1, 2022, 128, 0,   '15,5x21,5 cm', '1234567890232', 'rebelionenlagranja.jpg',  '2024-12-01', FALSE,  TRUE,   'En palabras de George Orwell, Rebelión en la granja es la historia de una revolución que sale mal. La corrupción, el abuso de poder, la manipulación de la verdad y el culto al líder acaban con los sueños de libertad, igualdad y justicia de los habitantes de la Granja de los Animales. Hasta los ideales más nobles pueden pervertirse y degenerar en una parodia de aquello contra lo que se luchaba. Con esta sátira feroz de todos los totalitarismos, Orwell nos regala una apasionada reivindicación de la libertad que se ha convertido por méritos propios en uno de los grandes clásicos de la literatura del siglo XX.'),
('9783836598187', 'The Beatles',                                                                18, 90,   24800, 5, 7,  2, 1, 2017, 192, 0,   '14x19,5 cm',   '1234567890343', 'thebeatles.jpg',          '2024-12-02', FALSE,  TRUE,   'A principios de 1964, el fotógrafo Harry Benson recibió una llamada del editor de fotografía del Daily Express de Londres para pedirle que cubriera el viaje de los Beatles a París. Fue el comienzo de una relación que marcó la carrera del grupo, dio a conocer a Benson y generó algunas de las fotografías más íntimas jamás tomadas de los Beatles. En París, Benson tomó la célebre fotografía de los Fab Four enzarzados en una pelea de almohadas en el hotel George V, una imagen llena de espontaneidad que se convirtió en símbolo del espíritu de la banda y que el propio Benson ha calificado como la mejor de su carrera. Más adelante ese mismo año, documentó la primera gira por Estados Unidos, incluida su aparición televisiva en The Ed Sullivan Show, su sorprendente encuentro con Cassius Clay y la histeria que causaba la beatlemanía en Nueva York. Benson también fotografió la luna de miel de George Harrison en Barbados, documentó el rodaje del debut cinematográfico de los Beatles A Hard Day\'s Night y les acompañó en la gira de 1966, cuando John Lennon afirmó que los Beatles eran "más famosos que Jesucristo". Esta reedición trae de vuelta las mejores fotos en blanco y negro de los Beatles tomadas por Benson. Una introducción del propio autor añade un emocionante testimonio personal a estas imágenes icónicas de la banda musical más grande de todos los tiempos.'),
('9783836593397', 'Tree Houses',                                                                19, 150,  38800, 4, 3,  2, 1, 2024, 512, 0,   '15,6x21,7 cm', '1234567890658', 'treehouses.jpg',          '2024-12-03', FALSE,  TRUE,   'La idea de trepar por un árbol para buscar refugio, o simplemente ver la tierra desde otra perspectiva, es tan antigua como la humanidad misma. Esta impecable edición de TASCHEN repasa algunas de las mejores aventuras arbóreas con 48 de las casas de árboles más hermosas, ingeniosas y maravillosas del mundo. De estilo romántico o contemporáneo, ideados por célebres arquitectos o artesanos poco conocidos, ascenderá a las alturas para visitar todo tipo de estructuras sobre los árboles, desde un salón de té, un restaurante, un hotel y una casa de juegos infantil hasta lugares sencillos a los que encaramarse para disfrutar de la vista y descubrir que las casas de árboles pueden tomar tantas formas distintas como la imaginación puede ofrecer. Con multitud de fotografías e ilustraciones preciosas, este volumen es una oda a una vida alternativa, donde la lúdica imaginación se une a la conciencia ecosensible.'),
('9783836597982', 'Sneaker Freaker. The Ultimate Sneaker Book',                                 20, 45,   38800, 5, 3,  2, 1, 2024, 512, 0,   '15,6x21,7 cm', '1234567890546', 'ultimatesneaker.jpg',     '2024-12-04', FALSE,  TRUE,   'En 2002, Simon "Woody" Wood le daba vueltas a la fórmula para conseguir zapatillas gratis. Dos semanas más tarde, era el orgulloso propietario de Sneaker Freaker y su vida no volvió a ser la misma. Desde sus primeros pasos como un fanzine de estilo punk hasta la primorosa edición en papel y la presencia en Internet de la actualidad, esta publicación ferozmente independiente ha recogido todas las zapatillas de deporte colaborativas, personalizadas, de edición limitada, retro, Quickstrike, Hyperstrike y Tier Zero lanzadas en los últimos 20 años. La idea original de Woody de que Sneaker Freaker fuera "seria y divertida, significativa e intrascendente al mismo tiempo" se ha visto reflejada en The Ultimate Sneaker Book. Con más de 500 páginas repletas de conocimiento experto y sus propias observaciones irreverentes, su atención a los pormenores históricos y su minuciosidad nivel otaku van más allá de lo obsesivo. A lo largo de 100 años de historia, cada capítulo ofrece una divertida imagen de la evolución de la industria de las zapatillas. Las Air Max, Air Force, Adi Dassler, Converse, Dapper Dan, Dee Brown, y Michael Jordan, junto con gemas ocultas como las Troop, Airwalk y Vision Street Wear están exhaustivamente documentadas. Una fuente autorizada de conocimiento. ¡El libro definitivo sobre zapatillas!'),
-- MYSTERY BOXs
('MB000001',      'Mystery Box Essential',                                                   NULL, 300,  18000, 5, NULL, NULL, NULL, NULL, NULL, 0, '25x30x10 cm', '1234567890986', 'mysteryboxessential.jpg',  '2024-12-05', FALSE,  TRUE, 'La Mystery Box Essential añade a tu colección un libro al azar según el género literario que elijas. Además, te regalamos un marcapáginas temático.'),
('MB000002',      'Mystery Box Supreme',                                                     NULL, 300,  27000, 5, NULL, NULL, NULL, NULL, NULL, 0, '25x30x10 cm', '1234567890987', 'mysteryboxsupreme.png',    '2024-12-05', FALSE,  TRUE, 'La Mystery Box Supreme añade a tu colección un libro al azar según el género literario que elijas. Incluye un marcapáginas temático, un artículo Booker y una invitación a participar en el club de lectura.');




-- 14. Insertar en la tabla `genero_libro`
INSERT INTO genero_libro (isbn_libro, id_genero) VALUES 
('9788439732471', 1),
('9783836597036', 2),
('9788497592203', 3),
('9788412004335', 4),
('9788411540681', 5),
('9783836598408', 6),
('9788419785855', 6),
('9789562476171', 7),
('9788418933493', 4),
('9788418008962', 1),
('9788418008962', 14),
('9788413411491', 1),
('9788413411491', 14),
('9789566205203', 9),
('9783836599238', 6),
('9783836598644', 10),
('9783836526470', 5),
('9788410048478', 2),
('9788416574995', 1),
('9788416574995', 14),
('9783836598774', 11),
('9783836598774', 12),
('9788418933394', 1),
('9788418933394', 14),
('9783836598187', 9),
('9783836593397', 13),
('9783836597982', 6);


-- 15. Insertar en la tabla `resena`
INSERT INTO resena (id_usuario, isbn_libro, comentario, rating, fecha) VALUES 
(1,   '9788439732471', 'Este libro es un clásico imprescindible. La narrativa es envolvente y te transporta al corazón de la historia.', 5, '2024-12-05'),
(2,   '9788439732471', 'Un excelente libro con una trama profunda, aunque en algunas partes se vuelve algo denso. Aún así, muy recomendable.', 4, '2024-12-12'),
(3,   '9783836597036', 'Un libro visualmente impresionante. Las fotografías son de alta calidad y muestran un mundo único, aunque la narrativa es algo limitada.', 4, '2024-12-12'),
(4,   '9783836597036', 'Me encantó la recopilación de imágenes. Cada página tiene algo nuevo y fascinante, ideal para los amantes de la fotografía y la cultura visual.', 5, '2024-12-12'),
(5,   '9783836597036', 'Es un libro increíble, pero la falta de contexto en algunas imágenes puede hacer que se pierda un poco de su impacto. Aún así, es muy recomendable.', 4, '2024-12-10'),
(6,   '9783836597036', 'Un libro visualmente impresionante, las imágenes son de una calidad espectacular y ofrecen una nueva perspectiva sobre el tema. Ideal para los aficionados a la fotografía.', 5, '2024-12-14'),
(7,   '9788497592203', 'Este libro es una verdadera obra maestra. La narrativa es envolvente y los personajes son increíblemente profundos. Definitivamente un clásico que no puede faltar en ninguna biblioteca.', 5, '2024-12-14'),
(8,   '9788412004335', 'Un libro fascinante que aborda un tema profundo y contemporáneo de una manera accesible. La escritura es fluida, y cada capítulo te deja pensando en su mensaje. Perfecto para quienes buscan una lectura que combine reflexión y entretenimiento.', 4, '2024-12-10'),
(5,   '9788411540681', 'Un relato cautivador que profundiza en las emociones humanas con una prosa delicada. Los personajes están muy bien construidos, y la trama mantiene al lector enganchado desde el principio hasta el final. Recomendado para quienes disfrutan de historias que exploran la psicología humana.', 5, '2024-12-09'),
(6,   '9783836598408', 'Una obra fascinante que nos invita a conocer la historia detrás de algunas de las máquinas más icónicas del mundo. Las fotos y descripciones son impresionantes, proporcionando una visión única para los amantes de las motocicletas. Es un libro imprescindible para los apasionados del tema.', 5, '2024-12-04'),
(1,   '9783836598408', 'Este libro es una verdadera joya para los entusiastas de las motocicletas. A través de sus páginas, se puede explorar la evolución y el diseño de las motos más emblemáticas, con una gran atención al detalle. Las fotografías son asombrosas y complementan perfectamente el contenido.', 4, '2024-12-03'),
(2,   '9788419785855', 'Este libro es un verdadero referente para quienes buscan una comprensión profunda de las vibraciones y cómo afectan a nuestro entorno. Su contenido es claro y detallado, y está lleno de ejemplos prácticos que lo hacen fácil de seguir, incluso para quienes no son expertos en el tema.', 5, '2024-12-01'),
(5,   '9789562476171', 'Una obra fascinante que captura a la perfección la complejidad de los personajes y la intensidad de las situaciones que enfrentan. La narrativa es envolvente y mantiene al lector cautivo desde la primera página.', 4, '2024-12-03'),
(9,   '9789562476171', 'Este libro me sorprendió por su enfoque único sobre temas sociales contemporáneos. Ofrece una visión crítica pero profunda sobre aspectos de la vida cotidiana, y lo hace de manera accesible y entretenida.', 5, '2024-12-01'),
(6,   '9788418933493', 'Un libro que no solo es visualmente atractivo, sino que también ofrece una profunda reflexión sobre el tema que aborda. Las imágenes complementan perfectamente la narrativa, haciendo que el contenido sea aún más impactante.', 5, '2024-12-02'),
(7,   '9788418933493', 'Interesante y muy bien documentado. Aunque en algunos momentos el ritmo decae, la obra ofrece información valiosa y una perspectiva fresca sobre su tema. Ideal para quienes buscan un análisis profundo y visual.', 4, '2024-12-03'),
(8,   '9788413411491', 'Un libro fascinante. La narrativa es envolvente y las ideas que plantea son muy profundas. Es una obra que te hace reflexionar mucho tiempo después de haberla leído. Muy recomendable.', 5, '2024-12-04'),
(9,   '9788413411491', 'No cumplió mis expectativas. Aunque la premisa era interesante, el ritmo del libro es lento y algunos capítulos se sienten demasiado repetitivos. No lo recomendaría a quienes buscan algo dinámico.', 2, '2024-12-05'),
(10,  '9789566205203', 'Un libro increíblemente bien escrito. La trama es absorbente y los personajes están muy bien desarrollados. Me encantó cómo el autor logra mezclar emociones y situaciones realistas. Definitivamente una lectura recomendada.', 5, '2024-12-06'),
(12,  '9783836598644', 'Este libro es una obra visual impresionante. Las fotografías son de una calidad excepcional y la selección de los temas es fascinante. Sin embargo, esperaba una mayor profundidad en los textos que acompañan las imágenes.', 4, '2024-12-07'),
(15,  '9783836526470', 'Un libro fascinante para los amantes de la arquitectura. La colección de imágenes es impresionante y cada proyecto es una muestra de creatividad y diseño innovador. Aunque algunos de los textos podrían ser más detallados, en general es una excelente adición a cualquier colección de libros de diseño.', 5, '2024-12-08'),
(11,  '9788416574995', 'Una narración apasionante sobre la obsesión y la venganza. La obra captura de manera profunda la travesía de los personajes, especialmente la relación entre el capitán Ahab y su tripulación. Sin embargo, algunas partes del libro pueden resultar demasiado extensas para algunos lectores. A pesar de eso, es un clásico que merece ser leído.', 4, '2024-12-09'),
(5,   '9788416574995', 'No pude conectar con la historia. Aunque la trama tiene un buen enfoque, siento que los personajes y la narrativa son demasiado pesados. A veces se siente que el autor se extiende innecesariamente en detalles que no aportan a la historia principal, lo cual hace que el libro pierda ritmo.', 2, '2024-12-10'),
(2,   '9788418933394', 'Una obra poderosa que ofrece una crítica social profunda sobre el totalitarismo y la lucha por la libertad. Orwell logra transmitir la esencia de la manipulación política y cómo los ideales pueden ser corrompidos. Sin embargo, algunos pasajes pueden resultar un poco densos, pero el mensaje sigue siendo claro y relevante.', 4, '2024-12-11'),
(9,   '9788418933394', 'Aunque la idea detrás de la historia es interesante, me pareció que el desarrollo de los personajes no es lo suficientemente fuerte. La crítica política es indiscutible, pero esperaba un poco más de profundidad en la trama. No fue una lectura completamente satisfactoria para mí.', 3, '2024-12-12'),
(1,   '9783836597982', 'Un libro fascinante que lleva a los lectores a través de la historia y la evolución del calzado deportivo. Con una gran cantidad de detalles y fotografías, es un recurso esencial para los aficionados a las zapatillas. El autor logra capturar la esencia de la cultura sneaker y la importancia de cada modelo histórico.', 5, '2024-12-13'),
(13,  '9783836597982', 'Excelente referencia para los amantes de las zapatillas, con mucha información interesante sobre los modelos más icónicos y su impacto en la moda y cultura. Sin embargo, me habría gustado más enfoque en la evolución de los diseños y el impacto de algunas marcas fuera de los más populares.', 4, '2024-12-14'),
(16,  '9783836597982', 'Aunque el contenido es detallado y muy completo, el libro se siente un poco repetitivo en algunas secciones. Si bien es una obra visualmente impresionante, creo que podría haber explorado más en profundidad las historias detrás de los diseñadores y las marcas que han marcado la diferencia en la industria de las zapatillas.', 3, '2024-12-15');


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

-- 17. Insertar datos en historial_compra
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


-- 19. Valores para tabla libro_compra
INSERT INTO libro_compra (id_compra, isbn_libro, cantidad) VALUES
(1,  '9783836598187', 1),
(2,  '9783836598408', 2),
(2,  '9783836526470', 1),
(2,  '9788439732471', 1),
(3,  '9783836598187', 1),
(3,  '9783836526470', 2),
(4,  '9788439732471', 1),
(4,  '9788416574995', 1),
(5,  '9783836598408', 2),
(6,  '9783836597036', 1),
(6,  '9788418933493', 2),
(7,  '9783836597036', 3),
(7,  '9783836597982', 2),
(8,  '9788418933394', 1),
(8,  '9788497592203', 1),
(9,  '9788412004335', 2),
(9,  '9788411540681', 1),
(10, '9789562476171', 1),
(11, '9788419785855', 1),
(11, '9788418933493', 1),
(12, '9788418008962', 1),
(13, '9788413411491', 3),
(14, '9789566205203', 1),
(14, '9783836599238', 1),
(14, '9783836598644', 1),
(15, '9783836593397', 1),
(16, '9788418933394', 4),
(17, '9788416574995', 1),
(18, '9788410048478', 1),
(18, '9783836526470', 1),
(19, '9789566205203', 3),
(20, '9783836599238', 1);


-- 18. Nuevos valores para carrito de compras
INSERT INTO carrito (usuario_id, isbn_libro, cantidad) VALUE
(2,   '9783836593397', 1),
(2,   '9788413411491', 2),
(2,   '9783836597982', 6),
(5,   '9789566205203', 2),
(8,   '9788410048478', 8),
(8,   '9788439732471', 1),
(8,   '9783836598187', 1),
(8,   '9788418933493', 2),
(12,  '9783836598408', 1),
(12,  '9788418933394', 1),
(12,  '9783836526470', 1),
(12,  '9783836597036', 1),
(19,  '9788419785855', 1);