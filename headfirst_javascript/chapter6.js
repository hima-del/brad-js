let access = document.getElementById("code9");
let code = access.innerHTML;
code = code + " midnight";
console.log(code);

let planets = document.getElementById("greenplanets");
planets.innerHTML = "Red Alert: hit by phaser fire!";
planets.setAttribute("class", "redtext");

let gettingattribute1 = planets.getAttribute("class");
console.log(gettingattribute1);
let gettingattribute2 = planets.getAttribute("id");
console.log(gettingattribute2);

function addSongs() {
    let song1 = document.getElementById('song1');
    let song2 = document.getElementById('song2');
    let song3 = document.getElementById('song3');

    song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
    song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
    song3.innerHTML = "I Code the Line, by Johnny JavaScript";
}

window.onload = addSongs;