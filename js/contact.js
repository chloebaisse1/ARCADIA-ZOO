const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const Titre = document.getElementById("Titre").value
  const Description = document.getElementById("Description").value
  const Email = document.getElementById("Email").value

  console.log(Titre)
  console.log(Description)
  console.log(Email)
})
