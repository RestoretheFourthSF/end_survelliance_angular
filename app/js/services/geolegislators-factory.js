var geoLegislatorServices = angular.module('geoLegislatorServices', []);

geoLegislatorServices.factory('geoLegislatorFactory', ['$http',function($http){
  function GeoLegistator(bioguide,name) {
    this.bioguide = bioguide;
    this.name = name;
  };
  var GEOLEGISLATOR_BASE_URL= "http://scorecard.restorethefourthsf.com/lookup/getLegislator?"

  api={}
  api.get= function(lat,long){
    console.log(lat,long)
    return $http.get(GEOLEGISLATOR_BASE_URL+"lat="+lat+"&long="+long).then(function(response){
      var legislators = [];
      for (var i = 0; i < response.data.length; i++) {
        var entry = response.data[i];
        console.log(entry)
        var legislator = new GeoLegistator(entry.bioguide_id,entry.first_name+" "+entry.last_name);
        legislators.push(legislator);
      };
      return legislators;
    });
  };
  return api;
}]);
