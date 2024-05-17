CREATE TABLE Users(
  idUser integer(11),
  name varchar(100),
  surname varchar(100),
  email varchar(255) NOT NULL
);

INSERT INTO Users(name, surname, email)
VALUES ('Dupont', 'José', 'test@mail.com')
INSERT INTO Users(name, surname, email)
VALUES ('Garçias', 'Marc', 'veto@mail.com');

INSERT INTO Users(name, surname, email)
VALUES ('Leroi', 'Caroline', 'employe@mail.com');

