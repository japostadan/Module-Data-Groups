let countdownTimer = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  let remainingSeconds = Math.floor(Number(input.value));

  // Clear any existing countdown
  if (countdownTimer !== null) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }

  // Handle bad, empty, zero, or negative input
  if (!Number.isFinite(remainingSeconds) || remainingSeconds <= 0) {
    heading.innerText = "Time Remaining: 00:00";
    return;
  }

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function updateHeading() {
    heading.innerText = `Time Remaining: ${formatTime(remainingSeconds)}`;
  }

  // Show time immediately
  updateHeading();

  countdownTimer = setInterval(() => {
    remainingSeconds--;

    if (remainingSeconds <= 0) {
      clearInterval(countdownTimer);
      countdownTimer = null;
      heading.innerText = "Time Remaining: 00:00";
      playAlarm();
      return;
    }

    updateHeading();
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
