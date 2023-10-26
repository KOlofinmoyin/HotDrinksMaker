const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

// Path to the ChromeDriver executable
const chromeDriverPath = "/usr/local/bin/chromedriver";

describe("Make a cup of Lemon Tea", function () {
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

  it("Make a cup of Lemon Tea", async function () {
    await driver.get("http://127.0.0.1:5500/index.html");
    await driver.manage().window().maximize();

    // Wait for the lemonTeaButton to be clickable
    const lemonTeaButton = await driver.wait(
      until.elementIsVisible(driver.findElement(By.id("lemonTeaButton")), 10000)
    );
    await lemonTeaButton.click();

    // Wait for the lines to appear
    const linesToAssert = [
      "Making a cup of Lemon Tea:",
      "1. Boil some water",
      "2. Steep the water in the tea",
      "3. Pour tea in the cup",
      "4. Add lemon",
      "5. Ready.",
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
