const express = require("express");
require("dotenv");
const app = express();
// routers
const dataRouter = require("../routes/data.js");
const timeRouter = require("../routes/time.js");
const textRouter = require("../routes/text.js");
const timeTextRouter = require("../routes/timeText.js");

/*   
    @desc: all 3 data text, timestamp, and both object pairs route 
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
    @desc: text and time only data route 
    @method: GET
    @query: required (?v=url)
*/
app.use("/api/v1/data/timeText", timeTextRouter);

app.listen(process.env.PORT || 5000);
