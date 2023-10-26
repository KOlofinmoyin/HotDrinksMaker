const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

// Path to the ChromeDriver executable
const chromeDriverPath = "/usr/local/bin/chromedriver";

describe("Make a cup of Hot-Chocolate", function () {
  this.timeout(30000); // Increase the timeout for the entire test suite
  let driver;

  beforeEach(async function () {
    const { Builder } = require("selenium-webdriver");
    const { Options } = require("selenium-webdriver/chrome");

    // Create Chrome options
    const chromeOptions = new Options();

    // Set the "start-maximized" argument to maximize the window
    chromeOptions.addArguments("--start-maximized");

    // Set headless mode
    // chromeOptions.headless();

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
  });

  afterEach(async function () {
    await driver.quit();
  });

  it("Make a cup of Hot-Chocolate", async function () {
    await driver.get("http://127.0.0.1:5500/index.html");
    await driver.manage().window().maximize();

    // Wait for the lemonTeaButton to be clickable
    const chocolateButton = await driver.wait(
      until.elementIsVisible(
        driver.findElement(By.id("chocolateButton")),
        10000
      )
    );
    await chocolateButton.click();

    // Wait for the lines to appear
    const linesToAssert = [
      "Making a cup of Hot-Chocolate:",
      "1. Boil some water",
      "2. Add drinking chocolate powder to the water",
      "3. Pour chocolate in the cup",
      "4. Ready.",
    ];

    for (const line of linesToAssert) {
      // Use an explicit wait to wait for the element
      const element = await driver.wait(
        until.elementLocated(
          By.xpath(`//*[contains(text(), '${line}')]`),
          10000
        )
      );

      assert(
        await element.isDisplayed(),
        `Line "${line}" not found on the webpage.`
      );
    }
  });
});
