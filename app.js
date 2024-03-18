const box = document.getElementById("box");

setInterval(() => {
    randomizeBackground(box);
    randomizePosition(box);
}, 1000);

function randomizeBackground(element) {
    // const colors = ['red', 'blue', 'green'];
    // const randomKey = Math.random() * (colors.length - 1);
    // element.style.backgroundColor = colors[randomKey];

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
