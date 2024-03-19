const box = document.getElementById("box");
const boxes = [box];
setupAnimation();
setupEvent(box);

document.addEventListener('click', e => {
    const el = document.createElement('div');
    el.classList.add('container');
    el.style.top = (e.clientY - box.offsetHeight / 2) + 'px';
    el.style.left = (e.clientX - box.offsetWidth / 2) + 'px';
    document.body.appendChild(el);
    setupEvent(el);
    boxes.push(el);
});

function setupAnimation() {
    return setInterval(() => {
        for (const b of boxes) {
            if (b.classList.contains('paused')) {
                continue;
            }

            randomizeBackground(b);
            randomizePosition(b);
        }
    }, 1000);
}

function setupEvent(el) {
    el.addEventListener("mouseenter", () => {
        el.classList.add('paused');
    });

    el.addEventListener("mouseleave", () => {
        el.classList.remove('paused');
    });
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

