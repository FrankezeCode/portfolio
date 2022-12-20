// declaration of variable and getting element
const navToggle = document.querySelector(`.nav-toggle`);
const navLinks = document.querySelectorAll(`.nav__link`);
const projects = document.getElementsByClassName('project');
const developerBtn = document.getElementById('developer-btn');
const devWorksContainer = document.getElementById('my-work');

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

//Developer btn is clicked
developerBtn.addEventListener('click', () => {
    developerBtn.classList.add('colored-btn');
    devWorksContainer.style.display = 'grid';
})

//Hover state for projects
for(let project of projects){
    //Check if the developer btn is active
    project.addEventListener('mouseover', () => {
        if(developerBtn.classList.contains('colored-btn')) project.lastElementChild.style.display = 'flex';
    });
    project.addEventListener('mouseout', () => {
        if(developerBtn.classList.contains('colored-btn')) project.lastElementChild.style.display = 'none';
    });
}