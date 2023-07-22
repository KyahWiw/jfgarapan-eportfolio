/*================== toggle icon navbar ==================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*================== scroll sections active link ==================*/
let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscoll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*================== sticky navbar ==================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky, window.scrollY > 100');

    /*================== remove toggle icon and navbar when click navbar link (scoll) ==================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 /*================== scroll reveal ==================*/
 ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { orgin: 'top'});
ScrollReveal().reveal(',home-img, .activities-container', { origin: 
'bottom'});
ScrollReveal().reveal(',home-img, .activities-container', { origin: 
'left'});

/*================== typed js ==================*/
const typed = new Typed('.multiple-text', {
    strings: ['Information Technology student', 'Gamer', 'Video Editor', 'Broadcast Production'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const btnEl = document.querySelector('.btn');
const iconEl = document.querySelector('.icons');
const toggleOptions = () => {
    const wrapper = document.querySelector('.wrapper');
    console.log(iconEl);
    wrapper.classList.toggle('active');
    if (iconEl.classList.contains('fa-share-alt')) {
        iconEl.classList.replace('fa-share-alt','fa-close');
    } else {
        iconEl.classList.replace('fa-close', 'fa-share-alt');
    }
};
btnEl.addEventListener('click', toggleOptions);
