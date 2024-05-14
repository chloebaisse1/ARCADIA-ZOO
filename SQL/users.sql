CREATE TABLE Users(
  idUser integer AUTO_INCREMENT,
  name varchar(100),
  surname varchar(100),
  email varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  PRIMARY KEY (idUser)
);

-- creation de l'utilisateur
CREATE USER 'test'@'localhost' IDENTIFIED BY '3f7zhyRn4NH69PP';

-- attribution des droits sur la table "users"
GRANT SELECT, INSERT, UPDATE, DELETE ON arcadia.users TO 'test'@'localhost';

-- insertion des utilisateurs en BDD
-- le mot de passe est crypté

INSERT INTO Users(name, surname, email, password)
VALUES ('Dupont', 'José', 'admin@mail.com', '$2y$10$swsSHqtd8HPqCyd6WH6.qeDLbP.mypJoYPC/5QvH.9MiXB2qa5.Zq');

INSERT INTO Users(name, surname, email, password)
VALUES ('Garçias', 'Marc', 'veto@mail.com', '$2y$10$3VwdWS2ru7ruk9MsxvCXSOXi8X1aC4pefcqCeXZq/1X9Gga9qdUlm');

INSERT INTO Users(name, surname, email, password)
VALUES ('Leroi', 'Caroline', 'employe@mail.com', '$2y$10$4ArtXQT9JgFacnFX3b3PiOqymoAKUiFx2LEV8.jct4nb3nGO3fe6u');

