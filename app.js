function scrollHeader() {
    const header = document.getElementById('header');
    //>50vh height, add
    if (this.scrollY <= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card '
    },
    animation: {
        duration: 300
    }
});

//link active work
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(L => L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L => L.addEventListener('click', activeWork))

// scroll section active link

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

// dark light theme

const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Retrieve theme preference from local storage
const selectedTheme = localStorage.getItem('selected-theme') || 'light';
const selectedIcon = localStorage.getItem('selected-icon') || 'bx-sun';

// Set initial theme and icon based on user's preference
document.body.classList.toggle(lightTheme, selectedTheme === 'dark');
themeButton.classList.toggle(iconTheme, selectedTheme === 'light' && selectedIcon === 'bx-moon');

// Function to get the current theme
const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? 'light' : 'dark');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun');

// Function to toggle theme
const toggleTheme = () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
};

// Event listener for theme toggle button
themeButton.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', function () {
    const changeThemeElement = document.querySelector('.change-theme');

    changeThemeElement.addEventListener('click', function () {
        this.classList.toggle('rotate');
    });
});

//scrollreveal animation 

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 300,
})

sr.reveal(`.home__data`)
sr.reveal(`.nav__social, .nav__logo`, { delay: 300 })
sr.reveal(`.home__handle`, { delay: 350 })