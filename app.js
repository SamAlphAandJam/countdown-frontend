function countdownToLaunch(targetDate) {
  const now = new Date().getTime();

  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0 || timeRemaining === NaN) {
    const happyNewYear = document.querySelector(".happyNewYear");
    const countdown = document.querySelector(".countAdownContainer");

    countdown.style.display = "none";
    happyNewYear.style.display = "block";
    happyNewYear.innerHTML = "<h4>Happy New Year!</h4>";
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

const launchDate = new Date("2025-01-01T00:00:00").getTime();
const countdown = countdownToLaunch(launchDate);

const daysDiv = document.querySelector(".countdown > div:nth-child(1) > h2");
const hourssDiv = document.querySelector(".countdown > div:nth-child(2) > h2");
const minutesDiv = document.querySelector(".countdown > div:nth-child(3) > h2");
const secondssDiv = document.querySelector(
  ".countdown > div:nth-child(4) > h2"
);

const startTimer = () => {
  daysDiv.innerHTML = countdownToLaunch(launchDate).days;
  hourssDiv.innerHTML = countdownToLaunch(launchDate).hours;
  minutesDiv.innerHTML = countdownToLaunch(launchDate).minutes;
  secondssDiv.innerHTML = countdownToLaunch(launchDate).seconds;

  setInterval(() => {
    daysDiv.innerHTML = countdownToLaunch(launchDate).days;
    hourssDiv.innerHTML = countdownToLaunch(launchDate).hours;
    minutesDiv.innerHTML = countdownToLaunch(launchDate).minutes;
    secondssDiv.innerHTML = countdownToLaunch(launchDate).seconds;
  }, 1000);
};

startTimer();
