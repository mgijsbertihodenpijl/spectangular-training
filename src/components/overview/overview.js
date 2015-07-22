define([
    'angular',
    'vp-pubsub',
    //service
    //'service!../../services/ladder'
    //connect material component
    'component!connect-material/toolbar',
    'component!connect-material/button',
    'component!connect-material/gridlist',
], function (ng, PubSub) {
    'use strict';
    function controller ($scope, loaderState) {

        //scope
        ng.extend($scope, {
            /**
             * Add a new IPL
             */
            add: function () {
                loaderState.go('overview.add');
            },
            cer: {
                success: '0'
            }
        });
        PubSub.sub('ipl.certificate.created',function(newCertificate){
            $scope.$apply(function(){
                $scope.cer.success = '1';
                $scope.cer.certificate = newCertificate;
            });
        })
    }
    controller.$inject = ['$scope', 'loaderState'];
    return controller;
});