function countdownToLaunch(targetDate) {
  const now = new Date().getTime();

  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    return "Launch date has passed!";
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days: days, hours: hours, minutes, minutes, seconds: seconds };
}

const launchDate = new Date("2023-12-31T00:00:00").getTime();
const countdown = countdownToLaunch(launchDate);

const daysDiv = document.querySelector(".countdown > div:nth-child(1) > h2");
const hourssDiv = document.querySelector(".countdown > div:nth-child(3) > h2");
const minutesDiv = document.querySelector(".countdown > div:nth-child(5) > h2");
const secondssDiv = document.querySelector(
  ".countdown > div:nth-child(7) > h2"
);

const startTimer = () => {
  setInterval(() => {
    daysDiv.innerHTML = countdownToLaunch(launchDate).days;
    hourssDiv.innerHTML = countdownToLaunch(launchDate).hours;
    minutesDiv.innerHTML = countdownToLaunch(launchDate).minutes;
    secondssDiv.innerHTML = countdownToLaunch(launchDate).seconds;
  }, 1000);
};

startTimer();