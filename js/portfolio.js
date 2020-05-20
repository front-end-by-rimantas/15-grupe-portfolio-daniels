"use strict";

const portfolio = [
  {
    img: "./img/portfolio/1.jpg",
    title: "Design",
    category: ["All", "Brand"],
  },
  {
    img: "./img/portfolio/2.jpg",
    title: "Design",
    category: ["All", "Design"],
  },
  {
    img: "./img/portfolio/3.jpg",
    title: "Design",
    category: ["All", "Design"],
  },
  {
    img: "./img/portfolio/4.jpg",
    title: "Design",
    category: ["All", "Brand"],
  },
  {
    img: "./img/portfolio/5.jpg",
    title: "Design",
    category: ["All", "Graphic"],
  },
  {
    img: "./img/portfolio/6.jpg",
    title: "Design",
    category: ["All", "Design"],
  },
];


const filterbuttons=document.querySelector('#filtering'),
  filterbtns=filterbuttons.children,
  totalFilterBtn=filterbtns.length,
  galleryItems=document.querySelector(".gallery-items").children,
  totalItems=galleryItems.length;
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
            <div>
                <img src="${portfolio[i].img}" alt="images" data-category="${portfolio[i].category}" class="img">
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


