

var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');


function slide(wrapper, items, prev, next) {
  var posX1 = 0,
  posX2 = 0,
  posInitial,
  posFinal,
  threshold = 100,
  slides = items.getElementsByClassName('slide'),
  slidesLength = slides.length,
  slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
  firstSlide = slides[0],
  lastSlide = slides[slidesLength - 1],
  cloneFirst = firstSlide.cloneNode(true),
  cloneLast = lastSlide.cloneNode(true),
  index = 0,
  allowShift = true;
  

  let wordpress = createSlide('firstSlide', 'pirma');
  let trends = createSlide('lastSlide', 'paskutine');
  sliderItems.appendChild(wordpress);
  sliderItems.appendChild(trends);


function createSlide(className, nodeText) {
  let slide = document.createElement('div');
  slide.classList.add('slide', className);
  slide.innerHTML = nodeText;
  return slide;
}

  
  const kiekPrasuktRatuku = 4;
//   for (let i = 0; i < kiekPrasuktRatuku; i++) {
//     let naujasWordpress = wordpress.cloneNode(true);
//     let naujasTrends = trends.cloneNode(true);
//     let naujasThemeforest = themeforest.cloneNode(true);
//     let naujasSkalbenke = skalbenke.cloneNode(true);
//     naujasWordpress.innerHTML = `${i+1}-asis zalias`;
//     naujasWordpress.id = `kurtas${i+1}_zalias`;
//     naujasTrends.innerHTML = `${i+1}-asis pink`;
//     naujasTrends.id = `kurtas${i+1}_pink`;
//     naujasThemeforest.innerHTML = `${i+1}-asis purpur`;
//     naujasThemeforest.id = `kurtas${i+1}_purpur`;
//     naujasSkalbenke.innerHTML = `${i+1}_gray`;
//     naujasSkalbenke.id = `kurtas${i+1}_gray`;
//     sliderItems.appendChild(naujasWordpress);
//     sliderItems.appendChild(naujasTrends);
//     sliderItems.appendChild(naujasThemeforest);
//     sliderItems.appendChild(naujasSkalbenke);
// }

  wrapper.classList.add('loaded');
  
  // Mouse events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Click events
  prev.addEventListener('click', function () { shiftSlide(-1) });
  next.addEventListener('click', function () { shiftSlide(1) });

  
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);


  let initSlides = setInterval(function(){shiftSlide(1);}, 1500);
  $('#slides').mouseover(function(){
    clearInterval(initSlides);
  }).mouseout(function(){
    initSlides = setInterval(function(){shiftSlide(1);}, 1500);
  })

  // items.style.transition = 'all 1s';



  
  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }

      if (dir == 1) {
        items.style.left = (posInitial - slideSize - 15 ) + "px";
        index++;      
      } else if (dir == -1) {
        items.style.left = (posInitial + slideSize + 15) + "px";
        index--;      
      }
    };
    
    allowShift = false;
    checkIndex ();
  }
    
  function checkIndex (){
    items.classList.remove('shifting');

    if (index == -1) {
      items.style.left = -(slidesLength * (slideSize-1)) + "px";
      index = slidesLength -1
    }

    if (index == slidesLength) {
      items.style.left = -(0 * slideSize/slideSize) + "px";
      index = 0;
    }
    
    allowShift = true;
  }
}

slide(slider, sliderItems, prev, next);