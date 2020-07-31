let scoresArray = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];
let solution2 = scoresArray[2];
console.log("solution 2 produced " + solution2 + " bubbles");

let flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];
let flavourOfTheDay = flavors[2];
console.log(flavourOfTheDay);
flavors[1] = "vanilla with choclolate";
console.log(flavors);
let arrayNum = flavors.length;
console.log(arrayNum);

let productsArray = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let last = productsArray.length - 1;
console.log(last);
let recent = productsArray[last];
console.log(recent);

function makePhrases() {
    let words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
    let rand1 = Math.floor(Math.random() * words1.length);
    let rand2 = Math.floor(Math.random() * words2.length);
    let rand3 = Math.floor(Math.random() * words3.length);
    console.log(rand1);
    console.log(rand2);
    console.log(rand3);
    let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    console.log(phrase);
}
makePhrases();

//using whileloop
let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44
];
let output;
let i = 0;
while (i < scores.length) {
    output = "bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    i = i + 1;
}

//using for loop
let scores2 = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44
];
let output2;
for (let l = 0; l < scores2.length; l++) {
    output2 = "bubble solution #" + l + " score: " + scores2[l];
    console.log(output2);
}

//code magnet using while loop
let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];
let j = 0;
while (j < products.length) {
    if (hasBubbleGum[j]) {
        console.log(products[j] + " contains bubble gum");
    }
    j = j + 1;
}

//code magnets using for loop
let products2 = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum2 = [false, false, false, true];
for (let k = 0; k < products2.length; k++) {
    if (hasBubbleGum2[k]) {
        console.log(products2[k] + " contains bubble gum");
    }
}