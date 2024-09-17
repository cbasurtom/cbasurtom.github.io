document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('dynamic-text');
    const words = ["compsci", "philo", "rambling"];
    let currentWordIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let speed = 100; // Speed of typing/deleting in milliseconds

    function type() {
        const fullText = words[currentWordIndex];
        
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }

        textElement.innerHTML = currentText;

        if (!isDeleting && currentText === fullText) {
            setTimeout(() => isDeleting = true, 1000); // Wait 1 second before starting to delete
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(type, 500); // Wait before starting to type the next word
        }

        setTimeout(type, speed);
    }

    type(); // Start typing effect
});
