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
//function to calculate area
function calculateArea(radius) {
    let area;
    if (radius <= 0) {
        return 0;
    } else {
        area = Math.PI * radius * radius;
        return area;
    }
}
let radius = 5.2;
let theArea = calculateArea(radius)
console.log("The area is: " + theArea);
//global na dlocal variables
let avatar = "generic";
let skill = 1.0;
let pointsPerLevel = 1000;
let userPoints = 2008;

function getAvatar(points) {
    let level = points / pointsPerLevel;
    if (level == 0) {
        return "Teddy bear";
    } else if (level == 1) {
        return "cat"
    } else if (level >= 2) {
        return "gorilla"
    }
}

function updatePoints(bounus, newPoints) {
    let i = 0;
    while (i < bounus) {
        newPoints = newPoints + skill * bounus;
        i = i + 1;
    }
    return newPoints + userPoints;
}
userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);

//don't forget to declare local variable
function playTurn(player, location) {
    points = 0;
    if (location == 1) {
        points = points + 100;
    }
    return points;
}
let total = playTurn("jai", 1);
console.log(points);

//same name to global and local variable
let scope = "global"

function checkScope() {
    let scope = "local";
    console.log(scope);
}
checkScope();
//5 minutes mystery
let balance = 10500; //balance is a global variable
let cameraOn = true;

function steel(balance, amount) { //balance is shadowed by balance parameter
    cameraOn = false;
    if (amount < balance) {
        balance = balance - amount; //when changing the balance in the function steal,you are not changing the actual bank balance.
    }
    return amount; //returning the amount stolen
    cameraOn = true;
}
let amount = steel(balance, 1250);
console.log("criminal: you stole " + amount + "!");

function clunk(times) {
    let num = times;
    while (num > 0) {
        display("clunk");
        num = num - 1;
    }
}

function thingamajig(size) {
    let facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("clank")
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}

function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
}
let clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);

//clarification for while loop
let scoops = 5;
while (scoops > 0) {
    console.log("Another scoop!<br>");
    scoops = scoops - 1;
}
console.log("Life without ice cream isn't the same");