'use strict';

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');

const ansNumber = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const number = document.querySelector('.number');

let random, hscore=0, cscore;

function init() {
    document.body.style.backgroundColor = '#222';
    random = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Start gussing...';
    number.textContent = '?';
    cscore = 20;
    score.textContent = cscore;
    btnCheck.addEventListener('click', checkGuess);
};

function checkHighScore() {
    if(hscore < cscore) {
        hscore = cscore;
        highScore.textContent=hscore;
    }
}

function checkGuess() {
  cscore = cscore - 1;
  score.textContent = cscore;

  if (guess.value == random) {
    document.body.style.backgroundColor = 'green';
    message.textContent = 'Correct!';
    number.textContent = random;
    checkHighScore();

   btnCheck.removeEventListener('click', checkGuess);
   } else if (guess.value > random) {
     message.textContent = 'Too High!';
   } else {
     message.textContent = 'Too Low!';
   }
 }

btnAgain.addEventListener('click', init);

init();