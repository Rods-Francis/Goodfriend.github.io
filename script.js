// Select the navigation bar
const navbar = document.querySelector('header nav');

// Variable to store the last scroll position
let lastScrollTop = 0;

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const currentScroll = window.pageYOffset;

    // Check if the user is scrolling down or up
    if (currentScroll > lastScrollTop) {
        // User is scrolling down - hide the navbar
        navbar.style.top = '-100px'; // Adjust to match your navbar's height
    } else {
        // User is scrolling up - show the navbar
        navbar.style.top = '0';
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});
