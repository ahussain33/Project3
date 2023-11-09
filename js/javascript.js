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
window.addEventListener('load', init);
google.maps.event.addDomListener(window, 'load', init);
