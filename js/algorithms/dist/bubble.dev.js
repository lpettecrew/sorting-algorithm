"use strict";

function bubbleSort(arr, HTMLarr, orderBy) {
  // Derive number array from HTML Object array
  var listNumbers = [];
  var barWidth = document.getElementById("bar-0").offsetWidth + 16;

  for (var li = 0; li < arr.length; li++) {
    listNumbers[li] = Number(arr[li]);
  }

  var swapped = true;

  do {
    swapped = false;

    for (var q = 0; q < arr.length; q++) {
      if (orderBy) {
        if (listNumbers[q] < listNumbers[q + 1]) {
          // Bubble sort
          var tmpNum = listNumbers[q + 1];
          listNumbers[q + 1] = listNumbers[q];
          listNumbers[q] = tmpNum; // Sort bars
          // Add selected styling

          HTMLarr[q + 1].classList.add("selected-bar");
          HTMLarr[q].classList.add("selected-bar"); // Change bar height

          var tmpHeight = HTMLarr[q + 1].style.height;
          HTMLarr[q + 1].style.height = HTMLarr[q].style.height;
          HTMLarr[q].style.height = tmpHeight; // Change the values of the bars

          HTMLarr[q].innerHTML = '<span class="bar-value">' + listNumbers[q + 1] + "</span>";
          HTMLarr[q].innerHTML = '<span class="bar-value">' + listNumbers[q] + "</span>"; // End loop

          swapped = true;
        }
      } else {
        if (listNumbers[q] > listNumbers[q + 1]) {
          // Bubble sort
          var _tmpNum = listNumbers[q];
          listNumbers[q] = listNumbers[q + 1];
          listNumbers[q + 1] = _tmpNum; // Sort bars
          // Add selected styling

          HTMLarr[q].classList.add("selected-bar");
          HTMLarr[q + 1].classList.add("selected-bar"); // Change bar height

          var _tmpHeight = HTMLarr[q].style.height;
          HTMLarr[q].style.height = HTMLarr[q + 1].style.height;
          HTMLarr[q + 1].style.height = _tmpHeight; // Change the values of the bars

          HTMLarr[q].innerHTML = '<span class="bar-value">' + listNumbers[q] + "</span>";
          HTMLarr[q + 1].innerHTML = '<span class="bar-value">' + listNumbers[q + 1] + "</span>"; // End loop

          swapped = true;
        }
      }
    }
  } while (swapped);
}