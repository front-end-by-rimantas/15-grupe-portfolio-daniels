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
/*
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
*/

const testData = [
{
    img_name: '1',
    text: 'Prie lifto stovi brunete ir blondine. Brunete sako: -Kviesk lifta. -Lifte, lifte! -saukia blondine. -Naudok mygtuka,kvaile. -Mygtuk,mygtuk!',
    name: 'Blondzinka',
    occup: 'Cia ir yra profesija'
},
{
    img_name: '2',
    text: 'Dvi blondines barasi: -Tu durne! -Ne, cia tu durne! -Ne, tu! -Tu pati durne! Prie ju prieina brunete, paklauso, paklauso ir taria: -Nusiraminkite, jus abi esate teisios…',
    name: 'Brunetka',
    occup: 'The lucky one'
},
{
    img_name: '3',
    text: 'Trecioje klaseje mokosi 3 mergaites: satene, brunete ir blondine. Kurios krutine didziausia? Blondines, nes jai jau 18 metų…',
    name: 'Satene',
    occup: 'Cha cha :)'
}];

let testHTML = ``;

function generateHTML () {
    for (let i=0; i<=testData.length-1; i++) {
        testHTML +=`
        <div class="testimonials_div mySlides fade">
            <img class="testimonials_img" src="./img/clients/${testData[i].img_name}.jpg" alt="author_photo">
            <p class="testimonials_p">${testData[i].text}</p>
            <h6 class="testimonials_h6">${testData[i].name}</h6>
            <p class="envanto">${testData[i].occup}</p>
        </div>`
    }
    DOMtestimonialsDiv.innerHTML = testHTML;
}
generateHTML();

// borrow from w3schools
var slideIndex = 1;
showSlides();

function showSlides() {
  var slides = document.querySelectorAll(".mySlides");
  for (let i = 1; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 2} 
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 11000); // Change image every 11 seconds
}
