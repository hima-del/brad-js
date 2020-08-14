function computeSum(a) {
    return a + "108";
}
//console.log(computeSum(1000));//output 1000108
//while loop
let scoops = 5;
while (scoops > 0) {
    console.log('another scoop!<br>');
    scoops = scoops - 1;
}
console.log('life without ice cream is not the same'); //> "another scoop!<br>"
// "another scoop!<br>"
// "another scoop!<br>"
// "another scoop!<br>"
// "another scoop!<br>"
// "life without ice cream is not the same"
let i = 0;
while (i < 2) {
    console.log("happy birthday to you");
    i = i + 1;
}
let name = "joe";
console.log("happy birthday dear " + name);
console.log("happy birthday to you");
// "happy birthday to you"
// "happy birthday to you"
// "happy birthday dear joe"
// "happy birthday to you"
let word = "bottles";
let count = 99;
while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + word + " of beer on the wall.");
    } else {
        console.log("No more " + word + " of beer on the wall.");
    }
}

//addition

2 + 3 // returns 5
true + 2 // interprets true as 1 and returns 3
false + 5 // interprets false as 0 and returns 5
true + "bar" // concatenates the boolean value and returns "truebar"
5 + "foo" // concatenates the string and the number and returns "5foo"
"foo" + "bar" // concatenates the strings and returns "foobar"

//subtraction

2 - 3 // returns -1
3 - 2 // returns 1
false - 5 // interprets false as 0 and returns -5
true + 3 // interprets true as 1 and returns 4
5 + "foo" // returns NaN (Not a Number)

//multiplication

2 * 3 // returns 6
3 * -2 // returns -6
false * 5 // interprets false as 0 and returns 0
true * 3 // interprets true as 1 and returns 3
5 * "foo" // returns NaN (Not a Number)
Infinity * 0 // returns NaN
Infinity * Infinity // returns Infinity

//division

3 / 2 // returns 1.5
3.0 / 2 / 0 // returns 1.5
3 / 0 // returns Infinity
3.0 / 0.0 // returns Infinity
3 / 0 // returns -Infinity
false / 5 // interprets false as 0 and returns 0
true / 2 // interprets true a 1 and returns 0.5
5 + "foo" // returns NaN (Not a Number)
Infinity / Infinity // returns NaN

//reminder

3 % 2 // returns 1
true % 5 // interprets true as 1 and returns 1
false % 4 // interprets false as 0 and returns 0
3 % "bar" // returns NaN

//decrement

// Postfix 
x = 3; // declare a variable 
y = x--; // y = 3, x = 3 

// Prefix 
let a = 2;
b = --a; // a = 1, b = 1

//increment

// Postfix 
x = 3; // declare a variable 
y = x++; // y = 4, x = 3 

// Prefix 
let a = 2;
b = ++a; // a = 3, b = 3
let a = 'word';
let b = false;
let c = true;
let d = 0
let e = 1
let f = 2
let g = null

console.log(a || b); // 'word'
console.log(c || a); // true
console.log(b || a); // 'word'
console.log(e || f); // 1
console.log(f || e); // 2
console.log(d || g); // null
console.log(g || d); // 0
console.log(a && c); // true
console.log(c && a); // 'word'