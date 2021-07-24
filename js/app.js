const daysSpan = document.querySelector("#days");
const hoursSpan = document.querySelector("#hours");
const minsSpan = document.querySelector("#mins");
const secsSpan = document.querySelector("#secs");

let target = "2021-07-25";

setInterval(() => {
  let currentDate = new Date();
  let targetDate = new Date(target);

  let totalSecs = (targetDate - currentDate) / 1000;

  let secs = Math.floor(totalSecs) % 60;
  let mins = Math.floor(totalSecs / 60) % 60;
  let hours = Math.floor(totalSecs / 3600) % 24;
  let days = Math.floor(totalSecs / 86400);

  daysSpan.innerText = days;
  hoursSpan.innerText = hours;
  minsSpan.innerText = mins;
  secsSpan.innerText = secs;
}, 1000);
