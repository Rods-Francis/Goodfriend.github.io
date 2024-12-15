let lastScrollTop = 0;
const navbar = document.querySelector('header nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        // Scroll Down - Hide Navbar
        navbar.style.top = '-100px'; // Adjust value based on navbar height
    } else {
        // Scroll Up - Show Navbar
        navbar.style.top = '0';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});

