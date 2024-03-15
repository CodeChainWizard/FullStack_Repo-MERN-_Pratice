let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
  banner.classList.toggle("night");
});

// Typed Effect script code
var typed = new Typed("#element", {
  strings: [
    "Shuabhm Danecha",
    "Flutter Developer",
    "Blockchain Developer",
    "Java, C, C++",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});
