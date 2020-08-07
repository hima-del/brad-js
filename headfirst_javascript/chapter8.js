let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");

view.displayMessage("Tap tap, is this thing on?");

// let ship1 = {
//     locations: ["10", "20", "30"],
//     hits: ["", "", ""]
// };

// let ship1 = { locations: ["10", "20", "30"], hits: ["", "", ""] };
// let ship2 = { locations: ["32", "33", "34"], hits: ["", "", ""] };
// let ship3 = { locations: ["63", "64", "65"], hits: ["", "", "hit"] };

// let ships = [{ locations: ["10", "20", "30"], hits: ["", "", ""] },
//     { locations: ["32", "33", "34"], hits: ["", "", ""] },
//     { locations: ["63", "64", "65"], hits: ["", "", "hit"] }
// ];

//sharpen your pencil exercise

// let ships = [{ locations: ["31", "41", "51"], hits: ["", "", ""] },
//     { locations: ["14", "24", "34"], hits: ["", "hit", ""] },
//     { locations: ["00", "01", "02"], hits: ["hit", "", ""] }
// ];

//Finish this code to access the second ship’s middle location and print its value with console.log.

// let ship2 = ships[1];
// console.log(ship2);
// let location = ship2.locations;
// console.log(location);
// console.log("location is " + location[1]);

// //Finish this code to see if the third ship has a hit in its first location

// let ship3 = ships[2];
// let hits = ship3.hits;
// console.log(hits);
// if (hits[0] == "hit") {
//     console.log("third ship has a hit in its first location");
// }

// //Finish this code to hit the first ship at the third location

// let ship1 = ships[0];
// hits1 = ship1.hits;
// console.log(hits1);
// hits1[2] = "hit";
// console.log(hits1);

//implementing the model object [hard coding the location of ships]
//model is an object

let model = {
    boardSize: 7, //(the size of the grid used for the    board)
    numShips: 3, //no.of ships in the game
    shipLength: 3, //no.of locations in each ship
    shipSunk: 0,
    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] }
    ],
    fire: function(guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            // console.log(ship.hits);
            // locations = ship.locations;
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT");
                if (this.isSunk(ship)) {
                    view.displayMessage("you sunk my battleship");
                    this.shipSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("you missed");
        return false;
    },
    isSunk: function(ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }

};

model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");