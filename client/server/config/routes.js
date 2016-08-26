var app = angular.module('app', ['ngRoute']);

//configure routing
app.config(function($routeProvider) {
	$routeProvider
		.when('/players', {
			templateUrl: 'static/partials/players.html'
		})
		.when('/teams', {
			templateUrl: 'static/partials/teams.html'
		})
		.when('/associations', {
			templateUrl: 'static/partials/associations.html'
		})
		.when('/:teamname', {
			templateUrl: 'static/partials/team.html'
		})
		.otherwise({
			redirectTo: '/players'
		});
});