const eventEmitter = require("events");
const emitter = new eventEmitter();

// -- this function use for any event run than what callBack function run.
emitter.on("chackPage", (data) => {
  console.log(
    "Event Occur",
    data.map((msg) => {
      console.log(msg.message);
    })
  );
});

emitter.emit("chackPage", [
  {
    message: "Hello",
  },
  {
    message: "Hello1",
  },
]);
