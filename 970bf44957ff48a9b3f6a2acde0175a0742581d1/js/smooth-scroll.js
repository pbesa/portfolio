$(document).ready(function() {
    // Smooth scrolling when clicking on anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        var targetId = $(this).attr('href'); // Get the href attribute value
        var targetOffset = $(targetId).offset().top; // Get the top offset of the target element
        
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000); // Adjust scroll speed if necessary
    });
});
