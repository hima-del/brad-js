//how to create an object
let chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

//another object-exercise
let cadi = {
    make: "cadi",
    model: "GM Cadillac",
    year: 1955,
    color: "tan",
    convertible: false,
    mileage: 12892,
    passengers: 5
}

//how object properties work
let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

let miles = fiat.mileage;
if (miles < 2000) {
    buyIt();
}

//change a aproperty
fiat.mileage = 10000;

//how to add a new property
fiat.needsWashing = true;

//how to compute with properties
if (fiat.year > 1965) {
    classic = true;
}
for (let i = 0; i < fiat.passengers; i++) {
    addPersonToCar();
}