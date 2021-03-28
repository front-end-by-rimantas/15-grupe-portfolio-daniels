window.onscroll = function() {nav_position()};

let header = document.querySelector('.hero').offsetHeight;
let nav = document.querySelector('.nav');

function nav_position() {
  var dropdown = document.getElementById("navlist");
var dropdownItems = dropdown.getElementsByTagName("a");
  if (window.pageYOffset >= header) {
    nav.classList.remove("nav");
    nav.classList.add("kitasNav");

for (var i = 0; i < dropdownItems.length-1; i++) {
      dropdownItems[i].setAttribute("Style", "color:black;");
}
  } else { 
    for (var i = 0; i < dropdownItems.length-1; i++) {
      dropdownItems[i].setAttribute("Style", "color:white;");
}
    nav.classList.remove("kitasNav");
    nav.classList.add("nav");

  }
}
function spalva() {
 document.querySelector("#navlist").classList.add("aktyvi");
 console.log(hi);
}

