//associations controller
app.controller('AssociationsController', function($scope, playerFactory, teamFactory) {
	$scope.players = [];
	$scope.teams = [];
	$scope.associations = [];
	$scope.newAssociation = {};

	function setAssociations(data) {
		$scope.associations = data;
		$scope.newAssociation = {};
	}

	function setPlayers(data) {
		$scope.players = data;
	}

	function setTeams(data) {
		$scope.teams = data;
	}

	//get all players and teams from appropriate factories
	playerFactory.index(setPlayers);
	teamFactory.index(setTeams);
	teamFactory.getAssociations(setAssociations);

	//add association
	$scope.add = function() {
		teamFactory.addAssociation($scope.newAssociation, setAssociations);
	}
	
	//remove association
	$scope.remove = function(association) {
		teamFactory.removeAssociation(association, setAssociations);
	}

});


