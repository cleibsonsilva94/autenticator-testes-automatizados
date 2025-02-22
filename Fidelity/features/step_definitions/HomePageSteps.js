// ====================================== HOME PAGE FUNCTIONS ======================================= \\
const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { getDriver } = require('../support/driver');
const xpathsHomePage = require('../support/xpathsHomePage');
const url = require('../support/url');
const timeout = 80000;

Then('I should be redirected to the homepage {string}', async function (expectedUrl) {
  const driver = await getDriver();
  try {
    await driver.wait(until.elementLocated(By.xpath(xpathsHomePage.XPATH_WELCOME_MESSAGE)), timeout);
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl !== expectedUrl) {
      throw new Error(`Expected URL to be ${expectedUrl}, but got ${currentUrl}`);
    }
    console.log(`Successfully redirected to the homepage: ${currentUrl}`);
  } catch (error) {
    console.log(`Error: Element with XPath '${xpathsHomePage.XPATH_WELCOME_MESSAGE}' not found`);
    throw error;
  }
});

Then('I should see the welcome message {string}', async function (expectedMessage) {
    const driver = await getDriver();
    try {
      await driver.wait(until.elementLocated(By.xpath(xpathsHomePage.XPATH_WELCOME_MESSAGE)), timeout);
      const welcomeMessageElement = await driver.findElement(By.xpath(xpathsHomePage.XPATH_WELCOME_MESSAGE));
      const actualMessage = await welcomeMessageElement.getText();
      if (actualMessage !== expectedMessage) {
        throw new Error(`Expected welcome message to be "${expectedMessage}", but got "${actualMessage}"`);
      }
      console.log(`Successfully verified welcome message: ${actualMessage}`);
    } catch (error) {
      console.log(`Error in verifying welcome message.`);
      throw error;
    }
  });