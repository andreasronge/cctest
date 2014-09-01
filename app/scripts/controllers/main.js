'use strict';

/**
 * @ngdoc function
 * @name cctestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cctestApp
 */
angular.module('cctestApp')
  .controller('MainCtrl', function ($scope) {

    function foobar(x) {
      if (x) {
        return "YES";
      } else {
	return "FALSE";
       }
    }

    console.log("FOOBAR", foobar(false));

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
