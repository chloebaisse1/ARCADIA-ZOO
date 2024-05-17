const express = require("express")
const port = process.env.PORT || 3000
const mysql = require("mysql")
const app = express()

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Zoo",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
})

connection.connect((err) => {
  if (err) {
    console.log("Erreur de connexion à la base de données")
    return
  }
  console.log("Connexion à la base de données réussie!")
})

app.get("/", (req, res) => {
  res.send("Hello World!")
})
const users = require("./routes/users")
app.use("/users", users)
app.listen(port, () => {
  console.log("Serveur en ligne!")
})
