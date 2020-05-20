window.onscroll = function() {nav_position()};

let header = document.querySelector('header').offsetHeight;
let nav = document.querySelector('.nav');

function nav_position() {
  if (window.pageYOffset >= header) {
    nav.classList.remove("nav");
    nav.classList.add("kitasNav");
  } else { 
    nav.classList.remove("kitasNav");
    nav.classList.add("nav");
  }
}