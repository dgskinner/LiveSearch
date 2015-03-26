// This file contains the logic for getting and parsing the player data. searchPlayers makes an AJAX request to get the list of player info. It takes two callbacks. One turns the response into a JS array of objects and finds the matching objects, and the other (lives in display.js) displays the info for matched players.

function searchPlayers (searchText, parseCallback, displayCallback) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            matchedPlayers = parseCallback(searchText, xmlhttp.responseText);
			displayCallback(matchedPlayers);			
        }
	}
    xmlhttp.open("GET", 'data/Data.json', true);
    xmlhttp.send();
}

function parseResponse (searchText, jsonString) {	
	searchRegex = new RegExp(searchText.toLowerCase());
	players = JSON.parse(jsonString);
	matchedPlayers = [];
	players.forEach( function (player) {
		if (player.name.toLowerCase().match(searchRegex)) {
			matchedPlayers.push(player);
		}
	});
	return matchedPlayers;
}