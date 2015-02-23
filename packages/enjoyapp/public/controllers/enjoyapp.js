'use strict';

/* jshint -W098 */
angular.module('mean.enjoyapp').controller('EnjoyappController', ['$scope', 'Global', 'Enjoyapp',
  function($scope, Global, Enjoyapp) {
    $scope.global = Global;
    $scope.package = {
      name: 'enjoyapp'
    };
  }
]);
