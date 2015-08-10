'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'scorecardControllers',
  'scorecardServices'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/app', {
        templateUrl: '/app/partials/list.html',
        controller: 'PoliticiansList'
      }).
      otherwise({
        redirectTo: '/app'
      });
    }]);
