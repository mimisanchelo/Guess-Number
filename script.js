'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.put-in').value);

  //No number
  if (!guess) {
    document.querySelector('.start-guess').textContent = ' ⛔ No Number!';

    // correct number
  } else if (guess === secretNumber) {
    document.querySelector('.start-guess').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess-number').style.width = '150px';
    document.querySelector('.guess-number').textContent = secretNumber;

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WRONG ANSWER + HINT
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.start-guess').textContent = 'Too High!';
    } else {
      displayMessage = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.start-guess').textContent = 'Too Low!';
    } else {
      displayMessage = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.start-guess').textContent = '❓Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.put-in').value = '';
  document.querySelector('.guess-number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess-number').style.width = '90px';
});
