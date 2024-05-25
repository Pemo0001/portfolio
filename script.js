function toggleMenu() {
  var menu = document.querySelector(".menu-items");
  var burger = document.querySelector(".burger-menu");

  menu.classList.toggle("active");
  burger.classList.toggle("active");
}

// Add an event listener for each menu item
var menuItems = document.querySelectorAll(".menu-items a");
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    // Close the menu when a menu item is clicked
    var menu = document.querySelector(".menu-items");
    var burger = document.querySelector(".burger-menu");

    menu.classList.remove("active");
    burger.classList.remove("active");
  });
});

/* CHAT GPT MUSIK */

const audio = document.getElementById("myAudio");
const playPauseBtn = document.getElementById("playPauseBtn");

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.src = "images/pauseknap.svg"; // Replace with the path to your pause button image
  } else {
    audio.pause();
    playPauseBtn.src = "playknap.svg"; // Replace with the path to your play button image
  }
}

// Optional: Add an event listener to update the button image when the audio state changes
audio.addEventListener("play", () => {
  playPauseBtn.src = "images/pauseknap.svg"; // Replace with the path to your pause button image
});

audio.addEventListener("pause", () => {
  playPauseBtn.src = "images/playknap.svg"; // Replace with the path to your play button image
});

/* SLIDESHOW CHAT GPT */

let slideIndex = [];

function showSlides(n, slideshowId) {
  if (!slideIndex[slideshowId]) {
    slideIndex[slideshowId] = 1;
  } else {
    slideIndex[slideshowId] += n;
  }

  let i;
  const slides = document.getElementById(slideshowId).getElementsByClassName("mySlides");
  if (slideIndex[slideshowId] > slides.length) {
    slideIndex[slideshowId] = 1;
  }
  if (slideIndex[slideshowId] < 1) {
    slideIndex[slideshowId] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[slideshowId] - 1].style.display = "block";
}

// Show the first slide by default
showSlides(0, "slideshow1");
showSlides(0, "slideshow2");
showSlides(0, "slideshow3");
showSlides(0, "slideshow4");
showSlides(0, "slideshow5");
showSlides(0, "slideshow6");

function plusSlides(n, slideshowId) {
  showSlides(n, slideshowId);
}

/* SCROLL TIL SECTION CHAT GPT */

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
