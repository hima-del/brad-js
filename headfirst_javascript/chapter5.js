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
    make: "GM",
    model: "Cadillac",
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

// let miles = fiat.mileage;
// if (miles < 2000) {
//     buyIt();
// }

// //change a aproperty
// fiat.mileage = 10000;

// //how to add a new property
// fiat.needsWashing = true;

// //how to compute with properties
// if (fiat.year > 1965) {
//     classic = true;
// }
// for (let i = 0; i < fiat.passengers; i++) {
//     addPersonToCar();
// }

//code magnet
let dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};
let bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}
let speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

let worthALook1 = prequal(taxi);
if (worthALook1) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}
let worthALook2 = prequal(cadi);
if (worthALook2) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}
let worthALook3 = prequal(fiat);
if (worthALook3) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}
let worthALook4 = prequal(chevy);
if (worthALook4) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}