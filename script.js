window.onload = () => {
  const hoursAdd = document.querySelector(".hoursAdd");
  const minutesAdd = document.querySelector(".minutesAdd");
  const secondsAdd = document.querySelector(".secondsAdd");
  const milisecondsAdd = document.querySelector(".milisecondsAdd");
  hours = 01;
  minutes = 59;
  seconds = 55;
  miliseconds = 00;

  const start = document.querySelector(".start");
  const stop = document.querySelector(".stop");
  const reset = document.querySelector(".reset");
  let interval;

  start.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });

  stop.addEventListener("click", () => {
    clearInterval(interval);
  });

  reset.addEventListener("click", () => {
    clearInterval(interval);
    hours = "00";
    minutes = "00";
    seconds = "00";
    miliseconds = "00";

    hoursAdd.innerHTML = hours;
    minutesAdd.innerHTML = minutes;
    secondsAdd.innerHTML = seconds;
    milisecondsAdd.innerHTML = miliseconds;
  });

  function startTimer() {
    miliseconds++;

    if (miliseconds <= 9) {
      milisecondsAdd.innerHTML = "0" + miliseconds;
    }

    if (miliseconds > 9) {
      milisecondsAdd.innerHTML = miliseconds;
    }

    if (miliseconds > 99) {
      console.log("seconds");
      seconds++;
      secondsAdd.innerHTML = "0" + seconds;
      miliseconds = 0;
      milisecondsAdd.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      secondsAdd.innerHTML = seconds;
    }

    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      minutesAdd.innerHTML = "0" + minutes;
      seconds = 0;
      secondsAdd.innerHTML = "0" + 0;
    }

    if (minutes <= 9) {
      minutesAdd.innerHTML = "0" + minutes;
    }

    if (minutes > 9) {
      minutesAdd.innerHTML = minutes;
    }

    if (minutes > 59) {
      console.log("hours");
      hours++;
      hoursAdd.innerHTML = "0" + hours;
      minutes = 0;
      minutesAdd.innerHTML = "0" + 0;
    }

    if (hours <= 9) {
      hoursAdd.innerHTML = "0" + hours;
    }

    if (hours > 9) {
      hoursAdd.innerHTML = hours;
    }
  }
};

//////////////////////////////////////////////////////////////////////
//   function timer() {
//     var sec = 30;
//     var timer = setInterval(function () {
//       document.querySelector(".timer").innerHTML = "00:" + sec;
//       sec--;
//       if (sec < 0) {
//         clearInterval(timer);
//       }
//     }, 1000);
//   }

//   timer();
