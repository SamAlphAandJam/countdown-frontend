function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedHours = hours < 10 ? `0${hours}` : hours;

  const formattedTime = `${formattedHours}:${formattedMinutes}`;

  document.querySelector(".time > div:nth-child(1) > h2").innerHTML =
    formattedHours;
  document.querySelector(".time > div:nth-child(3) > h2").innerHTML =
    formattedMinutes;
}

const setCurrentTime = () => {
  getCurrentTime();
  setInterval(() => {
    getCurrentTime();
  }, 15000);
};

setCurrentTime();
