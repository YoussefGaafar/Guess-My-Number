// The 'use strict'; directive in JavaScript is used to enable strict mode. Strict mode is a way to opt in to a restricted variant of JavaScript, 
// which can help catch common coding errors and "unsafe" actions such as:
// Preventing the use of undeclared variables.
// Throwing errors for assignments to non-writable properties.
// Disallowing the use of this keyword in global context.
// Prohibiting the use of duplicate parameter names in functions.
// Making eval and arguments safer.
// Overall, it helps in writing more secure and optimized JavaScript code.
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const updateMessage = (message) => {
    document.querySelector('.message').textContent = message;
};
// Handling Click Events
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) { //If guess is null/empty
        updateMessage('🚫 No number!');
    }
    else if (guess === secretNumber) {// When player wins
        updateMessage('🥳 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.fontSize = '12rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secretNumber) {// When guess is wrong
        if (score > 1) {
            guess > secretNumber ? updateMessage('📈 Too high!') : updateMessage('📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            updateMessage('☹️ You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#C7253E';
        }
    }
});

//Challenge #1
// Task 1. Select the element with again class.
document.querySelector('.again').addEventListener('click', () => {
    // Task 2. Restore Initial values of the score and secretNumber variables
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // Task 3. Restore the initial conditions of the message, number, score, and guess input field
    updateMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';

    // Task 4. Restore the original background color and number width
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.fontSize = '6rem';
    document.querySelector('.number').textContent = '?';
})