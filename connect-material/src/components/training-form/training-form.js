define([
  'angular',
  'vp-utils/range',
  'vp-pubsub',
  'moment',
  //service
  'service!../../services/category',
  'service!../../services/type',
  'service!../../services/certificate',
  //connect material component
  'component!connect-material/pickers', //datefield
  'component!connect-material/select',
  'component!connect-material/checkbox',
  'component!connect-material/progress'
], function (ng, range, PubSub, moment) {
  'use strict';
  function controller($scope, Category, Type, Certificate) {
    var now = moment.utc(),
      categories = {};
    //get categories
    Category.query(function (data) {
      data.items.forEach(function (cat) {
        categories[cat.uid] = cat.name;
      });
      $scope.categories = categories;
      $scope.isLoaded = true;
    });
    //find closest number by the modules
    function closestNr(nr, mod) {
      var closest = nr % mod >= Math.round(mod / 2) ? nr + (mod - nr % mod) : nr - (nr % mod);
      if (closest < 10) {
        closest = '0' + closest;
      }
      return closest;
    }

    //scope
    ng.extend($scope, {
      isLoaded: false,
      //IPL data
      certificate: {
        //IPL start time
        start: {
          date: +now,
          hours: now.hours(),
          minutes: closestNr(now.minutes(), 5)
        },
        //IPL end time
        end: {
          date: +now,
          hours: now.hours(),
          minutes: closestNr(now.minutes() + 5, 5)
        },
        region: 'in',
        type: {},
        category: {},
        agree: false

      },
      //date configuration
      startDateConfig: {
        minDate: 'now'
      },
      endDateConfig: {
        minDate: 'now'
      },
      regions: {
        'in': 'Binnen',
        'out': 'Buiten'
      },
      //time select options
      time: {
        hours: range(0, 24),
        minutes: range(0, 60, 5)
      },
      errors: {},
      submit: function () {
        var certificate = ng.extend({}, $scope.certificate), //clone
          start,
          end;
        //remove the seconds of the date
        function removeSeconds(key) {
          var date = moment.utc(certificate[key].date);
          date.hours(certificate[key].hours);
          date.minutes(certificate[key].minutes);
          date.seconds(0);
          date.milliseconds(0);
          return date;
        }

        //reset errors
        $scope.errors = {};
        //check start
        start = removeSeconds('start');
        if (start < now) {
          $scope.errors.start = true;
        }
        //check end
        end = removeSeconds('end');
        if (end < start) {
          $scope.errors.end = true;
        }
        //check category
        if (!certificate.category.uid) {
          $scope.errors.category = true;
        }
        //check type
        if (!certificate.type.uid) {
          $scope.errors.type = true;
        }
        //km and city if outside
        if (certificate.region === 'out') {
          //check km
          if (!certificate.km) {
            $scope.errors.km = true;
          }
          //check
          if (!certificate.city) {
            $scope.errors.city = true;
          }
        }
        ;
        if(!certificate.agree){
          $scope.errors.agree = true;
        }
        //check if we don't have errors
          if (+Object.keys($scope.errors) === 0) {
            //format to API call
            certificate.start = start;
            certificate.end = end;
            //Certificate
            Certificate.save(certificate)
              .$promise
              .then(function (newCertificate) {
                PubSub.pub('ipl.certificate.created', newCertificate);
                $scope.close();
              });
          }
      }
    });
    /**
     * GET types of category
     */
    $scope.$watch('certificate.category.uid', function (category) {
      var types = {};
      //only call if we have
      if (!category) {
        return;
      }
      $scope.isLoaded = false;
      //get types
      Type.query({
        category: category
      }, function (data) {
        data.items.forEach(function (type) {
          types[type.uid] = type.name;
        });
        $scope.types = types;
        $scope.certificate.type = {};
        $scope.isLoaded = true;
      });
    });
    /**
     * Update end date
     */
    $scope.$watch('certificate.start.date', function (newDate) {
      if (newDate > $scope.certificate.end.date) {
        $scope.endDateConfig.minDate = newDate;
        $scope.certificate.end.date = newDate;
      }
    });

  }

  controller.$inject = ['$scope', 'Category', 'Type', 'Certificate'];
  return controller;
});