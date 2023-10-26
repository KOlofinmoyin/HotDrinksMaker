const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

// Path to the ChromeDriver executable
const chromeDriverPath = "/usr/local/bin/chromedriver";

describe("Make a cup of Coffee", function () {
  this.timeout(30000); //
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

  it("Make a cup of Coffee", async function () {
    await driver.get("http://127.0.0.1:5500/index.html");
    await driver.manage().window().maximize();

    // Wait for the lemonTeaButton to be clickable
    const coffeeButton = await driver.wait(
      until.elementIsVisible(driver.findElement(By.id("coffeeButton")), 10000)
    );
    await coffeeButton.click();

    // Wait for the lines to appear
    const linesToAssert = [
      "Making a cup of Coffee:",
      "1. Boil some water",
      "2. Brew the coffee grounds",
      "3. Pour coffee in the cup",
      "4. Add sugar and milk",
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
