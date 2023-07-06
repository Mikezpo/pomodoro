// Timer variables
let workDuration = 25; // in minutes
let breakDuration = 5; // in minutes
let timerInterval;
let currentTime = 0;
let handleTaskClick;
let currentState = 'work';

// DOM elements
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Start button click event
startButton.addEventListener('click', startTimer);

// Stop button click event
stopButton.addEventListener('click', stopTimer);

// Reset button click event
resetButton.addEventListener('click', resetTimer);

// Add task button click event
addTaskButton.addEventListener('click', addTask);

// Task list click event
taskList.addEventListener('click', handleTaskClick);

// Timer function
function startTimer() {
  // Disable start button, reset button, and task input
  startButton.disabled = true;
  resetButton.disabled = true;
  taskInput.disabled = true;

  // Convert work and break durations to seconds
  const workDurationInSeconds = workDuration * 60;
  const breakDurationInSeconds = breakDuration * 60;

  // Determine the target time based on the current state
  let targetTime;
  if (currentState === 'work') {
    targetTime = currentTime + workDurationInSeconds;
  } else {
    targetTime = currentTime + breakDurationInSeconds;
  }

  // Start the timer interval
  timerInterval = setInterval(function() {
    currentTime++;

    // Calculate remaining time
    let remainingSeconds = targetTime - currentTime;
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;

    // Update timer display
    minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;

    // Check if timer is finished
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      playAudioAlert();

      // Switch to the next state
      if (currentState === 'work') {
        currentState = 'break';
        currentTime = 0;
        startTimer();
      } else {
        currentState = 'work';
        currentTime = 0;
        startTimer();
      }
    }
  }, 1000); // Update every second
}
