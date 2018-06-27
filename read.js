
var info = ''; //geojson file

$.ajax({
    type: "GET",
    url: "https://api.mapbox.com/geocoding/v5/mapbox.places/" + "Abbe Center of Photonics, Germany.json?access_token=pk.eyJ1IjoiamxhaSIsImEiOiJjamZ5N3JwYTkwZ2pnMzJxNzNydTYwZXlqIn0.-wtht5S4Z5ZuLYEzCmJZgw" ,
    dataType: "json",
    success: processJSON
}).success(function(data){
    processJSON(data);
})
function processJSON(json) {
    // Do stuff here

    info = json.features[0];
    console.log(info);

}
mapboxgl.accessToken = 'pk.eyJ1IjoiamxhaSIsImEiOiJjamZ5N3JwYTkwZ2pnMzJxNzNydTYwZXlqIn0.-wtht5S4Z5ZuLYEzCmJZgw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jlai/cjf2vwlic6ifu2slwemahpptq',
    zoom:0.2,
    center: [-176.36514,-0.00000]
});

map.on('load', function() {
    map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        map.addSource('pointsSource',{
            type: 'geojson',
            data: info
        });
        map.addLayer({
            id: 'markers',
            source:'pointsSource',
            type:'symbol',
            layout: {
                "icon-image": "custom-marker",
            }
        });
    });
});
//https://api.mapbox.com/geocoding/v5/mapbox.places/Abbe Center of Photonics.json?access_token=pk.eyJ1IjoiamxhaSIsImEiOiJjamZ5N3JwYTkwZ2pnMzJxNzNydTYwZXlqIn0.-wtht5S4Z5ZuLYEzCmJZgw