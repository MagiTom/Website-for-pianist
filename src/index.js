import style from "./css/index.scss"

// indicator 
const progress = document.querySelector('#progress');
const navItem = [...document.querySelectorAll('.pages a')];
const page = document.querySelector('.page');
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

// video play 

const videobuttonStart = document.querySelectorAll('.videoButton');
const video = document.querySelectorAll('.play');
let loop = 0;

videobuttonStart.forEach((btn)=>{
    btn.addEventListener('click', function(){
        
        const film = btn.previousElementSibling;
console.log(film)

        film.load();
        film.muted = false;
       btn.style.visibility = 'hidden';
        film.setAttribute("controls", "controls");
    
       film.addEventListener('ended', ()=>{
        film.play();
        loop++;
        if(loop > 0){
            film.muted = true;
            btn.style.visibility = 'visible';
        }
    })
    })
    })

    video.forEach((film) =>{
        film.addEventListener('ended', ()=>{
            film.play();
            if(film.hasAttribute("controls", "controls")){
                film.removeAttribute("controls", "controls")
            }
    })
})

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
let screenPosition = window.innerHeight;
if (itemPosition < screenPosition) {
    item.classList.add('showText');
} else {
    item.classList.remove('showText');
}
}

window.addEventListener('scroll', function () {
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
   parallaxText('.aboutMe__content p')
   parallaxText('.aboutMe2__content p')
   parallaxText('.aboutMe3__content p')
   parallaxText('.aboutMe4__content p')
   parallaxText('.aboutMe5__content p')
   parallaxText('.quote__quote p')
});