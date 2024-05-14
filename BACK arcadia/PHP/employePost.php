<?php

$dsn = 'mysql:host=localhost;dbname=arcadia';
$username = 'admin_php';
$password = '3f7zhhRn4NH69R';

try{
  $pdo = new PDO($dsn, $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


  $nameForm = $_POST['name'];
  $surnameForm = $_POST['surname'];
  $emailForm = $_POST['email'];
  $passwordForm = $_POST['password'];


  // Verifier l'unicité de l'adresse mail
  $query = "SELECT * FROM users WHERE email= :email";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':email', $emailForm);
    $stmt->execute();

    // Est-ce que l'utilisateur (mail) existe ?
    if($stmt->rowCount() == 0){
        die("L'adresse mail est déjà utilisée");
    }

  // Hachage du mot de passe (encryptage)

  $hashedPassword = password_hash($passwordForm, PASSWORD_DEFAULT);

  //Inserer les données dans la base de donnée
  $insertQuery = "INSERT INTO users (name, surname, email, password) VALUES (:name, :surname, :email, :password)";
  $stmt = $pdo->prepare($insertQuery);
  $stmt->bindParam(':name', $nameForm);
  $stmt->bindParam(':surname', $surnameForm);
  $stmt->bindParam(':email', $emailForm);
  $stmt->bindParam(':password', $hashedPassword);
  $stmt->execute();

  echo "Connexion réussie";
}
catch (PDOException $e){
  echo "Erreur de connexion : ". $e->getMessage();
}


?>