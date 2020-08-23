"use strict";

var intro = document.querySelector(".introduction");
var application = document.querySelector(".application");

function fadeOutIntro() {
  intro.style.opacity = 1;
  var fadeEffect = setInterval(function () {
    if (!intro.style.opacity) {
      intro.style.opacity = 1;
    }

    if (intro.style.opacity > 0) {
      intro.style.opacity -= 0.1;
    } else {
      // Finished fading
      clearInterval(fadeEffect);
      intro.style.display = "none";
      application.style.display = "block";
    }
  }, 200);
}

function generateNumbers() {
  var listInputData = document.getElementById("list-input");
  var randomLength = Math.floor(Math.random() * 50) + 3;
  var randomArray = [];

  for (var kl = 0; kl < randomLength; kl++) {
    randomArray.push(Math.floor(Math.random() * 200));
  }

  listInputData.value = randomArray.toString();
}

function generateBars() {
  var visualizer = document.getElementById("visualizer");
  var form = document.getElementById("configuration"); // Get data from form

  serialize(form);
  var listInputData = document.getElementById("list-input").value.split(",");
  var algorithmChoice = document.getElementById("algorithmChoice").value;
  var orderChoice = document.getElementById("toggle").checked;
  var speedChoice = document.getElementById("speedChoice").value; // Check data has been inputted

  if (listInputData.length < 3) {
    error("Please include at least 3 items in your list!");
  } else if (algorithmChoice == "def") {
    error("You must select an algorithm!");
  } // Seperate list items and make them integers


  listNumbers = [];

  for (var li = 0; li < listInputData.length; li++) {
    listNumbers[li] = Number(listInputData[li]);
  } // Generate bars based on input


  var generatedBars = []; // Variable relative height

  var divider = Math.max.apply(Math, listNumbers) / 100;

  for (var l = 0; l < listNumbers.length; l++) {
    generatedBars.push('<div class="bar" id="bar-' + l + '" style="height:' + listNumbers[l] / divider + '%;"><span class="bar-value">' + listNumbers[l] + "</span></div>");
  } // Render bars
  // clear html before appending bars


  visualizer.innerHTML = "";

  for (var i = 0; i < generatedBars.length; i++) {
    visualizer.insertAdjacentHTML("beforeend", generatedBars[i]);
  } // Process configuration
  // HTML Object array


  var listHTMLData = visualizer.children;

  switch (algorithmChoice) {
    case "bubble":
      bubbleSort(listInputData, listHTMLData, orderChoice);
      break;

    case "merge":
      mergeSort(listInputData, listHTMLData, orderChoice);
      break;

    case "quick":
      quickSort(listInputData, listHTMLData, orderChoice);
      break;

    default:
      error("No algorithm selected!");
  } // Speed adaptation


  switch (speedChoice) {
    case "ultra-slow":
      visualizer.classList.remove("slow");
      visualizer.classList.remove("medium");
      visualizer.classList.remove("fast");
      visualizer.classList.remove("ultra-fast");
      visualizer.classList.add("ultra-slow");
      break;

    case "slow":
      visualizer.classList.remove("ultra-slow");
      visualizer.classList.remove("medium");
      visualizer.classList.remove("fast");
      visualizer.classList.remove("ultra-fast");
      visualizer.classList.add("slow");
      break;

    case "medium":
      visualizer.classList.remove("ultra-slow");
      visualizer.classList.remove("slow");
      visualizer.classList.remove("fast");
      visualizer.classList.remove("ultra-fast");
      visualizer.classList.add("medium");
      break;

    case "fast":
      visualizer.classList.remove("ultra-slow");
      visualizer.classList.remove("slow");
      visualizer.classList.remove("medium");
      visualizer.classList.remove("ultra-fast");
      visualizer.classList.add("fast");
      break;

    case "ultra-fast":
      visualizer.classList.remove("ultra-slow");
      visualizer.classList.remove("slow");
      visualizer.classList.remove("medium");
      visualizer.classList.remove("fast");
      visualizer.classList.add("ultra-fast");
      break;
  }
}

function error(err) {
  var errorField = document.getElementById("errors");
  errorField.insertAdjacentHTML("beforeend", "<p class='error-msg'>" + err + "</p>");
}