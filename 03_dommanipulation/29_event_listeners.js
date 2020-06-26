document.querySelector('.clear-tasks').addEventListener('click', function(e) {
    console.log('hello world');
    // e.preventDefault();
});
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    console.log('clicked');
    let val;
    val = e
        //EVENT TARGET ELEMENT
    val = e.target;
    val = e.target.id;
    val = e.className;
    val = e.target.classList;
    e.target.innerText = 'hello';
    //event type
    val = e.type;
    //time stamp
    val = e.timeStamp;
    //coords event RELATIVE TO WINDOW
    val = e.clientY;
    val = e.clientX;
    //coords event RELATIVE TO THE ELEMENT
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}