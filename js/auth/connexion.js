const mailInput = document.getElementById("EmailInput")
const passwordInput = document.getElementById("PasswordInput")
const btnAdmin = document.getElementById("btnAdmin")
const btnVeterinaire = document.getElementById("btnVeterinaire")
const btnEmploye = document.getElementById("btnEmploye")

btnAdmin.addEventListener("click", checkCredentials)
btnVeterinaire.addEventListener("click", checkCredentials)
btnEmploye.addEventListener("click", checkCredentials)

function checkCredentials() {
  // Ici il faudra appeler l'API pour vérifier les credentials en BDD

  if (mailInput.value == "test@mail.com" && passwordInput.value == "123") {
    // Il faudra recuperer le vrai token
    const token = " jgleoejfngmfopefjg"
    setToken(token)
    // placer ce token en cookie

    setCookie(RoleCookieName, "admin", 7)
    window.location.replace("./pages/auth/admin.html")
    //rediriger vers la page admin
  } else {
    mailInput.classList.add("is-invalid")
    passwordInput.classList.add("is-invalid")
  }
  // Ici il faudra appeler l'API pour vérifier les credentials en BDD

  if (mailInput.value == "veto@mail.com" && passwordInput.value == "456") {
    // Il faudra recuperer le vrai token
    const token = " glroeoelepeeee"
    setToken(token)
    // placer ce token en cookie
    setCookie(RoleCookieName, "veterinaire", 7)
    window.location.replace("./pages/auth/veterinaire.html")
    //rediriger vers la page veterinaire
  } else {
    mailInput.classList.add("is-invalid")
    passwordInput.classList.add("is-invalid")
  }
  // Ici il faudra appeler l'API pour vérifier les credentials en BDD
  if (mailInput.value == "employe@mail.com" && passwordInput.value == "789") {
    // Il faudra recuperer le vrai token
    const token = "lalaorehggggoe"
    setToken(token)
    // placer ce token en cookie
    setCookie(RoleCookieName, "employe", 7)
    window.location.replace("./pages/auth/employe.html")
    //rediriger vers la page employe
  } else {
    mailInput.classList.add("is-invalid")
    passwordInput.classList.add("is-invalid")
  }
}
