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
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "9981a68191e6f096",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
window.addEventListener('load', init);
