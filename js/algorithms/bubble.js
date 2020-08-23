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
      if (orderBy) {
        if (listNumbers[q] < listNumbers[q + 1]) {
          // Bubble sort
          let tmpNum = listNumbers[q + 1];
          listNumbers[q + 1] = listNumbers[q];
          listNumbers[q] = tmpNum;

          // Sort bars
          // Add selected styling
          HTMLarr[q + 1].classList.add("selected-bar");
          HTMLarr[q].classList.add("selected-bar");

          // Change bar height
          let tmpHeight = HTMLarr[q + 1].style.height;
          HTMLarr[q + 1].style.height = HTMLarr[q].style.height;
          HTMLarr[q].style.height = tmpHeight;

          // Change the values of the bars
          HTMLarr[q].innerHTML =
            '<span class="bar-value">' + listNumbers[q + 1] + "</span>";
          HTMLarr[q].innerHTML =
            '<span class="bar-value">' + listNumbers[q] + "</span>";

          // End loop
          swapped = true;
        }
      } else {
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
    }
  } while (swapped);
}