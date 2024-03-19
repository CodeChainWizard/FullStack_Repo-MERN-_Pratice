const typing_Text = document.querySelector(".typing-text p");
const input = document.querySelector(".wrapper .input-field ");
const time = document.querySelector(".time span");
const mistakes = document.querySelector(".mistake span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const btn = document.querySelector(".btn");

// set values:---
let timer;
let maxTime = 60;
let leftTime = maxTime;
let charIndex = 0;
let mistake = 0;
let typing = false;

function loadParagraph() {
  const paragraph = [
    " Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "Follow to CodeChainWizard",
  ];

  const random = Math.floor(Math.random() * paragraph.length);

  typing_Text.innerHTML = "";
  for (const char of paragraph[random]) {
    typing_Text.innerHTML += `<span>${char}</span>`;
    typing_Text.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => input.focus());
    typing_Text.addEventListener("click", () => input.focus());
  }
}

// handle user Input----
function initTyping() {
  const char = typing_Text.querySelectorAll("span");
  const textChar = input.value.charAt(charIndex);
  if (charIndex < char.length && leftTime > 0) {
    if (!typing) {
      timer = setInterval(initTimer, 1000);
      typing = true;
    }

    if (char[charIndex].innerText === textChar) {
      char[charIndex].classList.add("correct");
    } else {
      mistake++;
      char[charIndex].classList.add("incorrect");
    }
    charIndex++;
    char[charIndex].classList.add("active");
    mistakes.innerHTML = mistake;

    cpm.innerHTML = charIndex - mistake;
  } else {
    clearInterval(timer);
    input.innerHTML = "";
  }
}

input.addEventListener("input", initTyping);

function initTimer() {
  if (leftTime > 0) {
    leftTime--;
    time.innerHTML = leftTime;

    let wpmVal = Math.round(
      ((charIndex - mistake) / 5 / (maxTime - leftTime)) * 60
    );
    wpm.innerHTML = wpmVal;
  } else {
    clearInterval(timer);
  }
}

function reset() {
  loadParagraph();
  clearInterval(timer);
  leftTime = maxTime;
  charIndex = 0;
  mistake = 0;
  typing = false;

  wpm.innerHTML = 0;
  cpm.innerHTML = 0;
  time.innerHTML = maxTime;
}

btn.addEventListener("click", reset);

loadParagraph();
