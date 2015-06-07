var markerRadius;

// First, create an object containing LatLng and radius for each marker.
var markers = {};
function getData() {
	for (var i = 1; i < 4; i++) {
		lat = getUrlVars()["pos_"+i+"-lat"];
		lng = getUrlVars()["pos_"+i+"-lng"];
		rds = getUrlVars()["pos_"+i+"-rds"];
		markers[i] = {
			center: new google.maps.LatLng(lat, lng),
			radius: rds * 1000
		};
	};

	return markers;
}

// get the values from the Url's GET variables
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	vars[key] = value;
	});
	return vars;
}

function initialize() {
  // Create the map.
  var mapOptions = {
	zoom: 6,
	center: markers[1].center,
	mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Construct the circle for each marker.
  for (var marker in markers) {
	var markerOptions = {
	  strokeColor: '#00c',
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillOpacity: 0,
	  map: map,
	  center: markers[marker].center,
	  radius: markers[marker].radius
	};
	// Add the circle for this marker to the map.
	markerRadius = new google.maps.Circle(markerOptions);
  }
}

if(location.search) {
	getData();
	console.log(getUrlVars()["pos_1-rds"]);
	google.maps.event.addDomListener(window, 'load', initialize);
}
