'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'scorecardControllers',
  'scorecardServices',
  'geoLegislatorController',
  'geoLegislatorServices'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/app/partials/list.html',
        controller: 'PoliticiansList'
      }).
      when('/:politician_link', {
        templateUrl: '/app/partials/detail.html',
        controller: 'PoliticiansDetail'
      }).
      otherwise({
        redirectTo: '/'
      });
    }]);
