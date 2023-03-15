const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};
console.log(refs.btnStart);

refs.btnStart.addEventListener('click', onStart);
refs.btnStop.addEventListener('click', onStop);
let idStart = null;
function onStart(e) {
  idStart = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
  }, 1000);
}

function onStop(e) {
  clearInterval(idStart);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
