
//When map page is shown
$('#gmap').live('pagecreate',function(){
	// create map object centering on a given latitude or longitude, with Hybrid map type
	$('#map_canvas').gmap({center:'1.559866,32.398682', 'mapTypeId':'roadmap', zoom:6}).bind('init', function(evt,map){
		$('#map_canvas').gmap('addMarker', {'id':'m_1', 'position': '0.395505,32.559814', 'bounds': false } ).click(function(){
			$('#map_canvas').gmap('openInfoWindow',{'content':'<a href="baganda.html">Baganda people</a>'},this);
			});
		$('#map_canvas').gmap('addMarker', {'id':'m_2', 'position': '3.074695,32.028808', 'bounds': false } ).click(function(){
			$('#map_canvas').gmap('openInfoWindow',{'content':'<a href="baganda.html">Acholi people</a>'},this);
			});
		$('#map_canvas').gmap('addMarker', {'id':'m_3', 'position': '-0.35156,30.666504', 'bounds': false } ).click(function(){
			$('#map_canvas').gmap('openInfoWindow',{'content':'<a href="banyankore.html">Banyankore people</a>'},this);
			});
		$('#map_canvas').gmap('addMarker', {'id':'m_4', 'position': '0.483393,33.28125', 'bounds': false } ).click(function(){
			$('#map_canvas').gmap('openInfoWindow',{'content':'<a href="basoga.html">Basoga people</a>'},this);
			});
		$('#map_canvas').gmap('addMarker', {'id':'m_5', 'position': '-1.230374,30.007324', 'bounds': false } ).click(function(){
			$('#map_canvas').gmap('openInfoWindow',{'content':'<a href="bakiga.html">Bakiga people</a>'},this);
			});
		$('#map_canvas').gmap('addMarker', {'id':'m_5', 'position': '1.58183,31.507072', 'bounds': false } ).click(function(){
			$('#map_canvas').gmap('openInfoWindow',{'content':'<a href="banyoro.html">Banyoro people</a>'},this);
			});
		});	
});

  $('#gmap').live("pageshow", function() {
                $('#map_canvas').gmap('refresh');
   });

/*function initialize()
	{
		var latlng = new  google.maps.LatLng(1.559866,32.398682);
		var mapOpts = {
			zoom: 6,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
			var map = new google.maps.Map(document.getElementById("map_canvas"), mapOpts);
			var loc = new google.maps.LatLng(0.395505,32.546997);
			var marker = new google.maps.Marker({
			position: loc,
			map:map,
			title: "Hello UGTribal"
		});
		map.setCenter(0.395505,32.546997);
	}
	
	function loadMapScript(){
		var script = document.createElement("script");	
		script.type = "text/javascript";
		script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCc4sjeuOU7emVgE_AZOmfNyrROW9uYP4M&sensor=false&callback=initialize";
		document.body.appendChild(script);
	}
	window.onload = initialize();
*/	
