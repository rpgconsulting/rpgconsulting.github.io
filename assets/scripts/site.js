const navEl = document.querySelector('.navbar');
const navBarHeight = 56;

window.addEventListener('scroll', () => {
    if (window.scrollY >= navBarHeight) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < navBarHeight) {
        navEl.classList.remove('navbar-scrolled');
    }
});