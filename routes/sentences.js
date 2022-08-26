const express = require("express");
const sentencesRouter = express.Router();

sentencesRouter.get("/", (req, res) => {
  res.json("working on it");
});

module.exports = sentencesRouter;
