/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
// ScrollReveal: Define custom settings for fade in and fade out
ScrollReveal().reveal('.section', {
    distance: '60px',
    duration: 1000, // Animation duration in milliseconds
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function
    interval: 200, // Delays the animation for each sequentially revealed element
    opacity: 0, // Start with elements at 0 opacity
    origin: 'bottom', // Animation starts from the bottom
    reset: true // Elements animate every time they enter the viewport
});


// Specific elements with customized reveals
ScrollReveal().reveal('.nav__list, .home__title, .footer__title', {
    origin: 'top',
    delay: 500 // Delays the start of the animation
});

ScrollReveal().reveal('.about__subtitle, .skills__subtitle, .work__title, .contact__title', {
    origin: 'left',
    delay: 600
});

ScrollReveal().reveal('.about__text, .skills__text, .work__text, .contact__text', {
    origin: 'right',
    delay: 700
});
