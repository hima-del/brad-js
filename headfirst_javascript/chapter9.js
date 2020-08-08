//deblurring omage on mouseover event

window.onload = init;

function init() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

function showAnswer(e) {
    let image = e.target;
    let name = image.id;
    name = name + ".jpg";
    image.src = `img/${name}`
}

function reblur(e) {
    let image = e.target;
    let name = image.id;
    name = name + "blur.jpg"
    image.src = `img/${name}`
}


// function pageLoadHandler() {
//     alert("I am live");
// }
// window.onload = pageLoadHandler;

// window.onload = init;

// function init() {
//     let image = document.getElementById("zero");
//     image.onclick = showAnswer;
// }

// function showAnswer() {
//     let image = document.getElementById("zero");
//     image.src = "img/zero.jpg";
// }
// window.onload = init;

// function init() {
//     let images = document.getElementsByTagName("img");
//     //console.log(images);
//     for (let i = 0; i < images.length; i++) {
//         // console.log(images[i]);
//         images[i].onclick = showAnswer;
//     }
// }

// function showAnswer(eventObj) {
//     let image = eventObj.target;
//     //console.log(image);
//     let name = image.id;
//     //console.log(name);
//     name = name + ".jpg"
//         //console.log(name);
//     image.src = `img/${name}`;
//     setTimeout(reblur, 2000, image);
// }

// function reblur(image) {
//     let name = image.id;
//     name = name + "blur.jpg";
//     image.src = `img/${name}`
// }
// function init() {
//     let map = document.getElementById("map");
//     map.onmousemove = showCoords;
// }

// function showCoords(eventObj) {
//     let map = document.getElementById("coords");
//     let x = eventObj.clientX;
//     let y = eventObj.clientY;
//     map.innerHTML = "map coordinates: " + x + ", " + y;
// }
//time out function
// function timeHandler() {
//     alert("hey ... what are you doing there");
// }

// setTimeout(timeHandler, 5000);

//setTimeInterval

// let tick = true;

// function ticker() {
//     if (tick) {
//         console.log("tick");
//         tick = false;
//     } else {
//         console.log("tock");
//         tick = true;
//     }
// }
// setInterval(ticker, 1000);