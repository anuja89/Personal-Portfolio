const texts = [
    "🎓 MCA Student",
    "💻 Web Developer",
    "🚀 Software Learner"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingAnimation() {
    const element = document.getElementById("typing-text");
    const currentText = texts[textIndex];

    if (!isDeleting) {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    } else {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1200);
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typingAnimation, isDeleting ? 70 : 120);
}

typingAnimation();