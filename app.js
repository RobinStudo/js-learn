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

    book[key] = castValue(newValue, typeof book[key]);
}

console.log(book);

function castValue(value, type) {
    switch (type) {
        case "boolean":
            return castBool(value);
        case 'number':
            return castNumber(value);
        case "array":
            return castArray(value);
        default:
            return value;
    }
}

function castBool(value) {
    return value === 'true';
}

function castNumber(value) {
    return parseInt(value);
}

function castArray(value) {
    return value.split(',');
}
