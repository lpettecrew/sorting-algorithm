const intro = document.querySelector(".introduction");

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

function arraymove(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

function generateBars() {
  const visualizer = document.getElementById("visualizer");
  const form = document.getElementById("configuration");

  // Get data from form
  serialize(form);

  var listInputData = document.getElementById("list-input").value;
  var algorithmChoice = document.getElementById("algorithmChoice").value;
  var orderChoice = document.getElementById("orderChoice").value;
  var speedChoice = document.getElementById("speedChoice").value;

  // Seperate list items and make them integers
  var listItems = listInputData.split(",");
  for (var li = 0; li < listItems.length; li++) {
    listItems[li] = Number(listItems[li]);
  }

  // Generate bars based on input
  var generatedBars = [];

  // Variable relative height
  var divider = Math.max.apply(Math, listItems) / 100;

  for (var l = 0; l < listItems.length; l++) {
    generatedBars.push(
      '<div class="bar" style="height:' +
        listItems[l] / divider +
        '%;"><span class="bar-value">' +
        listItems[l] +
        "</span></div>"
    );
  }

  // Render bars
  // clear html before appending bars
  visualizer.innerHTML = "";
  for (var i = 0; i < generatedBars.length; i++) {
    visualizer.insertAdjacentHTML("beforeend", generatedBars[i]);
  }
}
