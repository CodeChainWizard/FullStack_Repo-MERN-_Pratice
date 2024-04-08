const fs = require("fs");

//----- IO method always run last
fs.readFile(__filename, () => {
  console.log("I am file");
  process.nextTick(() => console.log("I am inSide Process "));
});

//---- micro-task io task
process.nextTick(() => console.log("I am Process "));
Promise.resolve().then(() => console.log("This is Promise"));

// setTimeout(() => {
//   console.log("I am SetTimeout");
// }, 2000);
