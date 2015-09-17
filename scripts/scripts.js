function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
	center: new google.maps.LatLng(-1.2994939,36.765511),
	zoom: 8,
	mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
