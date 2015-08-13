//using ng-model form ng-model data.cb1 ... data.cb5 checkboxes
/* globals browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'https://material.angularjs.org/latest';
Spectangular.library = SpectangularMdLibrary;

describe('Demo of checkboxes', function () {

  beforeEach(function () {
    //Exercise 4: load the page '/#/demo/material.components.checkbox' with the correct css selector
    //Spectangular.loadPage('', '');
  });

  it('should use selector to select and click on checkbox', function () {
    //Exercise 5: Find the checkbox with ng-model=data.cb1 and set it to true
  });

  /**
   * For a group of fields in a container, a JSON object is used as configuration. See the spectangular README for
   * the details.
   */
  it('should use form data to select and click on checkboxes', function () {
    //Exercise 6: Use Spectangular.form to cb1, cb2 and cb5 checkboxes
    //Selenium gives a warning. Why ? What should be done to avoid this warning ?
  });

});