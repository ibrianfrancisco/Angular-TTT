(function() {
'use strict';

var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/welcome');

$stateProvider

.state('welcome', {
  url: '/welcome',
  templateUrl: 'templates/welcome.html'
})

.state('board', {
  url: '/board',
  templateUrl: 'templates/board.html'
})








}])

})();
