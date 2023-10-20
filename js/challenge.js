let counterValue = 0;
let interval;
let isPaused = false;

const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const restart = document.getElementById('restart');
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');

function incrementCounter() {
  counterValue++;
  counter.innerText = counterValue;
}

function decrementCounter() {
  counterValue--;
  counter.innerText = counterValue;
}

function likeNumber() {
}

function pauseCounter() {
  if (!isPaused) {
    clearInterval(interval);
    isPaused = true;
    disableButtons();
    pause.innerText = 'Resume';
  } else {
    isPaused = false;
    enableButtons();
    pause.innerText = 'Pause';
    interval = setInterval(incrementCounter, 1000);
  }
}

function restartCounter() {
  clearInterval(interval);
  counterValue = 0;
  counter.innerText = counterValue;
  enableButtons();
  isPaused = false;
  pause.innerText = 'Pause';
  interval = setInterval(incrementCounter, 1000);
}

function disableButtons() {
  minus.disabled = true;
  plus.disabled = true;
  heart.disabled = true;
  restart.disabled = true;
}

function enableButtons() {
  minus.disabled = false;
  plus.disabled = false;
  heart.disabled = false;
  restart.disabled = false;
}

window.addEventListener('load', function() {
  interval = setInterval(incrementCounter, 1000);
});

minus.addEventListener('click', decrementCounter);

plus.addEventListener('click', incrementCounter);

heart.addEventListener('click', likeNumber);

pause.addEventListener('click', pauseCounter);

restart.addEventListener('click', restartCounter);

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = commentInput.value;
    commentInput.value = '';
  });