"use strict"

const DOMtestimonials = document.querySelector('.testimonials');
const DOMtestimonialsDots = DOMtestimonials.querySelector('.testimonials_dots');

DOMtestimonialsDots.addEventListener('click', selectDot);

function selectDot () {
    const value = event.target.dataset.option;
    event.target.parentElement.setAttribute('data-selected', value);
}