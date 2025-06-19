    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timerInterval;
 
    function startInterval() {
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
        //function expression 
        const format = (num) => (num < 10 ? "0" + num : num);
        document.getElementById("timer").textContent =
          `${format(hours)}:${format(minutes)}:${format(seconds)}`;
      }, 1000);
    }

    function stopInterval(){
        clearInterval(timerInterval);
    }

    function resetTimer(){
        clearInterval(timerInterval);
        hours=0;
        minutes=0;
        seconds=0;
        document.getElementById("timer").textContent = "00:00:00";
        document.getElementById("laps").innerHTML = ""; 
    }

    function lap(){
      const format = (num) => (num < 10 ? "0" + num : num);
      const lapTime = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
      const lapList = document.getElementById("laps");
      const li = document.createElement("li");
      li.textContent = "Lap: " + lapTime;
      lapList.appendChild(li);
    }
