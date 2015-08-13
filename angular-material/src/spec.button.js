/* globals browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'https://material.angularjs.org/latest';
Spectangular.library = SpectangularMdLibrary;

describe('Demo of buttons', function () {

  beforeEach(function () {
    //Exercise 1: load the page '/#/demo/material.components.bottomSheet' with the correct css selector
    //Spectangular.loadPage('', '');
  });

  /**
   * The commentsAction variable is a protractor ElementFinder ($) which is opened after the click.
   * See https://angular.github.io/protractor/#/api?view=ElementFinder.prototype.$
   */
  //Exercise 3a: Find the correct element for the comments with the protractor element.
  //Exercise 3b: What alternative solution you can use to find the selector ?
  var commentsAction = '';

  it('should find with selector', function () {
    //Exercise 2a : Find the 'show as List' button with a css selector
    //Spectangular.button({selector: ''}).click();
    //expect(commentsAction.isPresent()).toBe(true);
  });

  it('should find with text', function () {
    //Exercise 2b: Find the 'show as List' button with the text.
    //Check the logs of the selenium driver - what do you see ?
    //Spectangular.button({text: ''}).click();
    //expect(commentsAction.isPresent()).toBe(true);
  });

});