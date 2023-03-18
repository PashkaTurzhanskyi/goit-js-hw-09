import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const buttonStart = document.querySelector('button[data-start]');
buttonStart.disabled = true;
const daysTimer = document.querySelector('span[data-days]');
const hoursTimer = document.querySelector('span[data-hours]');
const minutesTimer = document.querySelector('span[data-minutes]');
const secondsTimer = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (new Date().getTime() > selectedDates[0].getTime()) {
      window.alert('Please choose a date in the future');
    } else {
      buttonStart.disabled = false;
      buttonStart.addEventListener('click', () => {
        timerId = setInterval(() => {
          const difference = selectedDates[0].getTime() - new Date().getTime();
          if (difference < 1000) {
            clearInterval(timerId);
            secondsTimer.textContent = '00';
          } else {
            function convertMs(ms) {
              // Number of milliseconds per unit of time
              const second = 1000;
              const minute = second * 60;
              const hour = minute * 60;
              const day = hour * 24;

              // Remaining days
              const days = Math.floor(ms / day);
              // Remaining hours
              const hours = Math.floor((ms % day) / hour);
              // Remaining minutes
              const minutes = Math.floor(((ms % day) % hour) / minute);
              // Remaining seconds
              const seconds = Math.floor(
                (((ms % day) % hour) % minute) / second
              );

              return { days, hours, minutes, seconds };
            }
            daysTimer.textContent = addLeadingZero(convertMs(difference).days);
            hoursTimer.textContent = addLeadingZero(
              convertMs(difference).hours
            );
            minutesTimer.textContent = addLeadingZero(
              convertMs(difference).minutes
            );
            secondsTimer.textContent = addLeadingZero(
              convertMs(difference).seconds
            );
            function addLeadingZero(value) {
              return String(value).padStart(2, '0');
            }
          }
        }, 1000);
      });
    }
  },
};

flatpickr('input#datetime-picker', options);
