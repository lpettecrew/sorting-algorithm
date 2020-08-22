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
