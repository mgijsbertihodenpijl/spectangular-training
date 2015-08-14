/**
 * Created by mgijsbertihodenpijl on 14/08/15.
 */
/* globals browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'https://material.angularjs.org/latest';
Spectangular.library = SpectangularMdLibrary;

describe('Demo of tabs', function () {

    /**
     * Loads the page https://material.angularjs.org/latest/#/demo/material.components.tabs and waits for the element
     * with css selector .demo-toolbar.
     */
    beforeEach(function () {
        Spectangular.loadPage('/#/demo/material.components.tabs', '.demo-toolbar');
    });

    it('should select tab "Two" in Dynamic Height Demo', function () {
        //Exercise 7a: select the tab Two, use the text selector
    });

    it('should select tab index 3 (=Two) in Dynamic Height Demo', function () {
        //Exercise 7b: select the tab Two, use the index selector (use index = 3)
        //Extra: How would you verify if the contents of tab 'Two' is actually opened and visible ?
    });
});