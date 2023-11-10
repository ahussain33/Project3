function init(){
  var change = document.getByElementId("malePeacockOne");
  var buttonForward = document.getElementById("nextbutton1");
  var buttonBack = document.getElementById("nextbutton2");
  buttonForward.addEventListener("click", forward);
  buttonBack.addEventListener("click", back);

 function forward(){
    change.src = ("media/malepeacock2.jpg");
 }
 function back(){
    change.src = ("media/malepeacock.jpg");
 }
}
 function initMap() {
    var dumbo = {lat: 40.700802, lng:73.987602};
    var mapOptions = {
        center: dumbo,
        zoom: 10
    };
        var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
}
}
window.addEventListener('load', init);

