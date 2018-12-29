// Instantiate glide
const glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 5000,
    hoverpause: false
})

glide.mount();

// EMAIL SERVICE
(function(){
    emailjs.init("user_UhBArauY2MWSdZZhQpUeI")
})()
const submitBtn = document.querySelector("#submitBtn");
const mailError = document.querySelector("#mail--error");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Input fields
    const name = document.querySelector("#name_input");
    const email = document.querySelector("#email_input");
    const subject = document.querySelector("#subject_input");
    const message = document.querySelector("#message_input");

    // Template parameters for the email
    const templateParams = {
        user_name: this.user_name.value,
        user_email: this.user_email.value,
        mail_subject: this.mail_subject.value,
        text: this.text.value
    }

    // Check the fields for value, if there is, send, if not, decline
    if(name.value && email.value && subject.value && message.value) {
        // Send the email and return a promise
        emailjs.send('contact_service', 'contact_form', templateParams)
        .then( () => {
            // If successfull
            submitBtn.innerHTML = 'Message Sent! <i class="material-icons">check_circle_outline</i>';
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';

            setTimeout(() => {
                submitBtn.innerHTML = 'Send message <i class="material-icons">email</i></button>'
            }, 2000);
        })
        .catch(err => {
            // If it failed
            submitBtn.innerHTML = `Something went wrong... <i class="material-icons">error_outline</i>`
        });
    } else {
        mailError.textContent = `Please fill out all fields before clicking send.`;

        setTimeout(() => {
            mailError.textContent = "";
        }, 3000);
    }
});

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
const contactYPos = contact.getBoundingClientRect().y;

function hideScroll() {
    seconds = 0;
    console.log(window.pageYOffset);

    if(mouseScroll.classList.contains('active__mouse--scroll')) {
        mouseScroll.classList.remove('active__mouse--scroll');

        setTimeout(() => {
            mouseScroll.classList.remove('display__mouse--scroll');
        }, 1000);
    }

    // Show skills section
    if(window.pageYOffset >= skillsYPos || window.pageYOffset >= 400) {
        skills.classList.add('skills--active');
    }
    
    // Show projects section
    if (window.pageYOffset >= glideYPos || window.pageYOffset >= 700) {
        glideSection.classList.add('glide--active');
    }

    // Show contact section
    if(window.pageYOffset >= 1400) {
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

const projectsLink = document.querySelectorAll(".projects");
projectsLink.forEach(project => project.addEventListener("click", e => {
    window.scroll({
        top: 900,
        left: 0,
        behavior: 'smooth'
    })
    e.preventDefault();
}))

const contactLink = document.querySelectorAll(".contacts");
contactLink.forEach(contact => contact.addEventListener("click", e => {
    window.scroll({
        top:1500,
        left: 0,
        behavior: 'smooth'
    })
    e.preventDefault();
}))

const aboutLink = document.querySelector(".about");
aboutLink.addEventListener("click", e => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    e.preventDefault();
})

