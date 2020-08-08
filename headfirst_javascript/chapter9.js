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
window.onload = init;

function init() {
    let images = document.getElementsByTagName("img");
    //console.log(images);
    for (let i = 0; i < images.length; i++) {
        // console.log(images[i]);
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    let image = eventObj.target;
    //console.log(image);
    let name = image.id;
    //console.log(name);
    name = name + ".jpg"
        //console.log(name);
    image.src = `img/${name}`;
}