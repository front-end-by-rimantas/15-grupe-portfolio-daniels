"use strict"

const DOMtestimonials = document.querySelector('.testimonials');
const DOMtestimonialsDots = DOMtestimonials.querySelector('.testimonials_dots');
const DOMtestimonialsDiv = DOMtestimonials.querySelector('.testimonials_div');
const DOMtestimonialsDotFirst = DOMtestimonialsDots.querySelector('.testimonials_dot_first');
const DOMtestimonialsDotMidle = DOMtestimonialsDots.querySelector('.testimonials_dot_midle');
const DOMtestimonialsDotLast = DOMtestimonialsDots.querySelector('.testimonials_dot_last');

DOMtestimonialsDots.addEventListener('click', selectDot);

function selectDot () {
    const value = event.target.dataset.option;
    event.target.parentElement.setAttribute('data-selected', value);
}

DOMtestimonialsDotFirst.addEventListener('click', generateFirst);
function generateFirst() {
    let HTML = ``;
    HTML = `
    <img class="testimonials_img" src="./img/clients/1.jpg" alt="author_photo">
    <p class="testimonials_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias nesciunt dolore fugiat repellat quod velit, a ea esse hic necessitatibus voluptates voluptatum. Quas perspiciatis dolor quis qui blanditiis quo.</p>
    <h6 class="testimonials_h6">Alex Smith</h6>
    <p class="envanto">PIRMASIS</p>`
    
    DOMtestimonialsDiv.innerHTML = HTML;
}

DOMtestimonialsDotMidle.addEventListener('click', generateMidle);
function generateMidle() {
    let HTML = ``;
    HTML = `
    <img class="testimonials_img" src="./img/clients/1.jpg" alt="author_photo">
    <p class="testimonials_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias nesciunt dolore fugiat repellat quod velit, a ea esse hic necessitatibus voluptates voluptatum. Quas perspiciatis dolor quis qui blanditiis quo.</p>
    <h6 class="testimonials_h6">Alex Smith</h6>
    <p class="envanto">VIDURINIS</p>`
    
    DOMtestimonialsDiv.innerHTML = HTML;
}
DOMtestimonialsDotLast.addEventListener('click', generateLast);
function generateLast() {
    let HTML = ``;
    HTML = `
    <img class="testimonials_img" src="./img/clients/1.jpg" alt="author_photo">
    <p class="testimonials_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias nesciunt dolore fugiat repellat quod velit, a ea esse hic necessitatibus voluptates voluptatum. Quas perspiciatis dolor quis qui blanditiis quo.</p>
    <h6 class="testimonials_h6">Alex Smith</h6>
    <p class="envanto">TRECIAS</p>`
    
    DOMtestimonialsDiv.innerHTML = HTML;
}
