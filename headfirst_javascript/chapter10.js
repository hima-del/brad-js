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