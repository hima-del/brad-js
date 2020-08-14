let subject = "Just a string";
let probe = typeof subject;
console.log(probe);

let test1 = "abcdef";
let test2 = 123;
let test3 = true;
let test4 = {};
let test5 = [];
let test6;
let test7 = { "abcdef": 123 };
let test8 = ["abcdef", 123];

function test9() { return "abcdef" };
let test10 = null;
let test11 = 0 / 0;
let test12 = "food" * 1000;
let test13 = Math.sqrt(-9);

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
console.log(test11);
console.log(test12);
console.log(test13);
console.log(typeof test11);
console.log(typeof test12);
console.log(typeof test13);

if (test13 == test12) {
    console.log("yes");
} else {
    console.log("no");
}

if (isNaN(test12)) {
    console.log("yes");
} else {
    console.log("no");
}

if (isNaN(test1)) {
    console.log("yes");
} else {
    console.log("no");
}

if (99 == "99") {
    console.log("A number equals a string!");
} else {
    console.log("No way a number equals a string");
}


let chevy = {
    make: "Chevy",
    model: "Bel Air"
};
let taxi = {
    make: "Webville Motors",
    model: "Taxi"
};
let fiat1 = {
    make: "Fiat",
    model: "500"
};
let fiat2 = {
    make: "Fiat",
    model: "500"
};
let lot = [chevy, taxi, fiat1, fiat2];

function findCarInLot(car) {
    for (let i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }
    }
    return -1;
}

let loc1 = findCarInLot(fiat2);
let loc2 = findCarInLot(taxi);
let loc3 = findCarInLot(chevy);
let loc4 = findCarInLot(fiat1);

console.log(loc1);
console.log(loc2);
console.log(loc3);
console.log(loc4);


function lieDetectorTest() {
    let lies = 0;
    let stolenDiamond = {};
    if (stolenDiamond) {
        console.log("You stole the diamond");
        lies++;
    }
    let car = {
        keysInPocket: null
    };
    if (car.keysInPocket) {
        console.log("Uh oh, guess you stole the car!");
        lies++;
    }
    if (car.emptyGasTank) {
        console.log("You drove the car after you stole it!");
        lies++;
    }
    let foundYouAtTheCrimeScene = [];
    if (foundYouAtTheCrimeScene) {
        console.log("A sure sign of guilt");
        lies++;
    }
    if (foundYouAtTheCrimeScene[0]) {
        console.log("Caught with a stolen item!");
        lies++;
    }
    let yourName = " ";
    if (yourName) {
        console.log("Guess you lied about your name");
        lies++;
    }
    return lies;
}
let numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
    console.log("Guilty as charged");
}


let text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
let presentableText = text.toLowerCase();
if (presentableText.length > 0) {
    console.log(presentableText);
}

//secret life of strings

let emot = "XOxxOO";
let hugs = 0;
let kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();
for (let i = 0; i < emot.length; i++) {
    if (emot.charAt(i) === "X") {
        hugs++;
    } else if (emot.charAt(i) == "O") {
        kisses++;
    }
}
console.log(hugs); //3
console.log(kisses); //3

let name = "Jenny";
let phone = "867-5309";
let fact = "This is a prime number";
let songName = phone + "/" + name;
let index = phone.indexOf("-");
if (fact.substring(10, 15) === "prime") {
    console.log(fact); //This is a prime number
}

let input = "jenny@wickedlysmart.com";
for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "@") {
        console.log("There's an @ sign at index " + i); //There's an @ sign at index 5
    }
}

let phrase = "the cat in the hat";
let index1 = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index1); //there's a cat sitting at index 4

index2 = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index2); //there's a dog sitting at index -1

index3 = phrase.indexOf("the", 5);
console.log("there's a the sitting at index " + index3); //there's a the sitting at index 11

let data1 = "name|phone|address";
let val = data1.substring(5, 11);
console.log("Substring is " + val);

let data2 = "name|phone|address";
let vals1 = data2.split("|");
console.log("Split array is ", vals1);

let data3 = "name phone address";
let vals2 = data3.split(" ");
console.log("Split array is ", vals2);

function Duck(sound) {
    this.sound = sound;
    this.quack = function() { console.log(this.sound); }
}
let toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);

function validate(phoneNumber) {
    if (phoneNumber.length !== 10) {
        return false
    }
    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 4) {
            if (phoneNumber.charAt(i) !== '-') {
                return false
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }

    }
    return true;
}

let num = "123 - 4567";
console.log(validate(num));

function validate2(phoneNumber) {
    if (phoneNumber.length !== 10) {
        return false;
    }
    let first = phoneNumber.substring(0, 4);
    let second = phoneNumber.substring(5);
    if (phoneNumber.charAt(4) !== "-" || isNaN(first) || isNaN(second)) {
        return false
    }
    return true;
}
console.log(validate2(num));
console.log(typeof num);
console.log(num.length);