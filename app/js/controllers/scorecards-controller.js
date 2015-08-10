'use strict';

var scorecardControllers = angular.module('scorecardControllers', []);

scorecardControllers.controller('PoliticiansList', ['$scope', 'politiciansFactory',
  function ($scope, politiciansFactory) {
    politiciansFactory.get().then(function(response){
      $scope.scorecards = response;
  });
}]);
