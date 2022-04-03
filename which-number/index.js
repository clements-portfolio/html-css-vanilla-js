let min = 1;
let max = 10;
let goal = randomNumber(min, max);
let guesses = 3;

const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guess = document.getElementById('guess-value');
const input = document.getElementById('guess-input');
const message= document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e)=> {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

guess.addEventListener('click', ()=> {
  let g = parseInt(input.value);

  // Validation
  if (isNaN(g) || g < min || g > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    if (g === goal) {
      gameOver(true, `YOU WIN!! ${goal} is the correct number!`);
    } else {
      guesses--;
      
      if (guesses === 0) {
        gameOver(false, `Game Over... The correct number was ${goal}.`);
      } else {
        setMessage(`${g} is not correct. ${guesses} guesses remaining...`, 'red');
        input.style.borderColor = 'red';
        input.value = '';
      }
    }
  }
});

function randomNumber(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
}

const gameOver = (win, msg) => {
  let color;
  win === true ? color = 'green' : color = 'red';

  input.disabled = true;
  input.style.borderColor = color;
  setMessage(msg, color);

  guess.value = 'Play Again';
  guess.className += 'play-again';
}