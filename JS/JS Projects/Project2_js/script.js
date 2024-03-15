const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
  "Coding like poetry should be short and concise.",
  "Its not a bug; it’s an undocumented feature.",
  "First, solve the problem. Then, write the code.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Make it work, make it right, make it fast.",
  "Clean code always looks like it was written by someone who cares.",
  "Of course, bad code can be cleaned up. But it’s very expensive.",
];

btn.addEventListener("click", () => {
  console.log("clicked");
  let random = Math.floor(Math.random() * quote.length);
  output.textContent = quote[random];
});
