var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
EC = protractor.ExpectedConditions;

chai.use(chaiAsPromised);
expect = chai.expect;
assert = chai.assert;
chai.should();
Object.defineProperty(protractor.promise.Promise.prototype, 'should', {
  get: Object.prototype.__lookupGetter__('should'),
  set: Object.prototype.__lookupSetter__('should')
});