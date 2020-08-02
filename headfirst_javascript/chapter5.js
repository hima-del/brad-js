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
};

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
// let dog = {
//     name: "Fido",
//     weight: 20.2,
//     age: 4,
//     breed: "mixed",
//     activity: "fetch balls"
// };
// let bark;
// if (dog.weight > 20) {
//     bark = "WOOF WOOF";
// } else {
//     bark = "woof woof";
// }
// let speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
// console.log(speak);

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

let fido = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};

function looseWeight(dog, amount) {
    dog.weight = dog.weight - amount;
}
looseWeight(fido, 10);
console.log(fido.name + " now weighs " + fido.weight);

//sharpen your pencil exercise
function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    } else {
        return "Invalid password! No secret for you."
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

let superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit"
};
let secret1 = getSecret(superSecretFile, 2);
console.log(secret1);
let secret2 = getSecret(superSecretFile, 6);
console.log(secret2);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in England");
secret3 = getSecret(superSecretFile, 2);
console.log(secret3);

function makeCar() {
    let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    let years = [1955, 1957, 1948, 1954, 1961];
    let colors = ["red", "blue", "tan", "yellow", "white"];
    let convertible = [true, false];

    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * 5) + 1;
    let rand6 = Math.floor(Math.random() * 2);

    let car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    };
    return car;
}

function displayCar(car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}
let carToSell = makeCar();
displayCar(carToSell);

//adding behavior to objects 
// let fiat2 = {
//     make: "Fiat",
//     model: "500",
//     year: 1957,
//     color: "Medium Blue",
//     passengers: 2,
//     convertible: false,
//     mileage: 88000,
//     drive: function() {
//         console.log("zoom zoom");
//     }
// };
// fiat2.drive();

//improving the drive method
let fiat3 = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            console.log("zoom zoom");
        } else {
            console.log("you need to start the engine first");
        }
    }
};

fiat3.drive();
fiat3.start();
fiat3.drive();
fiat3.stop();

//be the browser exercise
var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function() {
        if (!this.playing) {
            this.playing = true;
            console.log("playing " + this.name + "by" + this.artist);
        }
    },
    pause: function() {
        if (this.playing) {
            this.playing = false;
            console.log("paused");
        }
    }
};
song.play();
song.pause();


let chevy2 = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            console.log(this.make + this.model + " goes zoom zoom ")
        } else {
            console.log("you need to start the engine first");
        }
    }
};
chevy2.start();
chevy2.drive();
chevy2.stop();

let cadi2 = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    convertible: false,
    mileage: 12892,
    passengers: 5,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            console.log(this.make + this.model + " goes zoom zoom ")
        } else {
            console.log("you need to start the engine first");
        }
    }
};

cadi2.start();
cadi2.drive();
cadi2.stop();

let taxi2 = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            console.log(this.make + this.model + " goes zoom zoom ")
        } else {
            console.log("you need to start the engine first");
        }
    }
};

taxi2.start();
taxi2.drive();
taxi2.stop();