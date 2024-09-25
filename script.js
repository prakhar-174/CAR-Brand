document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById("scroll-to-top");
    
    console.log("Script loaded, button element:", scrollToTopBtn);

    // Show the button when user scrolls down 300px from the top
    window.onscroll = function() {
        console.log("Scroll position:", window.scrollY);
        if (window.scrollY > 300) {
            console.log("Showing button");
            scrollToTopBtn.style.display = "block";
        } else {
            console.log("Hiding button");
            scrollToTopBtn.style.display = "none";
        }
    };

    // Scroll to top when button is clicked
    scrollToTopBtn.onclick = function() {
        console.log("Button clicked");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});
// Prevent the default behavior of the info-link
document.querySelectorAll(".info-link").forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
    });
});
