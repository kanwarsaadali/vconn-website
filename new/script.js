document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('dynamic-text');
    const text = "We Connect Businesses";  // Text to type
    let index = 0;  // Start at the first character

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);  // Add one character
            index++;
            setTimeout(typeText, 100);  // Typing speed (100 ms per character)
        }
    }

    typeText();  // Start the typing animation when the page loads
});
