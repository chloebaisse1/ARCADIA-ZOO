const mailInput = document.getElementById("EmailInput")
const passwordInput = document.getElementById("PasswordInput")
const btnAdmin = document.getElementById("btnAdmin")

btnAdmin.addEventListener("click", checkCredentials)

function checkCredentials() {
  // Ici il faudra appeler l'API pour vérifier les credentials en BDD

  if (mailInput.value == "test@mail.com" && passwordInput.value == "123") {
    alert("Vous êtes connecté")

    // Il faudra recuperer le vrai token
    const token = "jgleoejfngmfopefjg"

    // placer ce token en cookie

    window.location.replace("/admin")
    //rediriger vers la page d'accueil ou créer une page admin ?
  } else {
    mailInput.classList.add("is-invalid")
    passwordInput.classList.add("is-invalid")
  }
}
