'use strict';

let blogData = [
    {
        img: './img/blog/1.jpg',
        p1: 'Wordpress',
        h4: 'Top WordPress Themes and Plugins for Hotels, Travel, and',
        p2: 'Read More'
    },
    {
        img: './img/blog/2.jpg',
        p1: 'Trends',
        h4: 'Master These Awesome New Skills in March 2018',
        p2: 'Read More'
    },
    {
        img: './img/blog/3.jpg',
        p1: 'Themeforest',
        h4: 'The 20 Best Lightroom Presets You Need to Know About',
        p2: 'Read More'
    },
    {
        img: './img/blog/4.jpg',
        p1: 'Trends',
        h4: 'Best Design Items to Appeal to the Millennial Generation',
        p2: 'Read More'
    },
]

let blogsite = ``;

blogData.forEach(dalykai => {
    blogsite += `
        <div class="slide">
            <div class="img-box">
                <img src="${dalykai.img}" class="blog-img">
            </div>
            <div class="text-box">
                <p class="trends">${dalykai.p1}</p>
                <h4 class="trends-text">${dalykai.h4}</h4>
                <p class="read-more">${dalykai.p1}</p>
            </div>
        </div>` 
                })

document.querySelector('.slides').innerHTML += blogsite


const slideHtmlBase = 
`<div class="slide">
    <div class="img-box">
        <img class="blog-img">
    </div>
    <div class="text-box">
        <p class="trends"></p>
        <h4 class="trends-text"></h4>
        <p class="read-more"></p>
    </div>
</div>`;

function CreateSlides(parentId) {

    for (let a = 0; a < 3; a++) {

        for (let i = 0; i<data.length; i++) {
            const currSlideData = data[i];
            const createdSlide = CreateSlide(currSlideData.img, currSlideData.p1, currSlideData.hed, currSlideData.p2)
            document.getElementById(parentId).appendChild(createdSlide);
        }

    }
}

function CreateSlide(img, p1, hed, p2) {
    let createdSlide = document.createElement('div');
    createdSlide.innerHTML = slideHtmlBase;
    createdSlide.querySelector('.blog-img').src = img;
    createdSlide.querySelector('.trends').innerHTML = p1;
    createdSlide.querySelector('.trends-text').innerHTML = hed;
    createdSlide.querySelector('.read-more').innerHTML = p2;
    console.log(createdSlide)
    return createdSlide;
}