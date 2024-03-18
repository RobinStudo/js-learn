const a = parseInt(prompt("Premier nombre"));
const b = parseInt(prompt("Deuxième nombre"));
const operator = prompt("Quelle opération");

if (isNaN(a) || isNaN(b)) {
    alert("Mauvaise saisie");
} else {
    let result;
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "/":
            result = a / b;
            break;
        case "*":
            result = a * b;
            break;
        default:
            alert("Erreur");
    }

    console.log(result);
}

