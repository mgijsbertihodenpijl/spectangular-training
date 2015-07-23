/* globals browser, describe, it, element, by, expect, beforeEach */
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _node_modulesSpectangularDistSpectangularJs = require('../node_modules/spectangular/dist/spectangular.js');

var _node_modulesSpectangularDistSpectangularJs2 = _interopRequireDefault(_node_modulesSpectangularDistSpectangularJs);

var _node_modulesSpectangularDistLibrariesConnectConnectJs = require('../node_modules/spectangular/dist/libraries/connect/connect.js');

var SpectangularMdLibrary = _interopRequireWildcard(_node_modulesSpectangularDistLibrariesConnectConnectJs);

_node_modulesSpectangularDistSpectangularJs2['default'].baseUrl = 'http://localhost:1985';
_node_modulesSpectangularDistSpectangularJs2['default'].library = SpectangularMdLibrary;

var testJson = '../config/tests.json';
var formData = require(testJson);

describe('Demo of buttons', function () {

  var location = '/#/ipl/';
  var buttonSelector = 'material-gridlist material-button.lms-add-right-corner';
  var formSelector = '[ui-view=\'ipl-form\']';

  beforeEach(function () {
    _node_modulesSpectangularDistSpectangularJs2['default'].loadPageAndWait(location, buttonSelector);
    _node_modulesSpectangularDistSpectangularJs2['default'].button({ icon: 'plus' }).click();
    _node_modulesSpectangularDistSpectangularJs2['default'].drawer({ selector: '.ipl-add' }).whenVisible();
  });

  it('[1] wil ik een nieuwe training voor regio Binnen registreren ', function () {
    _node_modulesSpectangularDistSpectangularJs2['default'].form({
      selector: formSelector,
      data: formData['in']
    });
    browser.sleep(2000);
    _node_modulesSpectangularDistSpectangularJs2['default'].button({ selector: '[ng-click=\"submit()\"]' }).click();
    browser.sleep(2000);
  });

  xit('[2] wil ik een nieuwe training voor regio Buiten registreren ', function () {
    _node_modulesSpectangularDistSpectangularJs2['default'].form({
      selector: formSelector,
      data: formData.out
    });
    //browser.sleep(2000);
    //Spectangular.button({text: 'opslaan'}).click();
    //browser.sleep(2000);
    //validate(expectedDescriptionOut);
  });
});
