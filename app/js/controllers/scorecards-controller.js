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
      scorecards = response;
    });
    for (var i = 0; i < scorecards.length; i++) {
      sc = scorecards[i]
      if (sc.link == politician_link)
        $scope.scorecard = sc;
    };
    $scope.scorecard = {"wtf":"wtf"}
  }]);
