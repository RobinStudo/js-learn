const rates = [];
let lastValue;

do {
    lastValue = prompt("Note");
    if (isNaN(parseInt(lastValue))) {
        continue;
    }

    rates.push(parseInt(lastValue));
} while (lastValue !== '');

let sum = 0;
for (const rate of rates) {
    console.log(rate);
    sum += rate;
}

console.log(sum / rates.length);


"Afficher l'ensemble des notes saisies et la moyenne de ces notes"

