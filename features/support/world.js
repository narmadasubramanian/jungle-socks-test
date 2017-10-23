require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var defineSupportCode = require('cucumber');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder().forBrowser('chrome').build();
  this.url = 'https://jungle-socks.herokuapp.com';
  this.timeout = 5000;
  this.putQuantity = function(animal, quantity) {
    return this.driver.findElement(By.id('line_item_quanity_' + animal)).sendKeys(quantity);
  };

  this.isNumber = function(n) {
    return !isNaN(parseFloat(n));
  };

  this.validateItem = function(animal, expectedProductName, expectedPrice, expectedQuantity) {
    if(this.isNumber(quantity) && quantity > 0) {
      this.driver.findElement(By.xpath("//*[@class='"+animal+"']/td[1]")).getText().then(actualProductName => {
          assert.equal(actualProductName, expectedProductName);
      this.driver.findElement(By.xpath("//*[@class='"+animal+"']/td[2]")).getText().then(actualPrice => {
          assert.equal(actualPrice, expectedPrice);
      this.driver.findElement(By.xpath("//*[@class='"+animal+"']/td[3]")).getText().then(actualQuantity => {
          assert.equal(actualPrice, expectedQuantity);
    } else {
      assert.equal(his.driver.findElement(By.xpath("//*[@class='"+animal+"']/td[1]")).isDisplayed, false);
    }
  };

  this.calcSubTotal = function(zebraQty, lionQty, elephantQty, giraffeQty) {
    return (zebraQty*13) + (lionQty*20) + (elephantQty*35) + (giraffeQty*17);
  };

  this.calcTaxes = function(state, subtotal) {
    return subtotal * this.taxes[state];
  }

  this.taxes = [];
  taxes["Alabama"] = 0.01;
  taxes["Alaska"] = 0.00;
  taxes["Arizona"] = 0.07;
  taxes["Arkansas"] = 0.09;
  taxes["California"] = 0.08;
  taxes["Colorado"] = 0.05;
  taxes["New York"] = 0.06;
  taxes["Minnesota"] = 0.00;
//We can similarly write up a static list of tax values
}


defineSupportCode(function(setWorldConstructor) {
  setWorldConstructor(CustomWorld)
});
