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

// let passengers = [{ name: "Jane Doloop", paid: true },
//     { name: "Dr.Evel", paid: true },
//     { name: "Sue Property", paid: false },
//     { name: "John Funcall", paid: true }
// ];

// function checkNoFlyList(passenger) {
//     return (passenger.name === "Dr.Evel");
// }

// function checkNotPaid(passenger) {
//     return (!passenger.paid)
// }

// function printPassenger(passenger) {
//     let message = passenger.name;
//     if (passenger.paid === true) {
//         console.log(message + " has paid");
//     } else if (passenger.paid === false) {
//         console.log(message + " not paid");
//     }
// }


// function processPassengers(passengers, testFunction) {
//     for (let i = 0; i < passengers.length; i++) {
//         if (testFunction(passengers[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// let allCanFly = processPassengers(passengers, checkNoFlyList);
// if (!allCanFly) {
//     console.log("The plane can't take off: we have a passenger on the no fly list ");
// }

// let allPaid = processPassengers(passengers, checkNotPaid);
// if (!allPaid) {
//     console.log("the plane can't take off: not everyone has paid");
// }

// processPassengers(passengers, printPassenger);
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

// function fun(echo) {
//     console.log(echo);
// };

// fun("hello");

// function boo(aFunction) {
//     aFunction("boo");
// }
// boo(fun);
// console.log(fun);
// fun(boo);
// let moreFun = fun;
// moreFun("hello again");

// function echoMaker() {
//     return fun;
// }
// let bigFun = echoMaker();
// bigFun("Is there an echo?");

//returning function from function

let passengers = [{ name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "coach" }
];

// function createDrinkOrder(passenger){
//     if(passenger.ticket==="firstclass"){
//         console.log("would you like a acocktail or wine");
//     }else{
//         console.log("your choice is cola or water");
//     }
// }

// function servicceCustomer(passenger){
//     createDrinkOrder(passenger)
// }

//sharpen your pencil exercise page 453 [doubt]

// function addN(n) {
//     let adder = function(x) {
//         return n + x;
//     };
//     return adder;
// }

// let add2 = addN(2);
// console.log(add2);
// console.log(add2(5));


//using first class functions

function createDrinkOrder(passenger) {
    let orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            console.log("would you like a cocktail or wine");
        };
    } else {
        orderFunction = function() {
            console.log("your choice is cola or water");
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
    //get dinner order
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    //show movie
    getDrinkOrderFunction();
    //pick up trash
}

function servePassenger(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassenger(passengers);