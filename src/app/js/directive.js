angular.module('myApp.directive', []).directive('weaklist', function (weaks) {
    return {
        restrict:'EA',
       scope : {
           getweather : '='
       },
        template:'<div ng-repeat="i in weaks" ng-click="thisDay($index)"><button  style="width:100%;overflow:hidden" class="btn btn-default" >{{i}}</button></div>',
        link: function(scope,iElement,iAttribute) {
            scope.weaks = weaks;
            scope.thisDay = function(i){
                scope.$emit('changweak',i);
//            getweather = i;
            }
    }
    };
});