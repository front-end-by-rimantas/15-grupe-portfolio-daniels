"use strict"

for (let i = 0; i < 4; i++) {
    var place = document.getElementById("value"+i);
    var value = place.getAttribute('value');
    const start = 0;
    console.log(place);
    console.log(value);
}   
  
/*
    <div id="number">5</div>
 
    $(document).ready(function() {
        var target = 50;
        var number = $('#number').text();
    
        while(number <= target) {
            setTimeout(function() {
                $('#number').text(++number);
            }, 30);
        }
    });
*/
// var interval = setInterval(function() {
//     $('#number').text(number);
//     if (number >= value) clearInterval(interval);
//     number++;
// }, 30);





// function animateValue(i) {
//     var obj = document.getElementById('value'+i);  
//     var end = obj.getAttribute('value');
//     var stepTime = 300 / end;
   
//     var timer = setInterval(function() {
//         obj.innerHTML =  parseInt(obj.innerHTML)+1;
//         if ( obj.innerHTML == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);  
// }
// function callAnimateValue(){
      
//     for (let i = 0; i < 4; i++) {
//         animateValue(i);
//     }
// }
// callAnimateValue();













