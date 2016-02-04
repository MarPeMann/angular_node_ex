$(document).ready(function(){

	$('#getBtn').click(function(){

		var my_address = $('#address').val();
		console.log(my_address);
		var geoCoder = new google.maps.Geocoder();

		var geoCodeRequest = {

			address:my_address
			//location:
			//placeId:
		}
		geoCoder.geocode(geoCodeRequest, function(response, status){
			if(status === google.maps.GeocoderStatus.OK){
				console.log(response);
				var data = response[0];
				var lat = data.geometry.location.lat();
				var lng = data.geometry.location.lng();
				var latlng = new google.maps.LatLng(lat,lng);

				var mapProp = {
					center:latlng,
					zoom:15,
					mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  		var map = new google.maps.Map(my_map, mapProp);
			}else{
				alert(status);
			}

		});
	});
	
	console.log('This is ready');
	navigator.geolocation.getCurrentPosition(success, error);
	
	function success(position){
	  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  var mapProp = {
		center:latlng,
		zoom:15,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("my_map"),mapProp);
		
      var marker = new google.maps.Marker({
		  position: latlng, 
		  map: map, 
		  draggable: true,
		  title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
  })
		
	}
	
	function error(){
		
		console.log("Geolocation not supported by browser");
	}
	
});