// --- Mobile Navigation Logic ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a'); // Select all links in the menu

// 1. Toggle Menu when Hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if(navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#1a1a1a';
        navLinks.style.padding = '20px';
        navLinks.style.zIndex = '1000'; // Ensures menu sits on top of everything
    }
});

// 2. Close Menu when a Link is clicked (The Fix)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only close if we are on mobile (screen smaller than 768px)
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// --- Smooth Scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- About Section Slideshow Logic ---
// We wrap this in a check to ensure the slideshow exists before running
if (document.querySelector('.about-slideshow-container')) {
    let aboutSlideIndex = 0;
    showAboutSlides();

    function showAboutSlides() {
        let i;
        // We target "about-slide" specifically
        let slides = document.getElementsByClassName("about-slide");
        
        // Safety check: if no slides found, stop
        if (slides.length === 0) return;

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        aboutSlideIndex++;
        if (aboutSlideIndex > slides.length) {aboutSlideIndex = 1}    
        
        slides[aboutSlideIndex-1].style.display = "block";  
        
        // Change image every 3 seconds
        setTimeout(showAboutSlides, 3000); 
    }
}