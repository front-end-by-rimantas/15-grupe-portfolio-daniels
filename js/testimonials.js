"use strict"

const DOMtestimonials = document.querySelector('.testimonials');
const DOMtestimonialsDots = DOMtestimonials.querySelector('.testimonials_dots');
const DOMtestimonialsDiv = DOMtestimonials.querySelector('.testimonials_div');


DOMtestimonialsDots.addEventListener('click', selectDot);

function selectDot () {
    const value = event.target.dataset.option;
    event.target.parentElement.setAttribute('data-selected', value);
}

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

let slideIndex = 1;
let t;
showSlides(slideIndex);

function showSlides() {
const slides = document.querySelectorAll(".mySlides");
for (let i = 1; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 2} 
slides[slideIndex-1].style.display = "block";
for (let i = 1; i < slides.length; i++) {
    if (slideIndex == 2) {
    DOMtestimonialsDots.dataset.selected = 'first'}
    if (slideIndex === 3) {
    DOMtestimonialsDots.dataset.selected = 'midle'}
    if (slideIndex === 4) {
    DOMtestimonialsDots.dataset.selected = 'last'}
} 
  t = setTimeout(showSlides, 11000); // Change image every 11 seconds
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    clearTimeout(t);
}