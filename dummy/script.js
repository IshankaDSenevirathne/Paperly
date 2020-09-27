const startingMinute = 120;
let time = startingMinute * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const hours = Math.floor(time / 3600);
  const spentHours = hours * 60;
  let minutes = Math.floor(time / 60 - spentHours);
  let seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `0${hours}:${minutes}:${seconds}`;
  time--;
}
