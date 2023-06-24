'use strict';

const history = [];

const docSelect = function (depende) {
  return document.querySelector(`${depende}`);
};

let currentScore = 20;
let highScore = Number(docSelect('.highscore').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let inputField = document.querySelector('.guess').value;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (currentScore > 1) {
    //When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = '⛔No Number';
    } else if (guess) {
      //When player wins
      if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        docSelect('.number').style.width = '30rem ';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.message').textContent = '🎉Correct Number!';
        if (currentScore > highScore) {
          docSelect('.highscore').textContent = currentScore;
        } else {
          docSelect('.highscore').textContent = highScore;
        }
      } else if (guess > secretNumber) {
        currentScore--;
        document.querySelector('.guess').value = '';
        document.querySelector('.score').textContent = currentScore;
        document.querySelector('.message').textContent = '🔴Too High';
      } else {
        currentScore--;
        document.querySelector('.guess').value = '';
        document.querySelector('.message').textContent = '🟡Too Low';
        document.querySelector('.score').textContent = currentScore;
      }
      history.push(guess);
      let historyElement = document.createElement('ul');
      let subHistoryElement = document.createElement('li');
      docSelect('.history')
        .appendChild(historyElement)
        .appendChild(subHistoryElement).textContent =
        history[history.length - 1];

      // for (let i = 0; i < history.length; i++) {
      //   let subHistoryElement = document.createElement('li');
      //   subHistoryElement.textContent = history[i];
      //   historyElement.appendChild(subHistoryElement);
      //   document.querySelector('.history').appendChild(historyElement);
      // }
      // docSelect('.history').textContent = `${history}${historyUpdated}`;
      // document.querySelector('.history').appendChild(historyElement);
    }
  } else if (currentScore === 1) {
    document.querySelector('.guess').value = '🚫⛔⚠️';
    docSelect('body').style.backgroundColor = '#820c0c';
    document.querySelector('.message').textContent = 'GAME OVER!';
    docSelect('.number').textContent = secretNumber;
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
  } else {
    document.querySelector('.message').textContent = 'click "Again" button';
    document.querySelector('.guess').value = '';
  }
});

docSelect('.again').addEventListener('click', function () {
  currentScore = 20;
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  docSelect('.message').textContent = 'Start guessing...';
  docSelect('div.number').value = currentScore;
  docSelect('.number').value = secretNumber;
  docSelect('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  docSelect('.number').style.width = '15rem ';
  docSelect('.number').textContent = '?';
  docSelect('.history').textContent = [];
});
// for (i = 0; i < history.length; i++) {
//   docSelect('.history').textContent = history[i];
// }
