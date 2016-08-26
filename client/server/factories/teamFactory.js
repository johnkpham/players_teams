//teams factory
app.factory('teamFactory', function() {
	var teams = [
		{name: 'Raiders'},
		{name: '49ers'},
	];
	var associations = [
		{player: {name: 'Jerry Rice'}, team: {name: '49ers'}}
	];
	var factory = {};

	//get all teams
	factory.index = function(callback) {
		callback(teams);
	}

	//add a team
	factory.add = function(team, callback) {
		teams.push(team);
		callback(teams);
	}

	//remove a team
	factory.remove = function(team, callback) {
		teams.splice(teams.indexOf(team), 1);
		callback(teams);
	}

	//get associations
	factory.getAssociations = function(callback) {
		callback(associations);
	}

	//add player/team association
	factory.addAssociation = function(association, callback) {
		if (association.player.name && association.team.name) {
			associations.push(association);
			callback(associations);
		}
	}

	//remove association
	factory.removeAssociation = function(association, callback) {
		associations.splice(associations.indexOf(association), 1);
		callback(associations);
	}

	//get all players in a specific team
	factory.getTeamPlayers = function(team, callback) {
		var players = [];
		for (var i in associations) {
			if (associations[i].team.name == team.name) {
				players.push(associations[i].player);
			}
		}
		callback(players);
	}

	return factory;
});