import Route from "./Route.js"

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/services", "Services", "/pages/services.html"),
  new Route("/habitats", "Habitats", "/pages/habitats.html"),
  new Route(
    "/connexion",
    "Connexion",
    "/pages/auth/connexion.html",
    "/js/auth/connexion.js"
  ),
  new Route("/contact", "Contact", "/pages/contact.html"),
  new Route("/admin", "Admin", "/pages/auth/admin.html", "/js/auth/admin.js"),
  new Route(
    "/veterinaire",
    "Veterinaire",
    "/pages/auth/veterinaire.html",
    "/js/auth/veterinaire.js"
  ),
  new Route(
    "/employe",
    "Employe",
    "/pages/auth/employe.html",
    "/js/auth/employe.js"
  ),
  new Route("/avis", "Avis", "/pages/avis.html"),
  new Route("/jungle", "Jungle", "/pages/leshabitats/jungle.html"),
  new Route("/savane", "Savane", "/pages/leshabitats/savane.html"),
  new Route("/marais", "Marais", "/pages/leshabitats/marais.html"),
  new Route("/habitats", "Retour page habitats", "/pages/habitats.html"),
]
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo"
