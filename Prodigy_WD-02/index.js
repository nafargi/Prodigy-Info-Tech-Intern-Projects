window.onload = function () {
    const minutes = document.getElementById("minutes");
    const tens = document.getElementById("tens");
    const seconds = document.getElementById("seconds");
  
    const startBtn = document.getElementById("start-btn");
    const stopbtn = document.getElementById("stop-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const resetBtn = document.getElementById("reset-btn");
    const alertmessage = document.getElementById("limitExceed");
  
    let minutesSet = '00';
    let secondsSet = '00';
    let tensSet = '00';
    let Interval;
    var count = 0;
  
    startBtn.onclick = function () {
        clearInterval(Interval); 
      Interval = setInterval(startTimer, 10);
    };
    stopbtn.onclick = function () {
      count++;
  
      clearInterval(Interval);
      if (count < 6) {
        const lap = document.getElementById("laps");
        const li = document.createElement("li");
        li.innerHTML = `lap: <span> ${minutes.innerHTML}: ${seconds.innerHTML}: ${minutes.innerHTML}</span>`;
        lap.appendChild(li);
      } else {
        alertmessage.innerHTML =
          "Lap Limit Exceeds: click Reset Button to add lap";
        alertmessage.style.color = "red";
        alertmessage.ariaColSpan.style.color = "green";
      }

    };


  pauseBtn.addEventListener('click', () => {
    clearInterval(Interval); 
  });
    resetBtn.onclick = function () {
      count = 0;
      clearInterval(Interval);
      minutesSet = "00";
      secondsSet = "00";
      tensSet = "00";
    
      minutes.innerHTML = minutesSet;
      seconds.innerHTML = secondsSet;
      tens.innerHTML = tensSet;
      document.getElementById("laps").innerHTML = "";
      alertmessage.innerHTML = "Lap limit not Exceeded";
      alertmessage.style.color = "white";
    };
  
    function startTimer() {
      tensSet++;
  
      if (tensSet < 9) {
        tens.innerHTML = "0" + tensSet;
      }
      if (tensSet > 9) {
        tens.innerHTML = tensSet;
      }
      if (tensSet > 99) {
        secondsSet++;
        seconds.innerHTML = "0" + secondsSet;
        tensSet = 0;
        tens.innerHTML = "0" + 0;
      }
      if (secondsSet > 9) {
        seconds.innerHTML = secondsSet;
      }
      if (secondsSet == 60) {
        seconds.innerHTML = "0" + 0;
        minutesSet++;
  
        minutes.innerHTML = "0" + minutesSet;
        secondsSet = 0;
      }
      if (minutesSet > 9) {
        minutes.innerHTML = minutesSet;
      }
    }
  };