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


// video play 

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

// video carousel

const section3 = document.querySelector('.video3');
const section4 = document.querySelector('.video4');
const containerMovie = document.querySelector('.container_movie');
const containerMovie2 = document.querySelector('.container_movie2');
const section3btns = document.querySelectorAll('.videoButton2');
console.log(section3btns)

let initialPosition = null;
let endPosition = null;
let moving = false;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;
let mousedown = 0;
let clicked = false;

const gestureStart = (e) =>{
    e.preventDefault();
    mousedown = 1;
    console.log(mousedown)
    containerMovie.style.pointerEvents = 'none';
    initialPosition = e.pageX;
    moving = true;
    const transformMatrix = window.getComputedStyle(containerMovie).getPropertyValue('transform');
    if(transformMatrix !== 'none'){
        transform = parseInt(transformMatrix.split(',')[4].trim());
    }
}

const gestureMove = (e) =>{
    if(moving){
        mousedown++;
    console.log(mousedown)
        const currentPosition = e.pageX;
        const diff = currentPosition - initialPosition;
        const section3_rect = section3.getBoundingClientRect();
        const containerMovie_rect = containerMovie.getBoundingClientRect();
        
if(e.pageX - lastPageX > 0){
    if(transformValue > 0){
        return;
    }
}else{
    if(containerMovie_rect.right < section3_rect.right){
        return
    }
}
transformValue = parseInt(transform) + diff;
containerMovie.style.transform = `translateX(${transformValue}px)`;
    }

    lastPageX = e.pageX;
}

const gestureEnd = (e)=>{
    moving = false;
    containerMovie.style.pointerEvents = 'all';
    endPosition = e.pageX;
}

//detect how long is press

let pressTimer = 0;
let longpress = false;

section3btns.forEach((btn)=>{
    btn.addEventListener('mousedown', (e)=>{
        longpress = false; 
        pressTimer = window.setTimeout(function(){
        longpress = true; 
        console.log('dlugi click')
    gestureStart(e);
        },200)
    })
})

section3btns.forEach((btn)=>{
    btn.addEventListener('mouseup', ()=>{
        clearTimeout(pressTimer);
    })
})

section3btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(longpress) { // if detect hold, stop onclick function
            return false;
        }else{
            console.log('sss')
            const film = btn.previousElementSibling;
            btn.style.visibility = 'hidden';
            startPlay(film);
            film.addEventListener('ended', ()=>{
                endPlay(film);
                   btn.style.visibility = 'visible';
           })   
        }
    })
})

// Pointer Events
if(window.PointerEvent){
    // section3.addEventListener('pointerdown', gestureStart);
    section3.addEventListener('pointermove', gestureMove);
    section3.addEventListener('pointerup', gestureEnd);
}else {
    // section3.addEventListener('touchdown', gestureStart);
    section3.addEventListener('touchmove', gestureMove);
    section3.addEventListener('touchup', gestureEnd);
    // section3.addEventListener('mousedown', gestureStart);
    section3.addEventListener('mousemove', gestureMove);
    section3.addEventListener('mouseup', gestureEnd);
}

// test ====================
