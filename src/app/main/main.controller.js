
angular.module('dreamThief')
  .controller('MainCtrl', function ($scope) {

    
  $scope.$watch("diary", function(newValue) {
      var result = returnRID(newValue);
      $scope.result = result;
    });

}).filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});
