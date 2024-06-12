const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).send("Liste des utilisateurs")
})
router.get("/:id", (req, res) => {
  req.params.id
  module.exports = router
})
