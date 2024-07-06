document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector('.typed-text');
    const textToType = 'Initializing...';
    const typingDelay = 100;
    const cursorBlinkDelay = 400; // Adjust blinking speed
    let charIndex = 0;

    function type() {
        if (charIndex < textToType.length) {
            typedTextSpan.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(blinkCursor, cursorBlinkDelay);
        }
    }

    function blinkCursor() {
        typedTextSpan.textContent = typedTextSpan.textContent.slice(0, -1); // Remove the last character
        typedTextSpan.textContent += '_'; // Append underscore for cursor
        setTimeout(unblinkCursor, cursorBlinkDelay);
    }

    function unblinkCursor() {
        typedTextSpan.textContent = typedTextSpan.textContent.slice(0, -1); // Remove the underscore
        setTimeout(blinkCursor, cursorBlinkDelay);
    }

    setTimeout(type, typingDelay);
});

