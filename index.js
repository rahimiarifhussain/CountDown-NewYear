 const daysc  = document.getElementById("days")
 const hoursc = document.getElementById("hours")
 const minsc = document.getElementById("mins")
 const secondsc = document.getElementById("seconds")
const newYear = "1 jan 2025";
// console.log(newYear);
const countdown = () => {
  const newYearDate = new Date(newYear);
  const currentYearDate = new Date();
  const diff = Math.floor(newYearDate - currentYearDate);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  //   console.log(days, hours, seconds);
  console.log(
    `Countdown:${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
  );

  daysc.innerHTML = days;
hoursc.innerHTML = hours;
minsc.innerHTML = formatTime(minutes);
secondsc.innerHTML = formatTime(seconds);
  

};
function formatTime(time) {
  return time<10 ? `0${time}`: time;

}

countdown();
setInterval(countdown, 1000)

