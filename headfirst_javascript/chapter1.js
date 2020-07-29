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