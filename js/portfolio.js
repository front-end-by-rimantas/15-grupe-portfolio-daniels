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

function galleryImages(filter) {
  let HTML = "";
  document.querySelector(".gallery").innerHTML = HTML;

  for (let i = 0; i < portfolio.length; i++) {
    if (portfolio[i].category.includes(filter)) {
      HTML = `
            <div>
            <img src="${portfolio[i].img}" alt="images" class="images">
            <div class="gallery-item">
            <div>
            <span> ${portfolio[i].title} <span>
            <i class="gallery-down fa fa-chain-broken" ></i>
            <i class="gallery-zoom fa fa-search-plus" ></i>
            </div>
            </div>
            </div>`;
      document.querySelector(".gallery").innerHTML += HTML;
    }
  }
}

galleryImages("All");
