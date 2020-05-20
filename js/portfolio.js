"use strict";

const portfolio = [
  {
    img: "./img/portfolio/1.jpg",
    title: "Design",
    category: ["All", "Graphic"],
  },
  {
    img: "./img/portfolio/2.jpg",
    title: "Design",
    category: ["All", "Design"],
  },
  {
    img: "./img/portfolio/3.jpg",
    title: "Design",
    category: ["All", "design"],
  },
  {
    img: "./img/portfolio/4.jpg",
    title: "Design",
    category: ["All", "design"],
  },
  {
    img: "./img/portfolio/5.jpg",
    title: "Design",
    category: ["All", "graphic"],
  },
  {
    img: "./img/portfolio/6.jpg",
    title: "Design",
    category: ["All", "gesign"],
  },
];

const filterbuttons=document.querySelector('#filtering').children
const filterItems = document.querySelector('.gallery').children

for (let i=0; i<filterbuttons.length; i++){
 filterbuttons[i].addEventListener("click", function(){
  console.log(this)
 
  const target=this.getAttribute("data-target")
  for (let k=0; k<filterItems.length; k++){
    filterItems[k].style.display="none";
    if(target==filterItems[k].getAttribute("data-target"))
    {
        filterItems[k].style.display="block";
    }
    
  }
 })
}

function galleryImages(filter) {
  let HTML = "";
  document.querySelector(".gallery").innerHTML = HTML;

  for (let i = 0; i < portfolio.length; i++) {
    if (portfolio[i].category.includes(filter)) {
      HTML = `
            <div class="gallery-img">
                <img src="${portfolio[i].img}" alt="images">
                    <div class="gallery-item">
                        <div>
                        <span> ${portfolio[i].title} <span>
                        <i class="chain fa fa-chain-broken" ></i>
                        <i class="zoom-in fa fa-search-plus" ></i>
                        </div>
                    </div>
            </div>`;
      document.querySelector(".gallery").innerHTML += HTML;
    }
  }
}

galleryImages("All");
