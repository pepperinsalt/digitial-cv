// Instantiate glide.js
const glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 5000,
    hoverpause: false
})
glide.mount();

// Email service initialization - EmailJS
(function(){
    emailjs.init("user_UhBArauY2MWSdZZhQpUeI")
})()

// Get form button and element for error
const submitBtn = document.querySelector("#submitBtn");
const mailError = document.querySelector("#mail--error");

// Send mail when submiting the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent default behaviour
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
            // If send message was successfull:

            // Change button message
            submitBtn.innerHTML = 'Message Sent! <i class="material-icons">check_circle_outline</i>';

            // Clear fields
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
            
            // Reset button to default text
            setTimeout(() => {
                submitBtn.innerHTML = 'Send message <i class="material-icons">email</i></button>'
            }, 2000);
        })
        .catch(() => {
            // If sending message failed:

            // Change the button message
            submitBtn.innerHTML = `Something went wrong... <i class="material-icons">error_outline</i>`

            setTimeout(() => {
                submitBtn.innerHTML = 'Send message <i class="material-icons">email</i></button>';
            }, 3000);
        });
    } else {
        // Display an error message if input fields are not filled in
        mailError.textContent = `Please fill out all fields before clicking send.`;

        setTimeout(() => {
            mailError.textContent = "";
        }, 3000);
    }
});

// Display mouse scroll down animation
const mouseScroll = document.querySelector("#mouse__scroll");
let seconds = 0;

// Count to 10 before displaying mouse to scroll down
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

// Position of elements
const skills = document.querySelector("#skills");
const skillsYPos = skills.getBoundingClientRect().y - 250;
const glideSection = document.querySelector(".glide");
const glideYPos = glideSection.getBoundingClientRect().y - 250;
const contact = document.querySelector("#contact");
const contactYPos = contact.getBoundingClientRect().y;

function hideScroll() {
    // Reset the countdown seconds to 0
    seconds = 0;

    // Remove the class ONLY if it exists
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
    }
}

// Display and animate elements after quote animation is finished
const quote = document.querySelector("#quote");
const container = document.querySelector("#container");
const nav = document.querySelector("#nav__links");

// Wait for the quote animation to end
quote.addEventListener("animationend", displayElements);

// Display the elements - container & navigation bar - after quote's animation is finished
function displayElements() {
    nav.classList.add('display__nav');
    document.body.style.overflow = "unset";
    
    setTimeout(() => {
        container.classList.add('active__container');
        nav.classList.add('active__nav');
    }, 50);
}

// Scroll to projects section when clicked "projects" link
const projectsLink = document.querySelectorAll(".projects");
projectsLink.forEach(project => project.addEventListener("click", e => {
    window.scroll({
        top: 900,
        left: 0,
        behavior: 'smooth'
    })
    e.preventDefault();
}))

// Scroll to contact section when clicked "contact" link
const contactLink = document.querySelectorAll(".contacts");
contactLink.forEach(contact => contact.addEventListener("click", e => {
    window.scroll({
        top:1500,
        left: 0,
        behavior: 'smooth'
    })
    e.preventDefault();
}))

// Scroll to about section (top of page) when clicked "about" link.
const aboutLink = document.querySelector(".about");
aboutLink.addEventListener("click", e => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    e.preventDefault();
})

// Wait for content to be loaded then run showSroll function
document.addEventListener("DOMContentLoaded", showScroll)

// Listen for a scroll event
document.addEventListener("scroll", hideScroll);