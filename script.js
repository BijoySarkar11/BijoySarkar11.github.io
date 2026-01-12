// Toggle Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

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
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// --- About Section Slideshow Logic ---
let aboutSlideIndex = 0;
showAboutSlides();

function showAboutSlides() {
    let i;
    // We target "about-slide" specifically so it doesn't mess up the Hero slider
    let slides = document.getElementsByClassName("about-slide");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    aboutSlideIndex++;
    if (aboutSlideIndex > slides.length) {aboutSlideIndex = 1}    
    
    slides[aboutSlideIndex-1].style.display = "block";  
    
    // Change image every 3 seconds
    setTimeout(showAboutSlides, 3000); 
}