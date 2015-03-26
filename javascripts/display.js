// This file contains the logic for grooming the player data before it is displayed as well as constructing the html and displaying the data for each match.

function displayMatches (matchedPlayers) {
	var displayBox = document.getElementById("display-results");
	displayBox.innerHTML = "";
	if (matchedPlayers.length > 0) {
		matchedPlayers.forEach( function (player) {
			var playerInfo = '<img src="' + player.image + '"></img>';
			playerInfo += '<div class="text name">' + player.name + '</div>';
			playerInfo += '<div class="text gender">' + capitalize(player.gender) + '</div>';
			playerInfo += '<div class="text age">' + findAge(player.birthday) + ' years old</div>';
			var playerDiv = '<div class="player-info">' + playerInfo + '</div>';
			displayBox.innerHTML += playerDiv;
		});
	} else {
		displayBox.innerHTML = '<div id="failed-search">No players match your search.</div>';
	}
}

function findAge (birthday) {
	var ageInMillisec = new Date() - new Date(birthday);
	var millisecPerYear = 1000 * 60 * 60 * 24 * 365.25;
	return Math.floor(ageInMillisec / millisecPerYear);
}

function capitalize (string) {
    return string[0].toUpperCase() + string.slice(1);
}