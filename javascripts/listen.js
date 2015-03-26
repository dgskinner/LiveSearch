// This file calls a function that listens for typing in the search box. Each time the user types a letter, searchPlayers is called.

document.getElementById("search-box").addEventListener("keyup", function (event) {
	searchPlayers(event.target.value, parseResponse, displayMatches);
});