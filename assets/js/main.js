// Counter Animation Function
function animateCounter(id, start, end, duration, prefix = '') {
    const element = document.getElementById(id);
    let startTime = null;

    function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.innerText = prefix + value;
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// Initialize the counters
document.addEventListener('DOMContentLoaded', () => {
    animateCounter('years', 0, 10, 2000);     // Example: 10 years in the industry
    animateCounter('projects', 0, 150, 2000, '+'); // Example: 150 concluded projects
    animateCounter('clients', 0, 85, 2000, '+');   // Example: 85 clients

    // Write current year in copyright text
    document.querySelector(".copyright-year").textContent = new Date().getFullYear();
});

// Outline Toggle Function
const outlines = document.querySelectorAll(".out");

function toggleClass(outline) {
    outline.classList.toggle("outline");
}

outlines.forEach((outline) => {
    setInterval(() => toggleClass(outline), getRandomInterval(1000, 5000));
});

function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Typing Text Animation
const text = document.querySelector('.typing-text');
const words = ["Clientes"];

setTyper(text, words);

function setTyper(element, words) {
    const LETTER_TYPE_DELAY = 75;
    const WORD_STAY_DELAY = 10000;
    const DIRECTION_FORWARDS = 0;
    const DIRECTION_BACKWARDS = 1;
    
    let direction = DIRECTION_FORWARDS;
    let wordIndex = 0;
    let letterIndex = 0;
    let wordTypeInterval;

    startTyping();

    function startTyping() {
        wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    }

    function typeLetter() {
        const word = words[wordIndex];

        if (direction === DIRECTION_FORWARDS) {
            letterIndex++;
            if (letterIndex === word.length) {
                direction = DIRECTION_BACKWARDS;
                clearInterval(wordTypeInterval);
                setTimeout(startTyping, WORD_STAY_DELAY);
            }
        } else if (direction === DIRECTION_BACKWARDS) {
            letterIndex--;
            if (letterIndex === 0) {
                nextWord();
            }
        }

        element.textContent = word.substring(0, letterIndex);
    }

    function nextWord() {
        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }
}

// YouTube Video Embedding
(function () {
    let YouTubeContainers = document.querySelectorAll(".youtube-video");

    YouTubeContainers.forEach(container => {
        let imageSource = "https://img.youtube.com/vi/" + container.dataset.videoId + "/maxresdefault.jpg";

        // Load Thumbnail Image
        let image = new Image();
        image.src = imageSource;
        image.addEventListener("load", function () {
            container.appendChild(image);
        });

        // Load YouTube Video on click
        container.addEventListener("click", function () {
            let iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.videoId + "?autoplay=1&rel=0&showinfo=0");

            // Clear Thumbnail and load iframe
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    });
})();
