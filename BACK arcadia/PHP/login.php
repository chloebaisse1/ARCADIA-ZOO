<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connexion</title>
</head>
<body>
  <h1>Connexion</h1>
  <form action="loginPost.php" method="POST">
    <label for="email">Adresse e-mail :</label>
    <input type="email" name="email" required /> <br><br>

    <label for="password">Mot de passe :</label>
    <input type="password" name="password" required /> <br><br>


    <input type="submit" value="Se connecter" />
  </form>
</body>
</html>