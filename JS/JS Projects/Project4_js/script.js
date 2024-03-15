let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrong = document.querySelector(".wrong");
let gussess = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;

let num_gusess = 0;

btn.addEventListener("click", () => {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrong.innerText = "This is Wrong Input Value";
  } else {
    if (input.value < answer) {
      num_gusess++;
      wrong.innerText = "Gusse number is low!";
      gussess.innerHTML = num_gusess;
    }
    if (input.value > answer) {
      num_gusess++;
      wrong.innerText = "Gusse number is high!";
      gussess.innerHTML = num_gusess;
    }
    if (input.value == answer) {
      wrong.innerHTML = "Correct Number! You won!";
      gussess.innerText = num_gusess;
    }
  }
});
