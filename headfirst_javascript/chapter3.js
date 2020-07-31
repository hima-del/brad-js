function bark(name, weight) {
    if (weight > 20) {
        console.log(name + "says WOOF WOOF");
    } else {
        console.log(name + "says woof woof");
    }
}
bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);
bark("juno", 20); //"junosays woof woof"
bark("scottie", -1); //"scottiesays woof woof"
bark("dino", 0, 0); // "dinosays woof woof"
bark("fido", "20"); //"fidosays woof woof"
bark("lady", 10); //"ladysays woof woof"
bark("bruno", 21); //"brunosays WOOF WOOF"

//code magnet-Chapter 3
function whatShallWear(temp) {
    if (temp < 60) {
        console.log('Wear a jacket');
    } else if (temp < 70) {
        console.log('Wear a sweater');
    } else {
        console.log('Wear t-shirt');
    }
}
whatShallWear(50);
whatShallWear(80);
whatShallWear(60);
// "Wear a jacket"
// "Wear t-shirt"
// "Wear a sweater"
function doIt(param) {
    param = 2;
}
var test = 1;
doIt(test);
console.log(test);
//when we don't pass enough arguments and too many arguments
function makeTea(cups, tea) {
    console.log("Brewing " + cups + "cups of " + tea);
}
makeTea(3);
makeTea(3, "earl grey", "hey ma!", 42);
//when no arguments are passed
function barkAtTheMoon() {
    console.log("Wooooooooo!");
}
barkAtTheMoon();
//function with return
function bake(degrees) {
    let message;
    if (degrees > 500) {
        message = "I am not a nuclear reactor"
    } else if (degrees < 100) {
        message = "I am not a refrigerator"
    } else {
        message = "that's a very comfortable temperature for me"
    }
    return message;
}
console.log(bake(350));