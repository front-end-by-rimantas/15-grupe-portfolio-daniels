

var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');
    /** CLONING **/
    // function myFunction() {
    //   let slides = sliderItems.querySelectorAll('.slide');
    //   firstSlide = slides[0],
    //   secondSlide = slides[1],
    //   thirdSlide = slides[2],
    //   cloneFirst = firstSlide.cloneNode(true),
    //   cloneSecond = secondSlide.cloneNode(true),
    //   cloneThird = thirdSlide.cloneNode(true),
  
    //   document.querySelector(".slides").appendChild(cloneFirst);
    //   document.querySelector(".slides").appendChild(cloneSecond);
    //   document.querySelector(".slides").appendChild(cloneThird);
    // } 
    // myFunction()
    // /** INSERT.BEFORE **/

    // function anotherFunction() {
    //   let slides = sliderItems.querySelectorAll('.slide')
    //   beforeSlide1 = slides[3];
    //   beforeSlide2 = slides[2];
    //   beforeSlide3 = slides[1];
    //   beforeSlide4 = slides[0];

    //   clonedSlide1 = beforeSlide1.cloneNode(true);
    //   clonedSlide2 = beforeSlide2.cloneNode(true);
    //   clonedSlide3 = beforeSlide3.cloneNode(true);
    //   clonedSlide4 = beforeSlide4.cloneNode(true);
      
    //   document.querySelector('.slides').insertBefore(clonedSlide4, slides[0]);
    //   document.querySelector('.slides').insertBefore(clonedSlide3, slides[0]);
    //   document.querySelector('.slides').insertBefore(clonedSlide2, slides[0]);
    //   document.querySelector('.slides').insertBefore(clonedSlide1, slides[0]);
    // }
    // anotherFunction()


function slide(wrapper, items, prev, next) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.querySelectorAll('.slide'),
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      slidesLength = slides.length,
      firstSlide = slides[0],
      secondSlide = slides[1],
      thirdSlide = slides[2],
      lastSlide = slides[slidesLength -1],
      cloneFir = firstSlide.cloneNode(true),
      cloneSec = secondSlide.cloneNode(true),
      cloneThird = thirdSlide.cloneNode(true),
      cloneLas = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;
      

  items.appendChild(cloneFir);
  items.appendChild(cloneSec);
  items.appendChild(cloneThird);
  items.insertBefore(cloneLas, firstSlide);
  wrapper.classList.add('loaded');
  
  // Mouse events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Click events
  prev.addEventListener('click', function ()  { shiftSlide(-1) });
  next.addEventListener('click', function () { shiftSlide(1) });

  
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);


  /*************/
  // let initSlides = setInterval(function(){shiftSlide(1);}, 1500);
  // $('#slides').mouseover(function(){
  //   clearInterval(initSlides);
  // }).mouseout(function(){
  //   initSlides = setInterval(function(){shiftSlide(1);}, 1500);
  // })
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
      index = slidesLength-1;
    }

    if (index == slidesLength) {
      items.style.left = -(0 * slideSize/slideSize) + "px";
      index = 0;
    }
    
    allowShift = true;
  }
  console.log(-(0 * slideSize/slideSize))
}

slide(slider, sliderItems, prev, next);