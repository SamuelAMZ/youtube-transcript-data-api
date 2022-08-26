const express = require("express");
const timeRouter = express.Router();
const scrapper = require("../scraper/index.js");
const { timeModeler } = require("../scraper/dataModeling.js");

timeRouter.get("/", (req, res) => {
  let videoQuery = req.query.v;

  //   checks
  if (!videoQuery || videoQuery === undefined) {
    res.status(400).json({
      error: {
        code: "400",
        message:
          "provide a valide youtube video URL as query parameter eg: /v?url ",
      },
    });
    return;
  } else if (videoQuery === "" || videoQuery === null) {
    res.status(400).json({ error: { code: "400", message: "invalide video" } });
    return;
  }

  // data sending
  (async () => {
    try {
      console.log(req.query);
      let data = await scrapper(videoQuery);
      let dataContent = timeModeler(data);

      res.status(200).json({ data: dataContent });
    } catch (error) {
      res.status(500).json({ error: { code: "500", message: "server error" } });
      console.log(error.message);
    }
  })();
});

module.exports = timeRouter;
