angular.module('myApp.service', []).service('weatherService',function($http,$q){
var storeddata = {}
this.httpcall = function(name){
var def = $q.defer();
// var URL = 'http://samples.openweathermap.org/data/2.5/weather';
var URL = 'http://api.openweathermap.org/data/2.5/forecast';
  
  var request = {
    method: 'GET',
    url: URL,
    params: {
       q: name,
      mode: 'json',
      units: 'imperial',
      cnt: '7',
      appid: '479a7f9810f2e179ad463cd4eea2673b'
    }
  };

// var request = 'http://samples.openweathermap.org/data/2.5/weather?q='+name+',in&appid=b1b15e88fa797225412429c1c50c122a1'
//   $http.get(request)
  $http(request)
    .then(function(response) {
      storeddata.response = response.data;
      def.resolve(response)
    }).
    catch(function(response) {
       storeddata.response = response.data;
      def.resolve(response)
    });
    return def.promise;

}
this.getData = function(){
    return storeddata.response;
}
this.storeform = function(form){
    storeddata.form = form;
}
this.returnform = function(){
    return storeddata.form;
}
}

);