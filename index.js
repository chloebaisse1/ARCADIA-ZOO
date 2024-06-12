const express = require("express")
const mysql = require("mysql")
const port = process.env.PORT || 3000

const app = express()

app.get("/", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "arcadia",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  })

  connection.connect((err) => {
    if (err) {
      console.error("Erreur de connexion à la base de données : " + err.stack)
      return
    }
    console.log("Connecté à la base de données")
  })

  connection.query("SELECT * FROM user", (err, rows, fields) => {
    if (err) throw err
    res.json(rows)
  })

  connection.end()
})

app.listen(port, () => {
  console.log("Serveur en ligne !")
})
