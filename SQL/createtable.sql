CREATE DATABASE ArcadiaZoo


CREATE TABLE Animal(
    animal_id INT ,
    prenom varchar(50),
    race varchar(50),
    habitat varchar(50)
);
INSERT INTO Animal(animal_id, prenom, race, habitat) VALUES
(10, 'Tit', 'Singe', 'Jungle');


CREATE TABLE Habitat(
  nom varchar(50),
  description varchar(50),
  liste varchar(150)
);

INSERT INTO Habitat(nom, description, liste) VALUES
('Jungle', 'Cet habitat de 3000m2 a été créé afin de pouvoir reproduire le plus naturellement possible les conditions de vies de nos animaux. Oiseaux en libertés, chaleurs tropicale et végétalisations sont au rendez-vous', 'Singes, Toucans, Macaques, Perroquets');


CREATE TABLE Compterenduveto(
  animal_id INT,
  etat varchar(50),
  nourriture VARCHAR(50),
  quantité VARCHAR(50),
  date DATE,
  detail TEXT
);
INSERT INTO Compterenduveto(animal_id, etat, nourriture, quantité, date, detail) VALUES
(13, 'en pleine forme', 'graines', '600g','2024-04-18', 'Coco apprend a dire bonjour et merci');



CREATE TABLE Service(
  id INT,
  nom varchar(50),
  description TEXT
);
INSERT INTO Service(id, nom, description) VALUES
(3, 'Mon petit guide', 'visite des differents habitats du zoo avec un guide( gratuit)');



CREATE TABLE Avis(
  pseudo varchar(50),
  commentaire TEXT
);
INSERT INTO avis(pseudo, commentaire) VALUES
('Pauline, Olivier', 'Visite spectaculaire !! Le Zoo est magnifique et les animaux sont vraiment rayonnants ! Les services de restauration on très vite été validé par toute la famille !! On reviendra !!');



CREATE TABLE Users(
  id INT,
  nom varchar(50),
  prenom varchar(50),
  email varchar(50)
);
INSERT INTO Users(id, nom, prenom, email) VALUES
(3, 'Leroi', 'Caroline', 'employe@mail.com');



CREATE TABLE Horaire(
  date varchar(150),
  heure TIME
);
INSERT INTO Horaire(date, heure) VALUES
('Ouvert tous les jours, vacances et jours feriés inclus', '09:00:00 - 18:00:00');



CREATE TABLE Employe(
  animal_id INT,
  nourriture varchar(50),
  quantité INT,
  date DATE,
  heure TIME
);
INSERT INTO Employe(animal_id, nourriture, quantité, date, heure) VALUES
(13, 'melanges de graines', '600', '2024-04-21', '07:00:00');
