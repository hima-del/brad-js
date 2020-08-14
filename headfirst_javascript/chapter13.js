function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(this.name + " says woof!");
    } else {
        console.log(this.name + " says yip!");
    }
};

Dog.prototype.run = function() {
    console.log("run!");
};
Dog.prototype.wag = function() {
    console.log("wag");
};

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

// fido.bark();
// fido.run();
// fido.wag();
// fluffy.bark();
// fluffy.run();
// fluffy.wag();
// spot.bark();
// spot.run();
// spot.wag();

//let spot = new Dog("Spot", "Chihuahua", 10);
spot.bark = function() {
    console.log(this.name + " says WOOF");
};

//let aDog=new Dog();

//creating showDog constructor

function showDog(name, breed, weight, handler) {
    // this.name = name;
    // this.breed = breed;
    // this.weight = weight;
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}
showDog.prototype = new Dog();
showDog.prototype.constructor = showDog;
showDog.prototype.league = "webville";
showDog.prototype.stack = function() {
    console.log("stack");
};
showDog.prototype.bait = function() {
    console.log("bait");
};
showDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};
showDog.prototype.groom = function() {
    console.log("groom");
};

let scotty = new showDog("Scotty", "Scottish Terrier", 15, "Cookie");
scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);
let beatrice = new showDog("Beatrice", "Pomeranian", 5, "Hamilton");
fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();

//let fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof showDog) {
    console.log("Fido is a ShowDog");
}
//let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof showDog) {
    console.log("Scotty is a ShowDog");
}
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);

// spot.bark();
// spot.run();
// spot.wag();

//robot exercise

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function() {
    console.log("warning warning");
};
Robot.prototype.makeCoffee = function() {
    console.log("making coffee");
};
Robot.prototype.blinkLights = function() {
    console.log("blink blink!");
};
let toy1 = new Robot("Toy", 2013, "Avary");
console.log(toy1.toString());

Robot.prototype.toString = function() {
    return this.name + " robot belonging to " + this.owner;
};
let toy2 = new Robot("Toy", 2013, "Avary");
console.log(toy2.toString());

function spaceRobot(name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}

spaceRobot.prototype = new Robot();
spaceRobot.prototype.speak = function() {
    console.log(this.name + " says  Sir, If I may venture an opinion...")
};
spaceRobot.prototype.piolet = function() {
    console.log(this.name + "  says Thrusters? Are they important?");
};
let c3po = new spaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
let simon = new spaceRobot("Simon", 2009, "Carla Diana", "Earth");
c3po.speak();
c3po.piolet();
console.log(c3po.name + " was made by " + c3po.maker);
simon.makeCoffee();
simon.blinkLights();
simon.speak();


let robby = new Robot("Robby", 1956, "Dr. Morbius");
let rosie = new Robot("Rosie", 1962, "George Jetson");
robby.onOffSwitch = true;
robby.makeCoffee = function() {
    console.log("fetching a coffee from starbucks");
};
rosie.cleanHouse = function() {
    console.log("cleaning...");
}

// console.log(robby.name + " was made by" + robby.maker + " in" + robby.year + " and is owned by " + robby.owner);
// robby.makeCoffee();
// robby.blinkLights();
// console.log(rosie.name + " was made by" + rosie.maker + " in" + rosie.year + " and is owned by " + rosie.owner);
// rosie.cleanHouse();

// let barnaby = new Dog("Barnaby", "Basset Hound", 55);

// // Dog.prototype.sit = function() {
// //     console.log(this.name + " is now sitting");
// // }
// // barnaby.sit();
// Dog.prototype.sitting = false;
// Dog.prototype.sit = function() {
//     if (this.sitting) {
//         console.log(this.name + " is already sitting");
//     } else {
//         this.sitting = true;
//         console.log(this.name + " is now sitting");
//     }
// };

// barnaby.sit();
// barnaby.sit();

// if (spot.hasOwnProperty("species")) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// //laser robot exercise

// function Game() {
//     this.level = 0;
// }

// Game.prototype.play = function() {
//     this.level++;
//     console.log("welcome to level " + this.level);
//     this.unlock();
// }

// Game.prototype.unlock = function() {
//     if (this.level === 42) {
//         Robot2.prototype.deployLaser = function() {
//             console.log(this.name + " is blasting you with laser");
//         }
//     }
// }

// function Robot2(name, year, owner) {
//     this.name = name;
//     this.year = year;
//     this.owner = owner;
// }

// let game = new Game();
// let robby2 = new Robot2("Robby", 1956, "Dr. Morbius");
// let rosie2 = new Robot2("Rosie", 1962, "George Jetson");

// while (game.level < 42) {
//     game.play();
// }

// robby2.deployLaser();
// rosie2.deployLaser();

// function Robot(name, year, owner) {
//     this.name = name;
//     this.year = year;
//     this.owner = owner;
// }
// Robot.prototype.maker = "ObjectsRUs";
// Robot.prototype.errorMessage = "All systems go.";
// Robot.prototype.reportError = function() {
//     console.log(this.name + " says " + this.errorMessage);
// };
// Robot.prototype.spillWater = function() {
//     this.errorMessage = "I appear to have a short circuit!";
// };
// let robby = new Robot("Robby", 1956, "Dr. Morbius");
// let rosie = new Robot("Rosie", 1962, "George Jetson");
// rosie.reportError();
// robby.reportError();
// robby.spillWater();
// rosie.reportError();
// robby.reportError();
// console.log(robby.hasOwnProperty("errorMessage"));
// console.log(rosie.hasOwnProperty("errorMessage"));