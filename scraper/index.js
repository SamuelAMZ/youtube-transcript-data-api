const puppeteer = require("puppeteer-extra");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const scrapper = async (videoUrl) => {
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
    await page.waitForTimeout(7000);

    const button1 = await page.$(
      "#button.dropdown-trigger.style-scope.ytd-menu-renderer"
    );
    await button1.evaluate((b) => b.click());

    // await page.waitForTimeout(500);

    const button2 = await page.$$(".style-scope.ytd-menu-popup-renderer");
    await button2[2].evaluate((b) => b.click());

    await page.waitForTimeout(5000);

    const yt = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(
          ".style-scope.ytd-transcript-search-panel-renderer"
        )
      )[2]
        .innerText.trim()
        .split("\n")
    );

    return yt;
  } catch (error) {
    console.log(`error with puppeteer code --- ${error}`);
  }

  // close browser
  await browser.close();
};

module.exports = scrapper;
