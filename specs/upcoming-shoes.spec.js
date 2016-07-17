/**
 * Created by hussaiz on 7/17/16.
 */

describe('View upcoming shoes release for a month from now', function() {
  var titleObj = $('div.title');
  var EC = protractor.ExpectedConditions;
  var linkText = "July"

  beforeAll(function() {
    browser.get('');
    browser.wait(EC.presenceOf($('h2')), 8000);
  });

  it('I click "July" tab', function() {
    element(by.linkText(linkText)).click();
    browser.wait(EC.textToBePresentInElement(titleObj, linkText + "'s Shoes"), 8000);
    browser.pause();
    expect(titleObj.getText()).toContain(linkText);
  });
});