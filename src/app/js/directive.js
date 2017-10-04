angular.module('myApp.directive', []).directive('weaklist', function (weaks) {
    return {
        restrict:'EA',
       scope : {
           getweather : '='
       },
        template:'<div ng-repeat="i in weaks" style="display:inline" ng-click="thisDay(i)"><button class="btn btn-default" >{{i}}</button></div>',
        link: function(scope,iElement,iAttribute) {
            scope.weaks = weaks;
            scope.thisDay = function(i){
            getweather = i;
            }
    }
    };
});