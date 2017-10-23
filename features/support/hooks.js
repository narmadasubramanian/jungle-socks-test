var defineSupportCode = require('cucumber');

defineSupportCode(function(AfterFeatures) {
  AfterFeatures(function() {
    return this.driver.quit();
  });
});