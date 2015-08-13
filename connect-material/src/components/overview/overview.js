define([
    'angular',
    'vp-pubsub',
    'service',
    'service!../../services/training',
    'component!connect-material/toolbar',
    'component!connect-material/button',
    'component!connect-material/gridlist',
], function (ng, PubSub) {
    'use strict';
    function controller ($scope, Training, loaderState, Dialogs) {
        ng.extend($scope, {
            add: function () {
                loaderState.go('overview.add');
            },
            //edit
            edit: function (training) {
                loaderState.go('overview.edit', training);
            },
            /**
             * Remove
             * @param  {Object} training
             * @param  {Number} index
             */
            remove: function (training, index) {
                //show dialog
                Dialogs.confirm(
                    'Weet u zeker dat u de training ' + training.name + ' wilt verwijderen?'
                )
                    .then(function (answer) {
                        //force promise reject
                        if (answer !== 'yes') {
                            throw 'No';
                        }
                    })
                    //remove
                    .then(function () {
                        $scope.isLoaded = false;
                        return Training.delete({
                            uid: training.uid
                        }).$promise;
                    })
                    //handle response
                    .then(function (data) {
                        $scope.isLoaded = true;
                        if (!data.error) {
                            $scope.trainings.splice(index, 1);
                        }
                    });
            }
        });

        Training.query(function (result) {
            $scope.isLoaded = true;
            $scope.trainings = result.trainings;
        });

        //update on save
        PubSub.sub('gids.trainings.saved', function (training) {
            var trainings = $scope.trainings;
            for (var i = 0, max = $scope.traingings.length; i < max; i++) {
                if (trainings[i].uid === training.uid) {
                    $scope.companies[i] = training;
                    return;
                }
            }
            //new
            $scope.trainings.unshift(training);
        });


    }
    controller.$inject = ['$scope', 'Training', 'loaderState', 'materialDialogService'];
    return controller;
});