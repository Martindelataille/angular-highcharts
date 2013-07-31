'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('chart', [function(){
    return {
                restrict: 'A',
                replace: true,
                scope:{
                    data: '=data'
                },
                  link: function(scope, element, attrs) {
                    scope.$watch('data', function (newVal, oldVal) {
                      console.log("change")
                        chart_reusable(element, newVal);
                    });
                }
    }
  }]);
