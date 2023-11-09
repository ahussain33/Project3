function init(){
  var buttonForward = document.getElementById("nextbutton1")
  var buttonBack = document.getElementById("nextbutton2")
  buttonForward.addEventListener("click", forward)
  buttonBack.addEventListener("click", back)
}
function forward(){
  document.getByElementId("malePeacockOne")
}
function back(){
  document.getByElementId("malePeacockTwo")
}
window.addEventListener('load', init);
