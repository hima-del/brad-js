// window.onload = function() {
//     console.log("Yeah, that page loaded!");
// };

// function cookieAlarm() {
//     console.log("Time to take the cookies out of the oven");
// };
// setTimeout(cookieAlarm, 6000);

//using anonymous functions

// setTimeout(function() { console.log("Time to take the cookies out of the oven"); }, 6000);

// let migrating = true;
// if (migrating) {
//     quack(4);
//     fly(4);
// }
// let fly = function(num) {
//     for (i = 0; i < num; i++) {
//         console.log("Flying!");
//     }
// };

// function quack(num) {
//     for (i = 0; i < num; i++) {
//         console.log("Quack!");
//     }
// }

//how to nest functions

let migrating = true;
let fly = function(num) {
    let sound = "flying";

    function wingFlapper() {
        console.log(sound);
    }
    for (let i = 0; i < num; i++) {
        wingFlapper();
    }
};

function quack(num) {
    let sound = "Quack";
    let quacker = function() {
        console.log(sound);
    };
    for (let i = 0; i < num; i++) {
        quacker();
    }
}

if (migrating) {
    quack(4);
    fly(4);
}

//lexical scope

// let justAVar = "oh, don't you worry about it, I'm GLOBAL";

// function whereAreYou() {
//     let justAVar = "just an everyday LOCAL";
//     return justAVar;
// }

// let result = whereAreYou();
// console.log(result);

//nested function

// let justAVar = "oh, don't you worry about it, I'm GLOBAL";

// function whereAreYou() {
//     let justAVar = "just an everyday LOCAL";

//     function inner() {
//         return justAVar;
//     }
//     return inner();
// }

// let result = whereAreYou();
// console.log(result);

let justAVar = "oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
    let justAVar = "just an everyday LOCAL";

    function inner() {
        return justAVar;
    }
    return inner;
}

let innerFunction = whereAreYou();
let result = innerFunction();
console.log(result);