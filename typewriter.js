document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('dynamic-text');
    const words = ["compsci", "philo", "rambling"];
    let currentWordIndex = 0;
    let currentText = '';
    let isDeleting = false;
    const typingSpeed = 100; // Speed of typing in milliseconds
    const deletingSpeed = 50; // Speed of deleting in milliseconds
    const pauseBeforeDeleting = 1000; // Pause before starting to delete
    const pauseAfterDeleting = 500; // Pause after deleting before typing the next word

    function type() {
        const fullText = words[currentWordIndex];
        
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
            textElement.innerHTML = currentText;

            if (currentText === '') {
                isDeleting = false;
                currentWordIndex = (currentWordIndex + 1) % words.length;
                setTimeout(type, pauseAfterDeleting); // Wait before starting to type the next word
            }
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
            textElement.innerHTML = currentText;

            if (currentText === fullText) {
                setTimeout(() => isDeleting = true, pauseBeforeDeleting); // Wait before starting to delete
            }
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }

    type(); // Start typing effect
});
