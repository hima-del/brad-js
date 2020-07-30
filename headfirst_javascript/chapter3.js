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

//code magnet-Chapter 2
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