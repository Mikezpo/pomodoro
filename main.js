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

