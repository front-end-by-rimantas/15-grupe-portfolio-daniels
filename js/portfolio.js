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


const filterbuttons=document.querySelector('#filtering'),
  filterbtns=filterbuttons.children,
  totalFilterBtn=filterbtns.length,
  galleryItems=document.querySelector(".gallery-items").children
  console.log(galleryItems)
  for(let i=0; i<totalFilterBtn; i++){
    filterbtns[i].addEventListener('click', function(){
      filterbuttons.querySelector('.active').classList.remove("active")
      this.classList.add("active")

    })
  }
  

// const filterItems = document.querySelector('.gallery-img')



// for (let i=0; i<filterbuttons.length; i++){
//  filterbuttons[i].addEventListener("click", function(){
//   for(let j=0; j<filterbuttons.length; j++){
//     filterItems[j].classList.remove("active")
//   }
//   this.classList.add("active")
//  })
// }

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


