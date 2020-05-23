
/*let places = document.querySelectorAll('.counter');
for (let i = 0; i < places.length; i++) {
    animateValue(places[i], 1000);
}

function animateValue(element, duration) {   
    const end = parseInt(element.innerText);
    let current = 0;
    const stepTime = Math.abs(Math.floor(duration / end)); 
    const timer = setInterval(function() {
        current++;
        element.innerHTML = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}*/
$('.counter').each(function () {
    $(this).prop('counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});












