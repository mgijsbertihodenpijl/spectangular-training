define([
    'angular',
    //connect material component
    'component!connect-material/drawer'
], function (ng) {
    'use strict';
    function controller ($scope, Drawer, loaderState) {
        var drawer = Drawer.get('ipl-add');
        //close drawer
        drawer.on('close', function() {
            loaderState.go('overview');
        });
        //open
        drawer.open();
        //scope
        ng.extend($scope, {
            /** 
             * close drawer
             */
            close: function () {
                drawer.close();
            }
        });
    }
    controller.$inject = ['$scope', 'materialDrawerService', 'loaderState'];
    return controller;
});