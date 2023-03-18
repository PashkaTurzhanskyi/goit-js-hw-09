const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

buttonStart.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  buttonStart.disabled = true;
  timerId = setInterval(onButtonStart, 1000);
});
function onButtonStart() {
  body.style.backgroundColor = getRandomHexColor();
}

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  buttonStart.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
