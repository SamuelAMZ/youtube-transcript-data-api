const express = require("express");
require("dotenv");
const app = express();
const scrapper = require("../scraper/index.js");

app.get("/data", (req, res) => {
  let videoQuery = req.query.v;

  //   checks
  if (videoQuery === "" || videoQuery === null) {
    res.status(400).json({ error: { code: "400", message: "invalide video" } });
    return;
  }

  // data sending
  (async () => {
    try {
      console.log(req.query);
      let data = await scrapper(videoQuery);

      res.status(200).json({ data: data });
    } catch (error) {
      res.status(500).json({ error: { code: "500", message: "server error" } });
      console.log(error.message);
    }
  })();
});

app.listen(process.env.PORT || 5000);
