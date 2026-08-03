/*==========================================
        MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
/*==========================================
        TYPING EFFECT
==========================================*/

const words = [
    "Web Developer",
    "Frontend Developer",
    "BCA Student",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){

        typing.textContent = currentWord.substring(0,charIndex--);

    }else{

        typing.textContent = currentWord.substring(0,charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length + 1){

        isDeleting = true;

        speed = 1200;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect,speed);

}

typeEffect();

/*==========================================
        SCROLL TO TOP
==========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};