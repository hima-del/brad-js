//creating objects using constructors

function Dog(name, weight, breed) {
    this.name = name;
    this.weight = weight;
    this.breed = breed;
}

//how to use constructor

//let fido = new Dog("fido", 38, "mixed");
//console.log(fido);

//object using literal

let duck = {
    type: "redheaded",
    canFly: true
}

//created using object constructor

function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}

//exercise

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            console.log(this.name + " says Woof!");
        } else {
            console.log(this.name + " says Yip!");
        }
    };
}
let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
let dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
    dogs[i].bark();
}

for (let i = 0; i < dogs.length; i++) {
    let size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
}

//exercise

function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function() {
        if (ounces === 8) {
            return "small";
        } else if (ounces === 12) {
            return "medium";
        } else {
            return "large";
        }
    };
    this.toString = function() {
        return "you have ordered a " + this.getSize() + this.roast + "coffee";
    }
}

let houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
let darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());

//exercise 

function Car(make, model, year, color, passengers, convertible, mileage, started) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = started;
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            console.log(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.");
        }
    }
}

let chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
let cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
let taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
let fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
let testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

let cars = [chevy, cadi, taxi, fiat, testCar];

for (let i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}

//reworking the car constructor

let cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

let cadi2 = new Car2(cadiParams);

function Car2(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            console.log("Zoom zoom!");
        } else {
            console.log("You need to start the engine first.");
        }
    };
}

cadi2.start();
cadi2.drive();
cadi2.drive();
cadi2.stop();

if (cadi2 instanceof Car2) {
    console.log("Congrats, it is a Car!");
}