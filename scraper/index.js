const puppeteer = require("puppeteer-extra");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

let test = 0;

const scrapper = async (videoUrl) => {
  let time = 0;
  let id = setInterval(() => {
    time++;
    console.log(time);
  }, 1000);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1840,
    height: 1080,
    deviceScaleFactor: 1,
  });
  try {
    await page.goto(videoUrl);

    // wait 1sec
    // await returnPage.waitForTimeout(7000);
    const button1 = await page.waitForSelector(
      "#button.dropdown-trigger.style-scope.ytd-menu-renderer"
    );

    // const button1 = await page.$(
    //   "#button.dropdown-trigger.style-scope.ytd-menu-renderer"
    // );
    await button1.evaluate((b) => b.click());

    // await page.waitForTimeout(500);

    const button2 = await page.$$(".style-scope.ytd-menu-popup-renderer");
    await button2[2].evaluate((b) => b.click());

    // await page.waitForTimeout(2000);

    await page.waitForSelector(
      ".style-scope.ytd-transcript-search-panel-renderer"
    );

    const yt = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(
          ".style-scope.ytd-transcript-search-panel-renderer"
        )
      )[2]
        .innerText.trim()
        .split("\n")
    );

    // close browser
    console.log("closing now");
    // await page.close();

    clearInterval(id);
    await browser.close();

    return yt;
  } catch (error) {
    console.log(`error with puppeteer code --- ${error}`);
  }
};

module.exports = scrapper;
