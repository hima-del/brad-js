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
    { name: "John Funcall", paid: true, ticket: "coach" },
    { name: "Anna", paid: true, ticket: "premium" },
    { name: "Jennipher", paid: true, ticket: "premium" }
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
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            console.log("would you like wine, cola or water");
        };
    } else {
        orderFunction = function() {
            console.log("your choice is cola or water");
        };
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    let orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            console.log("would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            console.log("would youl like a snack box or cheese plate ");
        };
    } else {
        orderFunction = function() {
            console.log("would you like peanuts or pretzels");
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    //get dinner order
    getDinnerOrderFunction();
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

let products = [{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function compareSold(colA, colB) {
    if (colA.sold > colB.sold) {
        return 1;
    } else if (colA.sold === colB.sold) {
        return 0;
    } else {
        return -1;
    }
}

function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name + ", Calories: " + products[i].calories + ", Color: " + products[i].color + " ,Sold: " + products[i].sold);
    }
}
products.sort(compareSold);
printProducts(products);

function compareName(colA, colB) {
    if (colA.name > colB.name) {
        return 1;
    } else if (colA.name === colB.name) {
        return 0;
    } else {
        return -1;
    }
}

function compareCalories(colA, colB) {
    if (colA.calories > colB.calories) {
        return 1;
    } else if (colA.calories === colB.calories) {
        return 0;
    } else {
        return -1;
    }
}

function compareColor(colA, colB) {
    if (colA.color > colB.color) {
        return 1;
    } else if (colA.color === colB.color) {
        return 0;
    } else {
        return -1;
    }
}

products.sort(compareName);
console.log("products sorted by name: ");
printProducts(products);

products.sort(compareCalories);
console.log("products sorted by calories: ");
printProducts(products);

products.sort(compareColor);
console.log("products sorted by color: ");
printProducts(products);
//sort an array

// let numbersArray = [60, 50, 62, 58, 54, 54];

// function compareNumbers(num1, num2) {
//     if (num1 > num2) {
//         return 1;
//     } else if (num1 === num2) {
//         return 0;
//     } else {
//         return -1;
//     }
// }
// numbersArray.sort(compareNumbers);
// console.log(numbersArray);