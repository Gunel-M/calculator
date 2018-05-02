alert("Hi there and welcome to the website")


var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myBtn").click();
    }
})

var app = angular.module('myApp', ["ngRoute"]);
      app.controller('myCtrl', function($scope, $http) {
          var expression = {"expression":""}
          expression.expression = $scope.expression

          $http({
              method: 'POST',
              url: 'http://localhost:5000/login' ,
              data: JSON.stringify(expression)
          })
              .then(function mySuccess(response) {

                  $scope.answer = response.data;
              }, function myError(error) {
                  $scope.answer = error.data;

              });
      });

       app.config(function ($routeProvider) {
           $routeProvider
               .when("/success", {
                   templateUrl: "second.html"
               });
       });
