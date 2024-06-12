const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const Pseudo = document.getElementById("Pseudo").value
  const Avis = document.getElementById("Avis").value
  console.log(Pseudo)
  console.log(Avis)
})
