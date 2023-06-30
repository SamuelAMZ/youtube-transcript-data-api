const express = require("express");
require("dotenv");
const app = express();
// routers
const dataRouter = require("../routes/data.js");
const timeRouter = require("../routes/time.js");
const textRouter = require("../routes/text.js");
const timeTextRouter = require("../routes/timeText.js");
const wordsRouter = require("../routes/words.js");
const sentencesRouter = require("../routes/sentences.js");
// puppeteer
const puppeteer = require("puppeteer-extra");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

app.get("/", async (req, res) => {
  res.send("server up");
});

/*   
    @desc: all 3 data; text, timestamp, and both object pairs route 
    @method: GET
    @query: required (?v=url)
*/
app.use("/api/v1/data", dataRouter);

/*   
    @desc: text only data route 
    @method: GET
    @query: required (?v=url)
*/
app.use("/api/v1/data/text", textRouter);

/*   
    @desc: time only data route 
    @method: GET
    @query: required (?v=url)
*/
app.use("/api/v1/data/time", timeRouter);

/*   
    @desc: text and time pairs only data route 
    @method: GET
    @query: required (?v=url)
*/
app.use("/api/v1/data/timeText", timeTextRouter);

/*   
    @desc: most present words classed data route 
    @method: GET
    @query: required (?v=url)
*/
app.use("/api/v1/data/words", wordsRouter);

/*   
    @desc: most present sentences classed 2 and 3 words data route 
    @method: GET
    @query: required (?v=url)
*/
app.use("/api/v1/data/sentences", sentencesRouter);

app.listen(process.env.PORT || 6000, () => {
  console.log("server up");
});
