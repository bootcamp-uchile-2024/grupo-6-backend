-- 1. Concatenate 'nombre' and 'segundo_nombre' into 'nombre' before dropping 'segundo_nombre'
UPDATE usuario 
SET nombre = CONCAT_WS(' ', nombre, segundo_nombre);

-- 2. Delete the 'segundo_nombre' column
ALTER TABLE usuario DROP COLUMN segundo_nombre;

-- 3. Rename 'nombre' column to 'nombres'
ALTER TABLE usuario CHANGE COLUMN nombre nombres VARCHAR(70);

-- 4. Add new columns 'rol' and 'estado'
ALTER TABLE usuario 
ADD COLUMN rol VARCHAR(15) NOT NULL,
ADD COLUMN estado VARCHAR(15) NOT NULL;


-- 5. Update 'rol' and 'estado' values for 20 rows
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 1;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 2;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 3;
UPDATE usuario SET rol = 'USER', estado = 'INACTIVO' WHERE id = 4;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 5;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 6;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 7;
UPDATE usuario SET rol = 'USER', estado = 'INACTIVO' WHERE id = 8;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 9;
UPDATE usuario SET rol = 'USER', estado = 'INACTIVO' WHERE id = 10;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 11;
UPDATE usuario SET rol = 'USER', estado = 'INACTIVO' WHERE id = 12;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 13;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 14;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 15;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 16;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 17;
UPDATE usuario SET rol = 'USER', estado = 'INACTIVO' WHERE id = 18;
UPDATE usuario SET rol = 'USER', estado = 'ACTIVO' WHERE id = 19;
UPDATE usuario SET rol = 'USER', estado = 'INACTIVO' WHERE id = 20;

-- 6. Update the 'contrasena' column with MD5 hashed values for each user
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 1;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 2;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 3;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 4;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 5;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 6;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 7;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 8;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 9;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 10;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 11;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 12;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 13;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 14;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 15;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 16;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 17;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 18;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 19;
UPDATE usuario SET contrasena = MD5(contrasena) WHERE id = 20;


-- 7. Add new column 'estado' for direccion table.
ALTER TABLE direccion 
ADD COLUMN estado VARCHAR(15) NOT NULL;

UPDATE direccion SET estado = 'ACTIVO' WHERE id = 1;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 2;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 3;
UPDATE direccion SET estado = 'INACTIVO' WHERE id = 4;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 5;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 6;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 7;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 8;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 9;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 10;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 11;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 12;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 13;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 14;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 15;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 16;
UPDATE direccion SET estado = 'ACTIVO' WHERE id = 17;
UPDATE direccion SET estado = 'INACTIVO' WHERE id = 18;
UPDATE direccion SET estado = 'INACTIVO' WHERE id = 19;
UPDATE direccion SET estado = 'INACTIVO' WHERE id = 20;


-- 8. Insert admin values.
INSERT INTO usuario (nombres, apellido_paterno, apellido_materno, correo_electronico, contrasena, rol, estado) VALUES 
('admin', 'admin', 'admin', 'admin@gmail.com', '4f96c0b7024e32237f6c9b4d6848376b', 'ADMIN', "ACTIVO");


