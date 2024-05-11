const mailInput = document.getElementById("EmailInput")
const passwordInput = document.getElementById("PasswordInput")
const btnVeterinaire = document.getElementById("btnVeterinaire")

btnVeterinaire.addEventListener("click", checkCredentials)

function checkCredentials() {
  // Ici il faudra appeler l'API pour vérifier les credentials en BDD

  if (mailInput.value == "veto@mail.com" && passwordInput.value == "d5A8koVM") {
    alert("Vous êtes connecté")

    // Il faudra recuperer le vrai token
    const token = "lalaorehggggoe"

    //placer ce token en cookie
    window.location.replace("/connexion")
    //rediriger vers la page de connexion
  } else {
    mailInput.classList.add("is-invalid")
    passwordInput.classList.add("is-invalid")
  }
}
