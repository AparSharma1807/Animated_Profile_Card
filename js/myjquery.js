
var originalHTML;

// When hovering over an element with class 'container'
$('.container').hover(
    function () {
        // Store the original HTML content of 'h2' elements
        originalHTML = $('h2').html();
        
        // Set the HTML content of all 'h2' elements to "😊Apar Sharma😊"
        $('h2').html("😊Apar Sharma😊");
    },
    function () {
        // Restore the original HTML content when the hover is removed
        $('h2').html(originalHTML);
    }
);
    
function apar() {
    window.open('http://127.0.0.1:5500/portfolio/index.html', '_blank');
}
