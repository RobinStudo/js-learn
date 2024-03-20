import { Box } from "./box.js";

export class Manager {
    constructor(originalBox) {
        this.originalBox = new Box(originalBox);
        this.boxes = [this.originalBox];
        this.setup();
    }

    setup () {
        setInterval(() => {
            this.animateBoxes();
        }, 1000);

        document.addEventListener('click', e => {
            const x = e.clientX - this.originalBox.element.offsetWidth / 2;
            const y = e.clientY - this.originalBox.element.offsetHeight / 2;
            this.addBox(x, y);
        });

        document.addEventListener("removeBox", e => this.removeBox(e.detail));
    }

    animateBoxes() {
        for (const b of this.boxes) {
            b.animate();
        }
    }

    addBox(x, y) {
        const el = document.createElement('div');
        el.classList.add('container');
        el.style.top = y + 'px';
        el.style.left = x + 'px';
        document.body.appendChild(el);

        const box = new Box(el);
        this.boxes.push(box);
    }

    removeBox(box) {
        this.boxes = this.boxes.filter(b => {
           return b !== box;
        });
    }
}
