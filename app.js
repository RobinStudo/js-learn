const box = document.getElementById("box");
let interval = setupAnimation();

box.addEventListener("mouseenter", () => {
    clearInterval(interval);
});

box.addEventListener("mouseleave", () => {
    interval = setupAnimation();
});

function setupAnimation() {
    return setInterval(() => {
        randomizeBackground(box);
        randomizePosition(box);
    }, 1000);
}

function randomizeBackground(element) {
    const r = generateColor(), g = generateColor(), b = generateColor();
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function randomizePosition(element) {
    const top = Math.random() * (window.innerHeight - element.offsetHeight);
    const left = Math.random() * (window.innerWidth - element.offsetWidth);
    element.style.top = top + 'px';
    element.style.left = left + 'px';
}

function generateColor() {
    return Math.random() * 255;
}
