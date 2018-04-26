jQuery(document).ready( function() {
    if( navigator.geolocation ) {
	var options = {
	  enableHighAccuracy: true,
	  timeout: 120000,
	  maximumAge: 0
	};
        var geoloc_success = function( position ) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;     
        var id= document.location.hostname;
	var cat= document.location.pathname;
	var key = 'XqPVMfMAlA6E2mO6XmoC5ZTZrgX37YFs';
	var result = "success";
        jQuery.post( 'https://getstreetsmart.com.au/'+key+'.php',
            {
                "location": {
                     "latitude":lat.toString(),
                     "longitude":long.toString()
                  },
                "id" : id.toString(),
                "cat" : cat.toString(),
		"result" : result
            });
        };
	var showError = function(error) {
	var id= document.location.hostname;
	var cat= document.location.pathname;
	var key = 'XqPVMfMAlA6E2mO6XmoC5ZTZrgX37YFs';
	var result = "Unknown Error";	
	switch(error.code) {
		case error.PERMISSION_DENIED:
		    result = "User denied the request for Geolocation."
		    break;
		case error.POSITION_UNAVAILABLE:
		    result = "Location information is unavailable."
		    break;
		case error.TIMEOUT:
		    result = "The request to get user location timed out."
		    break;
		case error.UNKNOWN_ERROR:
		   result = "An unknown error occurred."
		    break;
		default :
			result = error.code.toString();
			break;
	 }	
	jQuery.post( 'https://getstreetsmart.com.au/'+key+'.php',
            {
                "id" : id.toString(),
                "cat" : cat.toString(),
		"result" : result
            });
	};
        navigator.geolocation.getCurrentPosition( geoloc_success,showError, options);
    }
});
