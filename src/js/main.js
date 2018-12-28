// Instantiate glide
const glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 5000,
    hoverpause: false
})

glide.mount();

// Display mouse scroll down animation
const mouseScroll = document.querySelector("#mouse__scroll");
let seconds = 0;

document.addEventListener("DOMContentLoaded", showScroll)

function showScroll() {
    setInterval(() => {
        seconds++;
    
        if(seconds >= 10) {
            mouseScroll.classList.add('display__mouse--scroll');

            setTimeout(() => {
                mouseScroll.classList.add('active__mouse--scroll');
            }, 50);
        }
    }, 1000);

}

// Listen for a scroll event
document.addEventListener("scroll", hideScroll);
const skills = document.querySelector("#skills");
const skillsYPos = skills.getBoundingClientRect().y - 250;
const glideSection = document.querySelector(".glide");
const glideYPos = glideSection.getBoundingClientRect().y - 250;
const contact = document.querySelector("#contact");
const contactYPos = contact.getBoundingClientRect().y - 500;

function hideScroll() {
    seconds = 0;
    console.log(contactYPos);

    if(mouseScroll.classList.contains('active__mouse--scroll')) {
        mouseScroll.classList.remove('active__mouse--scroll');

        setTimeout(() => {
            mouseScroll.classList.remove('display__mouse--scroll');
        }, 1000);
    }

    // Show skills section
    if(window.pageYOffset >= skillsYPos) {
        skills.classList.add('skills--active');
    }
    
    // Show projects section
    if (window.pageYOffset >= glideYPos) {
        glideSection.classList.add('glide--active');
    }

    // Show contact section
    if(window.pageYOffset >= contactYPos) {
        contact.classList.add('contact--active');
        console.log('contact');
    }
}


// Display and animate elements after quote animation is finished
const quote = document.querySelector("#quote");
const container = document.querySelector("#container");
const nav = document.querySelector("#nav__links");

quote.addEventListener("animationend", displayElements);

function displayElements() {
    nav.classList.add('display__nav');
    document.body.style.overflow = "unset";
    
    setTimeout(() => {
        container.classList.add('active__container');
        nav.classList.add('active__nav');
    }, 50);
}

// SMOOTH SCROLL TO SECTION
// const navLinks = nav.querySelector('a');
// navLinks.forEach(link => {
//     if(link.id === 'projects_top') {
//         window.scroll({
//             top: 800,
//             left: 0,
//             behavior: 'smooth'
//         });
//     }
// })
const projectsLink = document.querySelector("#projects_top");
projectsLink.addEventListener("click", () => {
    window.scroll({
        top: 900,
        left: 0,
        behavior: 'smooth'
    });
})
const contactLink = document.querySelector("#contact_top");
contactLink.addEventListener("click", () => {
    window.scroll({
        top:1350,
        left: 0,
        behavior: 'smooth'
    })
})
