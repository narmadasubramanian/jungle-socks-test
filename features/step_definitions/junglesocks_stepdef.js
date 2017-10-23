var seleniumWebdriver = require('selenium-webdriver');
var defineSupportCode = require('cucumber');
var asserts = require('asserts');

defineSupportCode(function(context) {
  var setWorldConstructor = context.setWorldConstructor;
  var Given = context.Given;
  var When = context.When;
  var Then = context.Then;

  Given('the user goes to the jungle socks website', function() {
    return this.driver.get(this.url)
    .then(_ => driver.wait(driver.findElement(By.xpath("/html/body/h1[contains(text(),'Welcome To Jungle Socks!')]")).isDisplayed(), this.timeout));
  });

  When(/^the user adds "([^"]*)" for zebra socks"$/, function(quantity) {
    return this.putQuantity('zebra', quantity);
  });

  When(/^the user adds "([^"]*)" for lion socks"$/, function(quantity) {
    return this.putQuantity('lion', quantity);
  });

  When(/^the user adds "([^"]*)" for elephant socks"$/, function(quantity) {
    return this.putQuantity('elephant', quantity);
  });

  When(/^the user adds "([^"]*)" for giraffe socks"$/, function(quantity) {
    return this.putQuantity('giraffe', quantity);
  });

  When(/^the user selects "([^"]*)" for the ship to state"$/, function(state) {
    return this.driver.findElement(By.xpath("//*[@name='state']").sendKeys(state);
  });

  When('the user clicks on the checkout button to go to the error page', function() {
    return this.driver.findElement(By.xpath("/html/body/form/input").click()
    .then(_ => driver.wait(driver.findElement(By.xpath("/html/body/h1[contains(text(),'You have encountered an error')]")).isDisplayed(), this.timeout));
  });

  Then(/^the user should get an error message with "([^"]*)""$/, function(expectedErrorText) {
    this.driver.findElement(By.xpath("/html/body/h2")).getText().then(actualErrorText => {
        assert.equal(actualErrorText, expectedErrorText);
      });
  });



  When('the user clicks on the checkout button to go to the confirmation page', function() {
    return this.driver.findElement(By.xpath("/html/body/form/input").click()
    .then(_ => driver.wait(driver.findElement(By.xpath("/html/body/h1[contains(text(),'Please Confirm Your Order')]")).isDisplayed(), this.timeout));
  });

  When(/^the user validates "([^"]*)" for zebra socks in the confirmation page"$/, function(quantity) {
    this.validateItem('zebra', 'zebra', 13, quantity);
  });

  When(/^the user validates "([^"]*)" for lion socks in the confirmation page"$/, function(quantity) {
    this.validateItem('lion', 'lion', 20, quantity);
  });

  When(/^the user validates "([^"]*)" for elephant socks in the confirmation page"$/, function(quantity) {
    this.validateItem('elephant', 'elephant', 35, quantity);
  });

  When(/^the user validates "([^"]*)" for giraffe socks in the confirmation page"$/, function(quantity) {
    this.validateItem('giraffe', 'giraffe', 17, quantity);
  });

  Then(/^the user check subtotal and taxes and total for "([^"]*)" with "([^"]*)" and "([^"]*)" and "([^"]*)" and "([^"]*)"$/, function(state, zebraQty, lionQty, elephantQty, giraffeQty) {
    var expectedSubTotal = this.calcSubTotal(zebraQty, lionQty, elephantQty, giraffeQty);
    var expectedTaxes = this.calcTaxes(state, expectedSubTotal);
    var expectedTotal = expectedSubTotal + expectedTaxes;

    this.driver.findElement(By.id('subtotal')).getText().then(actualSubTotal => { => {
        assert.equal(actualSubTotal, expectedSubTotal);
      });
    this.driver.findElement(By.id('taxes')).getText().then(actualTaxes => { => {
        assert.equal(actualTaxes, expectedTaxes);
      });
    this.driver.findElement(By.id('total')).getText().then(actualTotal => { => {
        assert.equal(actualTotal, expectedTotal);
      });
  });
});
