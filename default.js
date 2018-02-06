mapboxgl.accessToken = 'pk.eyJ1IjoiamFrZWRvYnNvbiIsImEiOiJjajdzMHAwZ2Y0amhsMnFxdTgzZzRoa280In0.S2TkU2UgGv7dcsUsmy12cw';

var offsetX = (-((window.innerWidth) / 4));

function loadMap () {
	var map = new mapboxgl.Map({
		container:			'map',
		minZoom:			9,
		zoom:				10, //initial zoom
		maxZoom:			16,
		center: 			[-122.089348, 47.450844],
		style: 'mapbox://styles/mapbox/satellite-v9?optimize=true',
		interactive: 		true,
		attributionControl: false,
	});
	document.getElementById('overlay').style.backgroundColor = "rgba(0,0,0,0.8)";
	map.flyTo({
		center: [-122.472398, 47.250291],
		zoom: 15 ,
		curve: 1.5,
		speed: 0.75,
		offset: [offsetX, 0],
		pitch: 25
	});
}


/* function hideContent() {
	if (document.getElementById("main")) {
		if (document.getElementById("main").style.display != "none") {
			document.getElementById("main").style.display = "none";
			document.getElementById("loadMap").style.visibility = "visible";
		}
	}
}



*/
