<?php

$dsn = 'mysql:host=localhost;dbname=arcadia';
$username = 'admin_php';
$password = '3f7zhhRn4NH69R';

try{
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $emailForm = $_POST['email'];
    $passwordForm = $_POST['password'];

    //Récupérer les utilisateurs
    $query = "SELECT * FROM users WHERE email= :email";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':email', $emailForm);
    $stmt->execute();

    // Est-ce que l'utilisateur (mail) existe ?
    if($stmt->rowCount() == 1){
      $monUser = $stmt->fetch(PDO::FETCH_ASSOC);
      if(password_verify($passwordForm, $monUser['password'])){
        echo "Connexion réussie ! bienvenue "  .$monUser['name']. " " .$monUser['surname'];
    }else{
      echo "Mot de passe incorrect";
    }
  }
  else{
      echo "Utilisateur introuvable, êtes-vous sûr de votre adresse e-mail ?";
  }
}

catch (PDOException $e){
    echo "Erreur de connexion à la base de données : ". $e->getMessage();
}

?>