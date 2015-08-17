var geoLegislatorServices = angular.module('geoLegislatorServices', []);

geoLegislatorServices.factory('geoLegislatorFactory', ['$http',function($http){
  function GeoLegistator() {
    this.bioguide = 0;
    this.name = "";
  };
  var GEOLEGISLATOR_BASE_URL= "http://127.0.0.1:10010/getLegislator?"

  api={}
  api.get= function(lat,long){
    console.log(lat,long)
    return $http.get(GEOLEGISLATOR_BASE_URL+"lat="+lat+"&long="+long).then(function(response){
      var legislators = [];
      for (var i = 0; i < response.data.length; i++) {
        var entry = response.data[i];
        console.log(entry)
        var legislator = new GeoLegistator();
        legislators.push(legislator);
      };
      return legislators;
    });
  };
  return api;
}]);
