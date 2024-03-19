import { ColorUtils } from "./color-utils.js";

export class Box {
    constructor(element) {
        this.element = element;
        this.setupEvent();
    }

    setupEvent() {
        this.element.addEventListener("mouseenter", () => {
            this.element.classList.add('paused');
        });

        this.element.addEventListener("mouseleave", () => {
            this.element.classList.remove('paused');
        });
    }

    animate() {
        if (this.element.classList.contains('paused')) {
            return;
        }

        this.randomizeBackground();
        this.randomizePosition();
    }

    randomizeBackground() {
        const r = ColorUtils.generateColorComponent(), g = ColorUtils.generateColorComponent(), b = ColorUtils.generateColorComponent();
        this.element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    randomizePosition() {
        const top = Math.random() * (window.innerHeight - this.element.offsetHeight);
        const left = Math.random() * (window.innerWidth - this.element.offsetWidth);
        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }
}
