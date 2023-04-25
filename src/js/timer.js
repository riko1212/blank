const timer = {
  timerDeadline: new Date(2023, 8, 9),
  intervalId: null,
  rootSelector: document.querySelector('.js-timer-items'),

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.timerDeadline - Date.now();

      if (diff <= 0) {
        this.stop();

        return;
      }

      const { days, hours, minutes, seconds } = this.getTimeComponents(diff);
      // let { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      // if (seconds < 10) {
      //   seconds = '0' + seconds;
      // }
      this.rootSelector.querySelector('.js-timer__days').textContent =
        this.pad(days);
      this.rootSelector.querySelector('.js-timer__hours').textContent =
        this.pad(hours);
      this.rootSelector.querySelector('.js-timer__minutes').textContent =
        this.pad(minutes);
      this.rootSelector.querySelector('.js-timer__seconds').textContent =
        this.pad(seconds);

      this.rootSelector.querySelector('.js-timer__days').dataset.title =
        this.declensionNum(days, ['день', 'дні', 'днів']);
      this.rootSelector.querySelector('.js-timer__hours').dataset.title =
        this.declensionNum(hours, ['година', 'години', 'годин']);
      this.rootSelector.querySelector('.js-timer__minutes').dataset.title =
        this.declensionNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
      this.rootSelector.querySelector('.js-timer__seconds').dataset.title =
        this.declensionNum(seconds, ['секунда', 'секунди', 'секунд']);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, 0);
  },

  declensionNum(num, words) {
    // num = 4
    // words = ['секунда', 'секунди', 'секунд']

    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  },
};

const str = '2';

console.log(str.padStart(2, '0'));

timer.start();
