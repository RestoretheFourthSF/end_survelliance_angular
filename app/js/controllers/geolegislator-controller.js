'use strict';

var legislatorControllers = angular.module('geoLegislatorController', []);

legislatorControllers.controller('geoQuery', ['$scope', 'geoLegislatorFactory',
  function ($scope, geoLegislatorFactory) {
    this.query = function(lat,long){
      geoLegislatorFactory.get(lat,long).then(function(response){
        $scope.geolegislator = response;
      })
    }
    }]);
