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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
