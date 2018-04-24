
mapboxgl.accessToken = 'pk.eyJ1IjoiamFrZWRvYnNvbiIsImEiOiJjajdzMHAwZ2Y0amhsMnFxdTgzZzRoa280In0.S2TkU2UgGv7dcsUsmy12cw';

var offsetX	= -(((window.innerWidth) - 32) / 16);

$ = {}
$.minZoom	= 9;
$.beginZoom = 9.55;
$.maxZoom   = 13.5;
$.pitch     = 50;
$.offsetY	= 32;
//$.markers 	= [];
//$.office 	= null;
$.speed 	= 2;
$.curve 	= 1.5;

function loadMap () {
	var map = new mapboxgl.Map({
		container: 'map',
		minZoom: $.minZoom,
		zoom: $.beginZoom,
		maxZoom: $.maxZoom,
		center: [-122.089348, 47.450844],
		style: 'mapbox://styles/mapbox/satellite-v9?optimize=true',
		interactive: true,
		attributionControl: false
	});
	map.flyTo({
		center: [-122.089348, 47.450844],
		zoom: 	9.55,
		curve: 	$.curve,
		pitch: 	0,
		offset: [offsetX, 32],
		speed: 	$.speed
	});
	//document.getElementById('overlay').style.backgroundColor = "rgba(0,0,0,0.6)";
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
