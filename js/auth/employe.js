const mailInput = document.getElementById("EmailInput")
const passwordInput = document.getElementById("PasswordInput")
const btnEmploye = document.getElementById("btnEmploye")

btnEmploye.addEventListener("click", checkCredentials)

function checkCredentials() {
  // Ici il faudra appeler l'API pour vérifier les credentials en BDD

  if (
    mailInput.value == "employe@mail.com" &&
    passwordInput.value == "ZqelCOJD"
  ) {
    alert("Vous êtes connecté")
    // Ici il faudra appeler l'API pour vérifier les credentials en BDD

    // il faudra recuperer le vrai token
    const token = "glroeoelepeeee"

    //placer ce token en cookie
    window.location.replace("/connexion")
    //rediriger vers la page d'accueil
  } else {
    mailInput.classList.add("is-invalid")
    passwordInput.classList.add("is-invalid")
  }
}
