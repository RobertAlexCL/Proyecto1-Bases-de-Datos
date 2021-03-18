CREATE DATABASE DataBaseProject;

-- Descargar ext
CREATE TABLE Usuario(
  id_usuario uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(50) NOT NULL,
  Contraseña VARCHAR(50) NOT NULL,
  Suscripcion BOOLEAN NOT NULL,
  Administrador BOOLEAN NOT NULL,
  nicio_suscripcion VARCHAR(50) NOT NULL,
  R_artista BOOLEAN NOT NULL,
  R_manager BOOLEAN NOT NULL,
  Nombres VARCHAR(50) NOT NULL,
  Apellidos VARCHAR(50) NOT NULL,
  reproducción INT NOT NULL,
  PRIMARY KEY(id_usuario)
);

INSERT INTO Usuario (user_name, Contraseña, Nombres, Apellidos) VALUES ('rssto', 'D@niel48948994', 'Roberto', 'Castillo');