//teams controller
app.controller('TeamsController', function($scope, $routeParams, teamFactory) {
	$scope.teams = [];
	$scope.newTeam = {};

	//callback to set teams info
	function setTeams(data) {
		$scope.teams = data;
		$scope.newTeam = {};
	}

	//get all teams from factory
	teamFactory.index(setTeams);

	//add a team
	$scope.add = function() {
		teamFactory.add($scope.newTeam, setTeams);
	}

	//remove a team
	$scope.remove = function(team) {
		teamFactory.remove(team, setTeams);
	}

	//get players in team (if team route parameters passed)
	if ($routeParams.teamname) {
		// console.log('there should be players')
		teamFactory.getTeamPlayers({name: $routeParams.teamname}, function(data) {
			// console.log(data);
			$scope.teamPlayers = data;
			$scope.teamName = $routeParams.teamname;
			// console.log($scope.teamPlayers);
		});
	} else {
		$scope.teamName = $routeParams.teamname;
		$scope.teamPlayers = [];
	}

});