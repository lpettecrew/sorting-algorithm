function bubbleSort(arr, HTMLarr, orderBy) {
  // Derive number array from HTML Object array
  let listNumbers = [];

  var barWidth = document.getElementById("bar-0").offsetWidth + 16;

  for (var li = 0; li < arr.length; li++) {
    listNumbers[li] = Number(arr[li]);
  }

  let swapped = true;
  do {
    swapped = false;
    for (let q = 0; q < arr.length; q++) {
      if (listNumbers[q] > listNumbers[q + 1]) {
        // Bubble sort
        let tmpNum = listNumbers[q];
        listNumbers[q] = listNumbers[q + 1];
        listNumbers[q + 1] = tmpNum;

        // Sort bars
        // Add selected styling
        HTMLarr[q].classList.add("selected-bar");
        HTMLarr[q + 1].classList.add("selected-bar");

        // Change bar height
        let tmpHeight = HTMLarr[q].style.height;
        HTMLarr[q].style.height = HTMLarr[q + 1].style.height;
        HTMLarr[q + 1].style.height = tmpHeight;

        // Change the values of the bars
        HTMLarr[q].innerHTML =
          '<span class="bar-value">' + listNumbers[q] + "</span>";
        HTMLarr[q + 1].innerHTML =
          '<span class="bar-value">' + listNumbers[q + 1] + "</span>";

        // End loop
        swapped = true;
      }
    }
  } while (swapped);

  if (orderBy) {
    listNumbers.reverse();
    // Make HTMLarr an array

    var newArray = [];

    for (var xl = 0; xl < HTMLarr.length; xl++) {
      newArray.push(HTMLarr[xl]);
    }

    HTMLarr = newArray.reverse();

    // Clear visualizer
    visualizer.innerHTML = "";
    var generatedBars = [];
    var divider = Math.max.apply(Math, listNumbers) / 100;

    for (var v = 0; v < HTMLarr.length; v++) {
      generatedBars.push(
        '<div class="bar" id="bar-' +
          v +
          '" style="height:' +
          listNumbers[v] / divider +
          '%;"><span class="bar-value">' +
          listNumbers[v] +
          "</span></div>"
      );
    }

    for (var xa = 0; xa < generatedBars.length; xa++) {
      visualizer.insertAdjacentHTML("beforeend", generatedBars[xa]);
    }
  }
}
