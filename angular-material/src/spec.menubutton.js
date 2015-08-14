/* globals browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'https://material.angularjs.org/latest';
Spectangular.library = SpectangularMdLibrary;

describe('Demo of menu buttons', function () {

    /**
     * Loads the page https://material.angularjs.org/latest/#/demo/material.components.menu and waits for the element
     * with css selector .demo-toolbar.
     */
    beforeEach(function () {
        Spectangular.loadPage('/#/demo/material.components.menu', '.demo-toolbar');
    });

    it('should open menu in Basic Usage and click on redial', function () {
        //Exercise 8: Select the menu button in the Basic Usage section, click on 'redial' options and click
        // on the button in the dialog with text 'That was easy'
    });
});