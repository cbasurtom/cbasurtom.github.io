function typeWriter(elementId, words, speed) {
    let i = 0;
    let j = 0;
    let currentWord = '';
    let isDeleting = false;
    const element = document.getElementById(elementId);

    function type() {
        if (i < words.length) {
            if (j < words[i].length) {
                currentWord += words[i][j];
                element.textContent = currentWord;
                j++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 1000); // Wait before starting to delete
            }
        } else if (isDeleting) {
            if (currentWord.length > 0) {
                currentWord = currentWord.slice(0, -1);
                element.textContent = currentWord;
                setTimeout(type, speed / 2); // Speed up deletion
            } else {
                isDeleting = false;
                i = (i + 1) % words.length; // Move to the next word
                setTimeout(type, 500); // Wait before starting to type the next word
            }
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter('typewriter', ['compsci', 'philo', 'rambling'], 100);
});
