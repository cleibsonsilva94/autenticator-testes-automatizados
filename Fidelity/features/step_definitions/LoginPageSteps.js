// ====================================== LOGIN PAGE FUNCTIONS ======================================== \\

const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { getDriver } = require('../support/driver');
const xpathsLoginPage = require('../support/xpathsLoginPage');
const url = require('../support/url');
const timeout = 80000;

Given('I am on the Autenticator login page', async function () {
  const driver = await getDriver();
  await driver.get(url.UrlLogin); ""
});

When('I click on the User field and type {string}', async function (username) {
  const driver = await getDriver();
  await driver.wait(until.elementLocated(By.xpath(xpathsLoginPage.XPATH_FOR_USERNAME_FIELD)), timeout);
  await driver.findElement(By.xpath(xpathsLoginPage.XPATH_FOR_USERNAME_FIELD)).sendKeys(username);
});

When('I click on the Password field and type {string}', async function (password) {
  const driver = await getDriver();
  await driver.wait(until.elementLocated(By.xpath(xpathsLoginPage.XPATH_FOR_PASSWORD_FIELD)), timeout);
  await driver.findElement(By.xpath(xpathsLoginPage.XPATH_FOR_PASSWORD_FIELD)).sendKeys(password);
});

When('I click on Entrar', async function () {
  const driver = await getDriver();
  await driver.wait(until.elementLocated(By.xpath(xpathsLoginPage.XPATH_LOGIN_BUTTON)), timeout);
  await driver.findElement(By.xpath(xpathsLoginPage.XPATH_LOGIN_BUTTON)).click();
});

Then('I should see the error message {string}', async function (expectedMessage) {
  const driver = await getDriver();
  const currentUrl = await driver.getCurrentUrl();

  if (currentUrl === url.UrlHome) {
    throw new Error('The user was redirected to the homepage with invalid credentials.');
  }

  console.log('The user was not redirected to the homepage.');
  const errorElement = await driver.wait(
    until.elementLocated(By.xpath(xpathsLoginPage.XPATH_ERROR_MESSAGE)),
    timeout
  );
  const actualMessage = await errorElement.getText();
  if (actualMessage !== expectedMessage) {
    throw new Error(`Expected error message to be "${expectedMessage}", but got "${actualMessage}"`);
  }
  console.log(`Error message displayed as expected: "${actualMessage}"`);
});

Then('I shouldnt be directed to the to the homepage {string}', async function (unexpectedUrl) {
  const driver = await getDriver();
  const currentUrl = await driver.getCurrentUrl();

  if (currentUrl === unexpectedUrl) {
    throw new Error(`Unexpectedly redirected to logged in area: ${currentUrl}`);
  } else {
    console.log(`Not directed to logged in area: ${currentUrl}, as expected.`);
  }
});