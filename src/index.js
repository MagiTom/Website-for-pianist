import style from "./css/index.scss"

// indicator 
const progress = document.querySelector('#progress');
const navItem = [...document.querySelectorAll('.pages a')];
const body = document.querySelector('body');
const reveal = document.querySelector('.reveal');
const menuHamburger = document.querySelector('.menu__hamburger');
const menuText = document.querySelector('.menu__text');
const navigation = document.querySelector('.navigation');
const navigationPages = document.querySelector('.pages');

function indicator(e) {
    progress.style.left = e.offsetLeft + "px";
    progress.style.width = e.offsetWidth + "px";
}

navItem.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
        changePage();
        if(link.classList.contains('pages__about_title')){
            setTimeout("location.href = './index.html';",500);   
        } else if(link.classList.contains('pages__video_title')){
            setTimeout("location.href = './video.html';",500);   
        } else if(link.classList.contains('pages__kontakt_title')){
            setTimeout("location.href = './kontakt.html';",500);  
        }
})
})

// close menu icon and open navigation

menuHamburger.addEventListener('click', clickNavi)

function changePage(){
    navigationPages.classList.add('pages_hidden');
}

function clickNavi() {
    menuHamburger.classList.toggle('toggle');
    menuText.classList.toggle('hidden');
   if(navigation.classList.contains('hidden_nav') && navigationPages.classList.contains('pages_hidden')) {
    navigation.classList.remove('roll');
       navigation.classList.remove('hidden_nav');
       navigation.classList.add('show_nav');
       navigationPages.classList.remove('pages_hidden');
       navigationPages.classList.add('pages_show');
   } else {
    navigation.classList.remove('show_nav');
    navigation.classList.add('roll');
    navigationPages.classList.remove('pages_show');
    navigationPages.classList.add('pages_hidden');
    setTimeout(()=>{
        navigation.classList.add('hidden_nav');
    }, 500);
   }
}

// show when page is loading 
window.onload = function() {
    reveal.classList.add('roll');
  };

// Paralax image

function parallax(element, speed) {
    const item = document.querySelector(element);
    let contentPosition = item.getBoundingClientRect().top/8;
    
item.style.backgroundSize = 110 +window.pageYOffset/70 + '%';

        item.style.transform = `translateY(${contentPosition * speed}px)`;

        item.style.transition = `background-size 2s ease-in-out, transform 1s ease-in-out`
}

function parallaxBg(element){
    const item = document.querySelector(element);
    item.style.backgroundSize = 90 +window.pageYOffset/60 + '%';
    item.style.transition = `background-size 2s ease-in-out`;

}

function parallaxText(element){
    const item = document.querySelector(element);

let itemPosition = item.getBoundingClientRect().top;
let screenPosition = window.innerHeight/1.2;

if (itemPosition < screenPosition) {
    item.classList.remove('hidden');
    item.classList.add('showText');
} else {
    item.classList.remove('showText');
    item.classList.add('hidden');
}
}

window.addEventListener('scroll', function () {

    if(body.classList.contains('aboutMePage')){
        effectsForAboutMe();
    } else if (body.classList.contains('videosPage')){
        effectsForVideoPage();
    }
  
});

function effectsForAboutMe(){
    parallax('.nav .name', 0.2);
    parallax('.nav .surname', 0.5);
    parallax('.nav .quote', 0.2);
    parallax('.aboutMe__image', 0.2);
    parallax('.aboutMe2__image', 0.2);
    parallax('.aboutMe3__image', 0.2);
    parallax('.aboutMe4__image', 0.2);
    parallax('.quote__image2', 0.2);
    parallax('.quote__image2_back', 0.2);
   parallaxBg('.aboutMe5__image');
   parallaxText('.aboutMe__content p');
   parallaxText('.aboutMe2__content p');
   parallaxText('.aboutMe3__content p');
   parallaxText('.aboutMe4__content p');
   parallaxText('.aboutMe5__content p');
   parallaxText('.quote__quote p');
}

function effectsForVideoPage(){
    parallax('.nav .name2', 0.2);
    parallax('.video1__container .video_wrapper', 0.2);
    parallax('.video2 .video_wrapper', 0.2);
    parallaxText('.video1__content p');
    parallaxText('.video2__content p');
}


// <============= video play ===================> 

const videobuttonStart = document.querySelectorAll('.videoButton');
const video = document.querySelectorAll('.play');
let loop = 0;

videobuttonStart.forEach((btn)=>{
    btn.addEventListener('click', function(){
        const film = btn.previousElementSibling;
       startPlay(film);
       btn.style.visibility = 'hidden';
    
       film.addEventListener('ended', ()=>{
         endPlay(film);
            btn.style.visibility = 'visible';
    })   
    })
    })

function startPlay(film){
    film.load();
    film.muted = false; 
    film.setAttribute("controls", "controls");
}

function endPlay(film){
    film.play();
        loop++;
        if(loop > 0){
            film.muted = true;
        }
}

    video.forEach((film) =>{
        film.addEventListener('ended', ()=>{
            film.play();
            if(film.hasAttribute("controls", "controls")){
                film.removeAttribute("controls", "controls")
            }
    })
})

//<================ video carousel ==============>

const section3 = document.querySelector('.video3');
const section4 = document.querySelector('.video4');
const containerMovie = document.querySelector('.container_movie');
const containerMovie2 = document.querySelector('.container_movie2');
const section3btns = document.querySelectorAll('.videoButton1');
const section4btns = document.querySelectorAll('.videoButton2');

let initialPosition = null;
let moving = false;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;
let transformMatrix = 0;
let carusel1 = false;
let carusel2 = false;

const gestureStart = (e) =>{
    initialPosition = e.pageX;
    moving = true;
    if(carusel1){
        containerMovie.style.pointerEvents = 'none';
        transformMatrix = window.getComputedStyle(containerMovie).getPropertyValue('transform');
    }else if(carusel2){
        containerMovie2.style.pointerEvents = 'none';
        transformMatrix = window.getComputedStyle(containerMovie2).getPropertyValue('transform');
    }
  
    if(transformMatrix !== 'none'){
        transform = parseInt(transformMatrix.split(',')[4].trim());
    }
}

const gestureMove = (e) =>{
    e.preventDefault();
    if(moving){
        const currentPosition = e.pageX;
        const diff = currentPosition - initialPosition;
        const section3_rect = section3.getBoundingClientRect();
        const containerMovie_rect = containerMovie.getBoundingClientRect();
        const section4_rect = section4.getBoundingClientRect();
        const containerMovie2_rect = containerMovie2.getBoundingClientRect();
        
if(e.pageX - lastPageX > 0){
    if(transformValue > 0){
        return;
    }
}else{
    if(containerMovie_rect.right < section3_rect.right || containerMovie2_rect.right < section4_rect.right){
        return
    }
}
transformValue = parseInt(transform) + diff;

if(carusel1){
    containerMovie.style.transform = `translateX(${transformValue}px)`;
}else if(carusel2){
    containerMovie2.style.transform = `translateX(${transformValue}px)`;
}
    }
    lastPageX = e.pageX;
}

const gestureEnd = (e)=>{
    e.preventDefault();
    clearTimeout(pressTimer);
    moving = false;
    if(carusel1){
        carusel1 = false;
        containerMovie.style.pointerEvents = 'all';
    }else if(carusel2){
        carusel2 = false;
        containerMovie2.style.pointerEvents = 'all';
    }
}

//detect how long is press

let pressTimer = 0;
let longpress = false;

section3btns.forEach((btn)=>{
    btn.addEventListener('mousedown', (e)=>{
        e.preventDefault();
        carusel1 = true;
        carusel2 = false;
        mousedownCaruselBtn(e);
        console.log(carusel1);
    })
})
section4btns.forEach((btn)=>{
    btn.addEventListener('mousedown', (e)=>{
        e.preventDefault();
        carusel2 = true;
        carusel1 = false;
        mousedownCaruselBtn(e);
    })
})

section3btns.forEach((btn)=>{
    btn.addEventListener('mouseup', (e)=>{
        mouseupCaruselBtn(e);
    })
})
section4btns.forEach((btn)=>{
    btn.addEventListener('mouseup', (e)=>{
        mouseupCaruselBtn(e);
    })
})

section3btns.forEach((btn)=>{
       clickCaruselBtn(btn);
})
section4btns.forEach((btn)=>{
       clickCaruselBtn(btn);
})

function mousedownCaruselBtn(btn){
        longpress = false; 
        pressTimer = window.setTimeout(function(){
        longpress = true; 
        console.log('dlugi click')
            gestureStart(btn);
        },200)
}

function mouseupCaruselBtn(btn){
    gestureEnd(btn);
}

function clickCaruselBtn(btn){
    btn.addEventListener('click', ()=>{
        if(longpress) { // if detect hold, stop onclick function
            return false;
        }else{
            const film = btn.previousElementSibling;
            btn.style.visibility = 'hidden';
            startPlay(film);
            film.addEventListener('ended', ()=>{
                endPlay(film);
                   btn.style.visibility = 'visible';
           })   
        }
     })
}

// Pointer Events
if(window.PointerEvent){
    // section3.addEventListener('pointerdown', gestureStart);
    section3.addEventListener('pointermove', gestureMove);
    section3.addEventListener('pointerup', gestureEnd);
    section4.addEventListener('pointermove', gestureMove);
    section4.addEventListener('pointerup', gestureEnd);
}else {
    // section3.addEventListener('touchdown', gestureStart);
    section3.addEventListener('touchmove', gestureMove);
    section3.addEventListener('touchup', gestureEnd);
    section4.addEventListener('touchmove', gestureMove);
    section4.addEventListener('touchup', gestureEnd);
    // section3.addEventListener('mousedown', gestureStart);
    section3.addEventListener('mousemove', gestureMove);
    section3.addEventListener('mouseup', gestureEnd);
    section4.addEventListener('mousemove', gestureMove);
    section4.addEventListener('mouseup', gestureEnd);
}

//carusel on arrows

const videosInCarusel1 = document.querySelectorAll('.container_movie .video_wrapper');
const videosInCarusel2 = document.querySelectorAll('.container_movie2 .video_wrapper');
const arrowRight1 = document.querySelector('.video3 .fa-chevron-circle-right');
const arrowLeft1 = document.querySelector('.video3 .fa-chevron-circle-left');
const arrowRight2 = document.querySelector('.video4 .fa-chevron-circle-right');
const arrowLeft2 = document.querySelector('.video4 .fa-chevron-circle-left');
let counter1 = 0;
let counter2 = 0;


arrowRight1.addEventListener('click', ()=>{
    counter1++;
    nextSlide1();
})

arrowLeft1.addEventListener('click', ()=>{
    counter1--;
nextSlide1();
})
arrowRight2.addEventListener('click', ()=>{
    counter2++;
    nextSlide2();
})

arrowLeft2.addEventListener('click', ()=>{
    counter2--;    
nextSlide2();
})

function nextSlide1(){
  const lastBtn_rect = section3btns[section3btns.length -1].getBoundingClientRect();
  const firstBtn_rect = section3btns[0].getBoundingClientRect();

    if(lastBtn_rect.right - firstBtn_rect.width < window.innerWidth){
        arrowRight1.style.display = 'none';
    }else{
        arrowRight1.style.display = 'block';
    }

    if(firstBtn_rect.right - firstBtn_rect.width <= 0 + firstBtn_rect.width){
        arrowLeft1.style.display = 'block';
    }else{
        arrowLeft1.style.display = 'none';
    } 
    

    videosInCarusel1.forEach((video)=>{
video.style.transform = `translateX(${counter1 * -video.offsetWidth}px)`;
video.style.transition = 'all 0.5s ease-in-out';
    })
}
function nextSlide2(){
  const lastBtn_rect = section4btns[section4btns.length -1].getBoundingClientRect();
  const firstBtn_rect = section4btns[0].getBoundingClientRect();

    if(lastBtn_rect.right - firstBtn_rect.width < window.innerWidth){
        arrowRight2.style.display = 'none';
    }else{
        arrowRight2.style.display = 'block';
    }

    if(firstBtn_rect.right - firstBtn_rect.width <= 0 + firstBtn_rect.width){
        arrowLeft2.style.display = 'block';
    }else{
        arrowLeft2.style.display = 'none';
    } 
    

    videosInCarusel2.forEach((video)=>{
video.style.transform = `translateX(${counter2 * -video.offsetWidth}px)`;
video.style.transition = 'all 0.5s ease-in-out';
    })
}

arrowLeft1.style.display = 'none';
arrowLeft2.style.display = 'none';