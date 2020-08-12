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