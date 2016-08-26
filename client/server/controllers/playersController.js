//players controller
app.controller('PlayersController', function($scope, playerFactory) {
	$scope.players = [];
	$scope.newPlayer = {};

	//callback to set players info
	function setPlayers(data) {
		$scope.players = data;
		$scope.newPlayer = {};
	}

	//get all players from factory
	playerFactory.index(setPlayers);

	//add a player
	$scope.add = function() {
		playerFactory.add($scope.newPlayer, setPlayers);
	}

	//remove a player
	$scope.remove = function(player) {
		playerFactory.remove(player, setPlayers);
	}
});