import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// Get element date input, start btn, data: days, hours, min, sec

const btnStart = document.querySelector('[data-start]');
const datePicker = document.querySelector('#datetime-picker');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

btnStart.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      btnStart.removeAttribute('disabled');

      btnStart.addEventListener('click', event => {
        const intervalId = setInterval(() => {
          const { days, hours, minutes, seconds } = convertMs(
            selectedDates[0].getTime() - Date.now()
          );
          daysValue.textContent = days;
          hoursValue.textContent = hours;
          minutesValue.textContent = minutes;
          secondsValue.textContent = seconds;

          if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(intervalId);
          }
        }, 1000);
      });
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
