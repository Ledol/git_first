window.onload = init;
function init() {
	let map = document.getElementById("map");
	map.onmousemove = showCoords;
}

function showCoords (eventObj) {
	let map = document.getElementById("coords");
	let x = eventObj.clientX;
	let y = eventObj.clientY;
	map.innerHTML = "Map coordinates: " + x + ", " + y;
}

function timerHandler() {
	alert("Hey what are you doing just sitting there staring at a blank screen?");
}
setTimeout(timerHandler, 5000);