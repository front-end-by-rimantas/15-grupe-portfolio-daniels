/*"use strict";
const mygtukas=document.querySelectorAll('.nav >.select a');


mygtukas.forEach(myg => {
  myg.addEventListener('click', function() {
  document.querySelector('a').classList.remove("a")
  myg.classList.toggle("selected");

} )
})

const batonas=document.querySelectorAll('.kitasNav >.select a');


batonas.forEach(bat => {
  bat.addEventListener('click', function() {
  document.querySelector('a').classList.remove("a")
  bat.classList.toggle("selected");

} )
})*/

$(".nav >.select a").on("click", function() { 
    $(".nav >.select a").not(this).each(function() { 
       $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $(".kitasNav >.select a").on("click", function() { 
       $(".kitasNav >.select a").not(this).each(function() { 
          $(this).removeClass("selected");
       });
       $(this).addClass("selected");
    });
 });


