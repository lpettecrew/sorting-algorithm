"use strict";

var intro = document.querySelector(".introduction");

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
    }
  }, 200);
}

function generateBars() {
  var visualizer = document.getElementById("visualizer");
  var form = document.getElementById("configuration"); // Get data from form

  serialize(form);
  var listInputData = document.getElementById("list-input").value;
  var algorithmChoice = document.getElementById("algorithmChoice").value;
  var orderChoice = document.getElementById("orderChoice").value;
  var speedChoice = document.getElementById("speedChoice").value; // Seperate list items

  var listItems = listInputData.split(","); // Generate bars based on input

  var generatedBars = [];

  for (var l = 0; l < listItems.length; l++) {
    generatedBars.push('<div class="bar" style="height:' + listItems[l] / 1 + '%;"><span class="bar-value">' + listItems[l] + "</span></div>");
  } // Render bars
  // clear html before appending bars


  visualizer.innerHTML = "";

  for (var i = 0; i < generatedBars.length; i++) {
    visualizer.insertAdjacentHTML("beforeend", generatedBars[i]);
  }
}