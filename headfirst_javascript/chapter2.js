//battleship game
//In this chapter, we used prompt to get input from the user, and alert to display the results of the battleship game in the browser.
// let location1 = 3;
// let location2 = 4;
// let location3 = 5;
let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let guesses = 0;
let hits = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt('enter a number between 0-6');
    if (guess < 0 || guess > 6) {
        alert('please enter a valid cell number');
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('HIT!');
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert('you sank my battleship');
            }
        } else {
            alert('MISS!');
        }
    }
}
let stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3 / guesses);
alert(stats);