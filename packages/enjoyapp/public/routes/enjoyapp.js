'use strict';

angular.module('mean.enjoyapp').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('enjoyapp example page', {
      url: '/enjoyapp/example',
      templateUrl: 'enjoyapp/views/index.html'
    });
  }
]);
