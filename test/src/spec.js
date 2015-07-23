/* globals browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/connect/connect.js';

Spectangular.baseUrl = 'http://localhost:1985';
Spectangular.library = SpectangularMdLibrary;

var testJson = '../config/tests.json';
var formData = require(testJson);

describe('Demo of buttons', function () {

  var location = '/#/ipl/';
  var buttonSelector = 'material-gridlist material-button.lms-add-right-corner';
  var formSelector = '[ui-view=\'ipl-form\']';

  function match(el, match,selector){
      expect(el.element(by.css(selector)).getText()).toMatch(match);
  }

  beforeEach(function () {
    Spectangular.loadPageAndWait(location, buttonSelector);
    Spectangular.button({icon: 'plus'}).click();
    Spectangular.drawer({selector: '.ipl-add'}).whenVisible();
  });

  it('[1] wil ik een nieuwe training voor regio Binnen registreren ', function () {
    Spectangular.form({
      selector: formSelector,
      data: formData.in
    });
    browser.sleep(2000);
    Spectangular.button({selector: '[ng-click=\"submit()\"]'}).click();
    browser.sleep(2000);
    match()

  });

  //xit('[2] wil ik een nieuwe training voor regio Buiten registreren ', function () {
  //  Spectangular.form({
  //    selector: formSelector,
  //    data: formData.out
  //  });
    //browser.sleep(2000);
    //Spectangular.button({text: 'opslaan'}).click();
    //browser.sleep(2000);
    //validate(expectedDescriptionOut);
  //});

});