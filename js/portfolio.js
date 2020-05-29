"use strict";

const portfolio = [
  {
    img: "./img/portfolio/1.jpg",
    title: "Web Design",
    category: ["all", "brand"],
  },
  {
    img: "./img/portfolio/2.jpg",
    title: "Web Design",
    category: ["all", "graphic"],
  },
  {
    img: "./img/portfolio/3.jpg",
    title: "Web Design",
    category: ["all", "design"],
  },
  {
    img: "./img/portfolio/4.jpg",
    title: "Web Design",
    category: ["all", "brand"],
  },
  {
    img: "./img/portfolio/5.jpg",
    title: "Web Design",
    category: ["all", "graphic"],
  },
  {
    img: "./img/portfolio/6.jpg",
    title: "Web Design",
    category: ["all", "design"],
  },
];


const filterbuttons=document.querySelectorAll('.filter-buttons span');


  filterbuttons.forEach(btn => {
    btn.addEventListener('click', function() {
    document.querySelector('.active').classList.remove("active")
    btn.classList.toggle("active");

  const category = btn.dataset.category
  galleryImages(category)
      
  } )
  })
  
function galleryImages(filter) {
  let HTML = "";
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = HTML;


  portfolio.forEach(image => {
   if (image.category.includes(filter)){
    HTML = `
    <div class="item">
        <img src="${image.img}" alt="images" data-category="${image.category}" class="img">
        <div id="lightbox"><img src="${image.img}" alt="images"> </div>
            <div class="overlay">
                <div>
                <span class="gallery-title"> ${image.title} <span>
                <div class="gallery-icons">
                <i class="chain fa fa-chain-broken" aria-hidden="true" ></i>
                <i class="zoom-in fa fa-search-plus" ></i>
                </div>
                </div>
            </div>
    </div>`;
    gallery.innerHTML += HTML;
    //beforeened???
   }
  })
}


galleryImages("all");

const lightbox = document.querySelector('#lightbox')
const images = document.querySelectorAll('.gallery .item');
console.log(images)
images.forEach(item => {
      item.querySelector('.zoom-in').addEventListener('click', e => {
        lightbox.classList.add('active')
        // const img = document.createElement('img')
        // const imagesLoc = document.querySelectorAll('.item > img')
        // img.src = imagesLoc.src
        // console.log(imagesLoc)
        // while (lightbox.firstChild) {
        //   lightbox.removeChild(lightbox.firstChild)
        // }
        // lightbox.appendChild(img)
      });
});
lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})