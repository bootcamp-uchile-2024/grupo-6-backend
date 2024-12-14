USE `paginas_selectas`;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    segundo_nombre VARCHAR(50),
    apellido_paterno VARCHAR(50) NOT NULL,
    apellido_materno VARCHAR(50) NOT NULL,
    correo_electronico VARCHAR(50) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    CONSTRAINT UC_correo UNIQUE(correo_electronico)
);

CREATE TABLE region (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE ciudad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_region INT NOT NULL,
    FOREIGN KEY (id_region) REFERENCES region(id)
);

CREATE TABLE comuna (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_ciudad INT NOT NULL,
    FOREIGN KEY (id_ciudad) REFERENCES ciudad(id)
);

CREATE TABLE direccion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    calle VARCHAR(150) NOT NULL,
    numero_calle VARCHAR(10) NOT NULL,
    numero_departamento VARCHAR(10),
    id_comuna INT NOT NULL,
    informacion_adicional VARCHAR(500),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    CONSTRAINT FK_id_comuna FOREIGN KEY (id_comuna) REFERENCES comuna(id)
);

CREATE TABLE tipoDireccion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE direccion_tipoDireccion (
    id_direccion INT,
    id_tipoDireccion INT,
    PRIMARY KEY (id_direccion, id_tipoDireccion),
    FOREIGN KEY (id_direccion) REFERENCES direccion(id),
    FOREIGN KEY (id_tipoDireccion) REFERENCES tipoDireccion(id)
);

CREATE TABLE genero (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE autor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE idioma_libro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE encuadernacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE editorial (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL
);


CREATE TABLE libro (
    isbn VARCHAR(30) PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    id_autor INT,
    stock_libro INT NOT NULL,
    precio INT NOT NULL,
    rating INT,
    id_editorial INT,
    id_idioma INT,
    id_encuadernacion INT,
    agno_publicacion INT,
    numero_paginas INT,
    descuento INT,
    dimensiones VARCHAR(20),
    codigo_barra VARCHAR(50),
    caratula VARCHAR(50) NOT NULL,
    resumen VARCHAR(2000),
    fecha_creacion DATE NOT NULL,
    novedad BOOLEAN NOT NULL,
    habilitado BOOLEAN NOT NULL,
    FOREIGN KEY (id_autor) REFERENCES autor(id),
    FOREIGN KEY (id_idioma) REFERENCES idioma_libro(id),
    FOREIGN KEY (id_encuadernacion) REFERENCES encuadernacion(id),
    FOREIGN KEY (id_editorial) REFERENCES editorial(id)
);


CREATE TABLE genero_libro (
    id_genero INT,
    isbn_libro VARCHAR(30),
    PRIMARY KEY (id_genero, isbn_libro),
    FOREIGN KEY (id_genero) REFERENCES genero(id),
    FOREIGN KEY (isbn_libro) REFERENCES libro(isbn)
);


CREATE TABLE resena (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    isbn_libro VARCHAR(30) NOT NULL,
    comentario VARCHAR(1000),
    rating INT NOT NULL,
    fecha DATE NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (isbn_libro) REFERENCES libro(isbn)
);

CREATE TABLE historial_compra (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    estatus_compra VARCHAR(50) NOT NULL,
    fecha_compra DATE NOT NULL,
    fecha_entrega DATE NOT NULL,
    id_direccion_entrega INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_direccion_entrega) REFERENCES direccion(id)
);

CREATE TABLE libro_compra (
    id_compra INT,
    isbn_libro VARCHAR(30),
    cantidad INT NOT NULL,
    PRIMARY KEY (id_compra, isbn_libro),
    FOREIGN KEY (id_compra) REFERENCES historial_compra(id),
    FOREIGN KEY (isbn_libro) REFERENCES libro(isbn)
);

-- adición de tabla carrito de compras

CREATE TABLE carrito (
    usuario_id INT,
    isbn_libro VARCHAR(30),
    cantidad INT,
    PRIMARY KEY (usuario_id, isbn_libro),
    FOREIGN KEY (usuario_id) REFERENCES usuario (id),
    FOREIGN KEY (isbn_libro) REFERENCES libro(isbn)
);