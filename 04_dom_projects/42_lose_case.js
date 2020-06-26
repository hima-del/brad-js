//game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;
//ui elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');
//assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;
// listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    //validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min}and ${max}`, 'red');

    }
    if (guess === winningNum) {
        //disable input
        guessInput.disabled = true;
        //change border color
        guessInput.style.borderColor = 'green';
        //set message
        setMessage(`${winningNum} is correct,YOU WIN!`, 'green');
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //disable input
            guessInput.disabled = true;
            //change border color
            guessInput.style.borderColor = 'red';
            //set message
            setMessage(`Game Over,you lost. The correct number was  ${winningNum}`, 'red')
        } else {
            //game continues ans wrong
            //change border color
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';
            //tell the user
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
});
//set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}