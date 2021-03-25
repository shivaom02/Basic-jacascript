'use strict';
 
const sum0 = document.getElementById('score--0');
const sum1 = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const Player0 = document.querySelector('.player--0');
const Player1 = document.querySelector('.player--1');

const Roll = document.querySelector('.btn--roll');
const New = document.querySelector('.btn--new');
const Hold = document.querySelector('.btn--hold');
const Dice = document.querySelector('.dice');

let score;
console.log(score);

function init() {
    sum0.textContent=0;
    sum1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    Dice.classList.add('hidden');
    Player0.classList.add('player--active');
    Player1.classList.remove('player--active');
};

init();

function playGame() {
    Dice.classList.remove('hidden');
    score = Math.trunc(Math.random() * 5 + 1);
    Dice.src = `dice-${score}.png`;

    if( Player0.classList.contains('player--active') ) {
      if(score === 1) {
          current0.textContent=0;
          Player0.classList.remove('player--active');
          Player1.classList.add('player--active');
      } else {
          current0.textContent= parseInt(current0.textContent)+score;
      }
    } else if( Player1.classList.contains('player--active') ) {
        if (score === 1) {
          current1.textContent = 0;
          Player0.classList.add('player--active');
          Player1.classList.remove('player--active');
        } else {
          current1.textContent = parseInt(current1.textContent) + score;
        }
    }
}

function checkWinner() {
    sum0.textContent = parseInt(current0.textContent) + parseInt(sum0.textContent);
    sum1.textContent = parseInt(current1.textContent) + parseInt(sum1.textContent);

    if (sum0.textContent >= 100) {
      alert('Player 1 Won the game!');
      init();
    } else if (sum1.textContent >= 100) {
      alert('Player 2 Won the game!');
      init();
    }

    current0.textContent=0;
    current1.textContent=0;
    Player0.classList.toggle('player--active');
    Player1.classList.toggle('player--active');
}

New.addEventListener('click', init);
Roll.addEventListener('click', playGame);
Hold.addEventListener('click', checkWinner);