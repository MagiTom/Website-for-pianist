// const section3 = document.querySelector('.video3');
// const section4 = document.querySelector('.video4');
// const containerMovie = document.querySelector('.container_movie');
// const containerMovie2 = document.querySelector('.container_movie2');

// let pressed = false;
// let pressed2 = false;
// let cursorXSpace;

// section3.addEventListener('mousedown', (e) =>{
// pressed = true;
// pressed2 = false;
// cursorXSpace = e.offsetX - containerMovie.offsetLeft;
// section3.style.cursor = 'grabbing';

// });

// section4.addEventListener('mousedown', (e) =>{
// pressed2 = true;
// pressed = false;
// cursorXSpace = e.offsetX - containerMovie2.offsetLeft;
// section4.style.cursor = 'grabbing';

// });

// section3.addEventListener('mouseup', ()=>{
//     section3.style.cursor = 'grab';
//     pressed = false;
// })

// section4.addEventListener('mouseup', ()=>{
//     section4.style.cursor = 'grab';
//     pressed2 = false;
// })

// window.addEventListener('mouseup', ()=>{
//     pressed = false;
//     pressed2 = false;
// })

// section3.addEventListener('mousemove', (e)=>{
//     if(!pressed) return;
//     e.preventDefault();
//     containerMovie.style.left = `${e.offsetX - cursorXSpace}px`;
//     boundCards();
// })

// section4.addEventListener('mousemove', (e)=>{
//     if(!pressed2) return;
//     e.preventDefault();
//     containerMovie2.style.left = `${e.offsetX - cursorXSpace}px`;
//     boundCards2();
// })

// function boundCards(){
//     const section3_rect = section3.getBoundingClientRect();
//     const containerMovie_rect = containerMovie.getBoundingClientRect();

//     if(parseInt(containerMovie.style.left) > 0){
//         containerMovie.style.left = 0;
//     }else if (containerMovie_rect.right < section3_rect.right){
//         containerMovie.style.left = `-${containerMovie_rect.width - section3_rect.width}px`;
//     }
// }

// function boundCards2(){
//     const section3_rect = section4.getBoundingClientRect();
//     const containerMovie_rect = containerMovie2.getBoundingClientRect();
//     if(parseInt(containerMovie2.style.left) > 0){
//         containerMovie2.style.left = 0;
//     }else if (containerMovie_rect.right < section3_rect.right){
//         containerMovie2.style.left = `-${containerMovie_rect.width - section3_rect.width}px`;
//     }
// }


// teststststststs===========================



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
        },1000)
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
            film.load();
        }
    })
})

// Pointer Events
if(window.PointerEvent){
    section3.addEventListener('pointerdown', gestureStart);
    section3.addEventListener('pointermove', gestureMove);
    section3.addEventListener('pointerup', gestureEnd);
}else {
    section3.addEventListener('touchdown', gestureStart);
    section3.addEventListener('touchmove', gestureMove);
    section3.addEventListener('touchup', gestureEnd);
    section3.addEventListener('mousedown', gestureStart);
    section3.addEventListener('mousemove', gestureMove);
    section3.addEventListener('mouseup', gestureEnd);
}
