// declaration of variable and getting element
const navToggle = document.querySelector(`.nav-toggle`);
const navLinks = document.querySelectorAll(`.nav__link`)

// Toggling/creating the Nav button(page) after clicking the hamburger
navToggle.addEventListener(`click` , ()=>{
    document.body.classList.toggle(`nav-open`)
})


/* Removing Nav button(page) after clicking each link */
navLinks.forEach((link)=>{
    link.addEventListener(`click`, ()=>{
        document.body.classList.remove(`nav-open`)
    })
})

