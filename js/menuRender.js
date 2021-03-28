
function myFunction(){

var dropdown = document.getElementById("navlist");
var dropdownItems = dropdown.getElementsByTagName("a");


for (var i = 0; i < dropdownItems.length-1; i++) {
  dropdownItems[i].classList.toggle("dropBox");
  
    if (  dropdown.querySelector('.dropBox')===null ) {
      dropdownItems[i].setAttribute("Style", "color:white;");
    } else {
      dropdownItems[i].setAttribute("Style", "color:black;");

    }
}
}
function myFunction2(){

var dropdown = document.getElementById("navlist");
var dropdownItems = dropdown.getElementsByTagName("a")
for (var i = 0; i < dropdownItems.length-1; i++) {;
  dropdownItems[i].classList.remove("dropBox");
  dropdownItems[i].setAttribute("Style", "color:white;");
}
   }
