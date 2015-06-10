// Try to get the users location
(function() {
	var locationSuccess = function(pos) {
		var inputLat = pos.coords.latitude;
		var inputLng = pos.coords.longitude;
		document.getElementsByName("pos_1-lat")[0].value = inputLat;
		document.getElementsByName("pos_1-lng")[0].value = inputLng;
	}

	var locationError = function(e){
		var msg = 'Error ' + e.code + ': ' + e.message;
		console.log(msg);
	};

	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	}

	if(navigator.geolocation){
		var location = navigator.geolocation.watchPosition(locationSuccess, locationError, options);
	}
})();

// Bring back the Url variables to the inputfields
function fillFields() {
	for (var i = 1; i < 4; i++) {
		lat = document.getElementsByName("pos_"+i+"-lat")[0].value = getUrlVars()["pos_"+i+"-lat"];
		lng = document.getElementsByName("pos_"+i+"-lng")[0].value = getUrlVars()["pos_"+i+"-lng"];
		rds = document.getElementsByName("pos_"+i+"-rds")[0].value = getUrlVars()["pos_"+i+"-rds"];
	};
}