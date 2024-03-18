const rates = [];
let lastValue;

do {
    lastValue = prompt("Note");
    if (isNaN(parseInt(lastValue))) {
        continue;
    }

    rates.push(parseInt(lastValue));
} while (lastValue !== '');

// let sum = rates.reduce(function (accumulator, value) {
//     return accumulator + value;
// });

// let sum = rates.reduce((accumulator, value) => {
//     return accumulator + value;
// });

let sum = rates.reduce((accumulator, value) => accumulator + value);

// let sum = 0;
// rates.forEach(function(value) {
//    sum += value;
// });

// let sum = 0;
// rates.forEach(value => {
//    sum += value;
// });


console.log(sum / rates.length);

