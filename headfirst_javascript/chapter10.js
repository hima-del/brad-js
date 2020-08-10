//function declaration

function quack(num) {
    for (let i = 0; i < num; i++) {
        console.log("quack");
    }
}

quack(3);

//function expression

let fly = function(num) {
    for (let i = 0; i < num; i++) {
        console.log("flying");
    }
};

fly(3);

//sharpen your pencil exercise

let winner = function() { console.log("WINNER!") };
let loser = function() { console.log("LOSER!") };

winner();

let a = winner;
let b = loser;
let c = loser;
a();
b();

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();

//first class functions

let passengers = [{ name: "Jane Doloop", paid: true },
    { name: "Dr.Evel", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true }
];

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr.Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid)
}

function printPassenger(passenger) {
    let message = passenger.name;
    if (passenger.paid === true) {
        console.log(message + " has paid");
    } else if (passenger.paid === false) {
        console.log(message + " not paid");
    }
}


function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no fly list ");
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("the plane can't take off: not everyone has paid");
}

processPassengers(passengers, printPassenger);
//sharpen your pencil exercise

// function sayIt(translator) {
//     let phrase = translator("Hello");
//     console.log(phrase);
// }

// function hawaiianTranslator(word) {
//     if (word === "Hello") return "Aloha";
//     if (word === "Goodbye") return "Aloha";
// }
// sayIt(hawaiianTranslator);

function fun(echo) {
    console.log(echo);
};

fun("hello");

function boo(aFunction) {
    aFunction("boo");
}
boo(fun);
console.log(fun);
fun(boo);
let moreFun = fun;
moreFun("hello again");

function echoMaker() {
    return fun;
}
let bigFun = echoMaker();
bigFun("Is there an echo?");