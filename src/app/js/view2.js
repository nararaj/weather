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
    $scope.getWeather = parseInt(new Date().getDay());
    if($scope.weather.cod != 200){
    $scope.apiCalled = 'error';
    $scope.error = $scope.weather.message;
    }else{
    $scope.apiCalled = 'success';
        angular.forEach($scope.weather.list,function(elem,index){
            var date = ((elem.dt_txt).substr(0,10)).split('-').join(',');
            elem.dayconst = new Date(date).getDay();
        })
    }
    $scope.goBack = function(){
        $location.path('/view1');
    }
    $scope.$on('changweak',function(e,i){
        $scope.getWeather = i;
    })
})