-- ALTER TABLE autor_libro
-- DROP FOREIGN KEY autor_libro_ibfk_2;

-- ALTER TABLE autor_libro
-- ADD CONSTRAINT autor_libro_ibfk_2
-- FOREIGN KEY (libro_isbn) REFERENCES libro(id) ON DELETE CASCADE;

ALTER TABLE carrito
DROP FOREIGN KEY carrito_ibfk_2;

ALTER TABLE carrito
ADD CONSTRAINT carrito_ibfk_2
FOREIGN KEY (isbn_libro) REFERENCES libro(isbn) ON DELETE CASCADE;

ALTER TABLE genero_libro
DROP FOREIGN KEY genero_libro_ibfk_2;

ALTER TABLE genero_libro
ADD CONSTRAINT genero_libro_ibfk_2
FOREIGN KEY (isbn_libro) REFERENCES libro(isbn) ON DELETE CASCADE;

ALTER TABLE libro_compra
DROP FOREIGN KEY libro_compra_ibfk_2;

ALTER TABLE libro_compra
ADD CONSTRAINT libro_compra_ibfk_2
FOREIGN KEY (isbn_libro) REFERENCES libro(isbn) ON DELETE CASCADE;

ALTER TABLE resena
DROP FOREIGN KEY resena_ibfk_2;

ALTER TABLE resena
ADD CONSTRAINT resena_ibfk_2
FOREIGN KEY (isbn_libro) REFERENCES libro(isbn) ON DELETE CASCADE;