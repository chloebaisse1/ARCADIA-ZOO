<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Compte Vétérinaire</title>
</head>
<body>
  <h1>Espace Vétérinaire</h1>
  <form action="veterinairePost.php" method="POST">
    <label for="name">Nom : </label>
    <input type="text" name="name"/> <br><br>

    <label for="surname">Prénom : </label>
    <input type="text" name="surname"/> <br><br>

    <label for="email">Adresse e-mail : </label>
    <input type="email" name="email" required/> <br><br>

    <label for="password">Mot de passe : </label>
    <input type="password" name="password" required/> <br><br>

    <input type="submit" value="Se connecter" />
  </form>
</body>
</html>