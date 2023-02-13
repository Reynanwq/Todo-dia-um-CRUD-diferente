CREATE DATABASE dbApiCarros;

USE dbApiCarros;

CREATE TABLE carros (
    codigo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(50) NOT NULL,
    placa VARCHAR(7) NOT NULL
);

INSERT INTO carros (modelo, placa) VALUES ('Toyota Corola', 'GGG3XT3');
INSERT INTO carros (modelo, placa) VALUES ('Honda Civic', 'ELV1354');

SELECT * FROM carros;
