import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const delayInput = form.elements.delay;
  const stepInput = form.elements.step;
  const amountInput = form.elements.amount;
  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  for (let i = 1; i <= amount; i++) {
    const position = i;
    const promiseDelay = delay + (i - 1) * step;
    createPromise(position, promiseDelay)
      .then(() => {
        Notiflix.Notify.success(
          `Promise ${position} resolved after ${promiseDelay}ms`
        );
      })
      .catch(() => {
        Notiflix.Notify.failure(
          `Promise ${position} rejected after ${promiseDelay}ms`
        );
      });
  }
});
