const express = require("express");
require("dotenv");
const app = express();

app.get("/data", (req, res) => {
  res.send("ok");
});

app.listen(process.env.PORT || 5000);
