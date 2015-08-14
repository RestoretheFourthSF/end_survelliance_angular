'use strict';

var scorecardControllers = angular.module('scorecardControllers', []);

scorecardControllers.controller('PoliticiansList', ['$scope', 'politiciansFactory',
  function ($scope, politiciansFactory) {
    politiciansFactory.get().then(function(response){
      $scope.scorecards = response;
    });
  }]);

scorecardControllers.controller('PoliticiansDetail', ['$scope', 'politiciansFactory', '$routeParams',
  function ($scope, politiciansFactory, $routeParams) {
    politician_link = $routeParams.politician_link;
    politiciansFactory.get(politician).then(function(response){
      $scope.scorecard = response;
    });
  }]);
