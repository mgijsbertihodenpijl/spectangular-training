require([
    'angular',
    'ui-router-loader!./routes'
], function (ng, modules) {
    'use strict';
    ng.bootstrap(document, modules);
});