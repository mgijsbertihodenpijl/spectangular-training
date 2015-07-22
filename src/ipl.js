define([
    'angular',
    'ui-router-loader!./configs/routes',
    //global connect material parts
    'connect-material/components/components',
    'connect-material/services/services',
    'connect-material/utils/utils'
], function (ng) {
    'use strict';
    ng.module('ipl', [
        'ui.router.loader',
        'material.services',
        'material.components',
        'material.utils',
        'ipl.services'
    ]);
    //public api
    return {
        enable: function () {
            
        },
        disable: function () {}
    };
});