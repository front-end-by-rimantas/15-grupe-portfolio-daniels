



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
console.log("hi");

var dropdown = document.getElementById("navlist");
var dropdownItems = dropdown.getElementsByTagName("a")
for (var i = 0; i < dropdownItems.length-1; i++) {;
  dropdownItems[i].classList.remove("dropBox");
  dropdownItems[i].setAttribute("Style", "color:white;");
}
   }
  



  // var dropdown = document.getElementById("navlist");
  // var dropdownItems = dropdown.getElementsByTagName("a");
  
  // for (var i = 0; i < dropdownItems.length; i++) {
  //   dropdown[i].addEventListener("click", function() {
  //     this.classList.toggle("dropBox");
  //     var dropdownContent = this.nextElementSibling;
  //     if (dropdownContent.style.display === "block") {
  //       dropdownContent.style.display = "none";
  //     } else {
  //       dropdownContent.style.display = "block";
  //     }
  //   });
  // }
