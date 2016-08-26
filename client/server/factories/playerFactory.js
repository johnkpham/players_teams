//players factory
app.factory('playerFactory', function() {
	var players = [
		{name: 'Joe Montana'},
		{name: 'Jerry Rice'}
	];
	var factory = {};

	//get all players
	factory.index = function(callback) {
		callback(players);
	}

	//add a player
	factory.add = function(player, callback) {
		players.push(player);
		callback(players);
	}

	//remove a player
	factory.remove = function(player, callback) {
		players.splice(players.indexOf(player), 1);
		callback(players);
	}

	return factory;
});