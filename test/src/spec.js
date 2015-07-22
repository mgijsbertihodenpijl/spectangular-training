/* globals browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'https//localhost:1985';
Spectangular.library = SpectangularMdLibrary;

describe('Demo of buttons', function () {

  beforeEach(function () {
    Spectangular.loadPage('/#/training/registration', '.material-success');
  });


  it('should find with selector', function () {
    Spectangular.button({selector: '[ng-click=\"showListBottomSheet($event)\"]'}).click();
  });

  it('should find with text', function () {
    Spectangular.button({text: 'Show as list'}).click();
  });

});