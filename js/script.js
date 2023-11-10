var map
function initMap() {
    var dumbo = {lat: 40.700802, lng:73.987602};
        var map = new google.maps.Map(document.getElementById("map"), {
        center: dumbo,
        zoom: 15
  });
}

