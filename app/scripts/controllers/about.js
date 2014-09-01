'use strict';

/**
 * @ngdoc function
 * @name cctestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cctestApp
 */
angular.module('cctestApp')
  .controller('AboutCtrl', function ($scope, $http) {

    var foo;
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
