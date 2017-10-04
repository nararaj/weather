'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'app/templates/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope,$location,weatherService) {
$scope.getWeather = function(form){
$scope.apiCalled =false;

if(form.$valid===true){
weatherService.httpcall(form.cityName.$viewValue).then(function(response){
    $location.path('/view2');
    weatherService.storeform(form);
//if(response.status == 200){
//    $scope.apiCalled = 'success';
//    $scope.weather = response.data;
//    
//}else{
//    $scope.apiCalled = 'error';
//    $scope.error = response.data.message;
//    $location.path('/view2');
//}
});
}else{
alert('city Name should not be empty and must contain atleast 3 characters');
}
}

})