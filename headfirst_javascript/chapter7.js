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