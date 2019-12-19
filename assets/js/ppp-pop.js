let ppp_popup = document.getElementById("ppp-pop");

// trigger open popup
function ppp_pop(e) {
  ppp_popup.style.display = "block";
  event.preventDefault();
}

// close pupup when click outside it
window.onclick = function (event) {
  if (event.target == ppp_popup) {
    ppp_popup.style.display = "none";
  }
}