# ZOO ARCADIA

Creation application web pour le ZOO Arcadia

# Pre requis

Avoir un IDE ou traitement de texte
Avoir une connexion internet
Avoir un compte GitHub ou en créer un
Installer l'extension PHP Server sur visual studio code ( avoir deja installé PHP sur son ordinateur) pour pouvoir simuler un serveur et ouvrir le site en local pour regarder si tout fonctionne correctement.
Installation de NODE.js et NPM
verifier si c'est installé avec la commande node --v
verifier si npm est installé avec la commande npm --v
Installation Bootstrap et bootstrap Icons pour pouvoir inserer des icons.
MySQL/ MariaDB/ PostGreSQL pour creer une base de donnée relationnelle

# Installation

# Démarrage

- creation d'un dossier sur le bureau ( dossier ECF)
- creation d'un autre dossier dans le dossier ECF au nom de ZOO ARCADIA
- ouverture du dossier avec visual sutdio code
- creation d'un fichier Readme.md pour expliquer les etapes
- connexion a GitHub via Visual Studio code

- Page index.html qui contient :
  le header et le footer de la page. Le contenu est a injecter dans la balise <main id="main-page">

# Creation dossier Router avec :

- 1 fichier allRoutes.js ( contient toutes les routes de l'application, et définit aussi la variable websiteName qui representera le nom de l'application web)
- 1 fichier Routes.js ( définit une classe Route qui répresente une route de l'application.
  Chaque route possède une URL, un chemin vers un fichier HTML, un titre, et un chemin vers un fichier JavaScript ( facultatif))
- 1 fichier Router.js ( importe la calsse Route et les variables " AllRoutes.js" et "WebsiteName" du fichier AllRoutes.js. Il contient la loique de routage)

# Contenu de mon site :

- page index.html avec le contenu de mon site
- page Home qui sera la page d'accueil

- 1 dossier Pages avec a l'interieur :
- page habitats ( vue globale qui references les 3 habitats)
- page services (descriptions des differents services proposés)
- page avis ( formulaire)
- page contact ( formulaire)
- page de connexion

a l'interieur du dossier pages j'ai egalement crée un autre dossier concernant les habitats ( 1 page par habitats)

- Jungle
- Marais
- Savane

- Dossier Auth a l'interieur du dossier Pages avec :

- espace admin
- espace connexion
- espace veterinaire
- espace employé

- un dossier images contenant toutes les images de mon site

- un dossier scss qui contient :
- custom.scss qui contient mes couleurs defini depuis mes maquettes
- mon fichier main.scss qui contient toutes les mises en pages/formes du contenu de mon application ( couleurs, taille, disposition, icones....)

Un dossier qui contient le javascript de mon application ( pour les connexions bdd)

Effectuer une sauvegarde du site afin de pouvoir se baser si apres les modifications des elements sont cassés.
Realisation d'un COMMIT a l'aide de Git.
(Onglet source controle)
Mettre un message de COMMIT ( message de validation qui explique les modifications effectuées)
( le COMMIT doit etre clair dans les explications)

Effectuer un COMMIT & push pour pouvoir interagir avec le depot distant ( Repository sur GitHub)

# Fabriqué avec :

Boostrap / Boostrap icons ( framework front end)
MySQL ( service de base de données back end)

# versions

bootstrap & bootstrap icons 5.3.3
php 8.3.6
npm 10.5.0
node.js 20.12.2
MySQL 8.2
