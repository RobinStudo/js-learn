const book = {
    title: 'Mon titre',
    releaseYear: 2002,
    isFrench: true,
};

for (const key in book) {
    let newValue = prompt("Votre valeur pour " + key);

    if (newValue === '') {
        continue;
    }

    switch (typeof book[key]) {
        case "boolean":
            newValue = newValue === 'true';
            break;
        case 'number':
            newValue = parseInt(newValue);
            break;
    }

    book[key] = newValue;
}

console.log(book);
