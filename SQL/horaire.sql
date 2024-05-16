CREATE TABLE Horaire(
  Id_horaire INT PRIMARY KEY AUTO_INCREMENT
  jour_semaine VARCHAR(100),
  heure_debut TIME,
  heure_fin TIME
);
INSERT INTO Horaire(Id_horaire, jour_semaine, heure_debut, heure_fin) VALUES
(1, 'Lundi', '9:00', '18:00');