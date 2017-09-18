var PREZI_ID = "ceqqqhashvcv";
var map;
var locations;

function startApp() {
    var playerConfig = {
        preziId: PREZI_ID,
        width: 1392,
        height: 783
    };

    var player = new PreziPlayer('prezi-player', playerConfig);

    player.on(PreziPlayer.EVENT_STATUS, function(playerStatusEvent) {
        var status = playerStatusEvent.value;
        if (status == PreziPlayer.STATUS_CONTENT_READY) {
            // Your code
        }
    });
}

// Function called by Google Maps API
function initMap() {
    // Replace these with the cities in the prezi.
    var budapest = new google.maps.LatLngBounds({ lat: 47.40421683795179, lng: 18.63478915039059 }, { lat: 47.60367462748943, lng: 19.3825461083984})
    var prezi = new google.maps.LatLngBounds({ lat: 47.50422165813863, lng: 19.050531547698938 }, { lat: 47.50733808253021, lng: 19.06221525016781})
    var grund = new google.maps.LatLngBounds({ lat: 47.48360873861089, lng: 19.070747357044183 }, { lat: 47.48672638656027, lng: 19.082431059513056})
    locations = [budapest, prezi, grund];

    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

// Move the map by passing it a bounds object, what google.maps.LatLngBounds creates.
function updateMap(bounds) {
    map.fitBounds(bounds);
}
