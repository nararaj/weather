'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'app/templates/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope,$location,weatherService) {
    $scope.weather = weatherService.getData();
    if($scope.weather.cod != 200){
    $scope.apiCalled = 'error';
    $scope.error = $scope.weather.message;
    }else{
    $scope.apiCalled = 'success';
    }
    $scope.goBack = function(){
        $location.path('/view1');
    }
//    $scope.getWeather = function(i){
//        var form = weatherService.returnform();
//$scope.apiCalled =false;
//weatherService.httpcall(form.cityName.$viewValue).then(function(response){
//    $location.path('/view2');
//});
//}
})