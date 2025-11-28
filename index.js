/* ============================================== */
/* JAVASCRIPT FOR SMOOTH SCROLLING                */
/* ============================================== */
/* This file makes the navigation links scroll smoothly instead of jumping */

// Select all navigation links (the <a> tags inside the <nav>)
document.querySelectorAll('nav a').forEach(link => {
    
    // Add a click event listener to each link
    link.addEventListener('click', function(e) {
        
        // Prevent the default jump behavior
        e.preventDefault();
        
        // Find the section to scroll to (gets the href like "#about")
        const target = document.querySelector(this.getAttribute('href'));
        
        // Scroll smoothly to that section
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


