import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const removeHandle = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Not Remove any number, because number is 0");
    }
  };
  let num = 0;

  const multipleHandle = () => {
    if (count > 0) {
      num = setCount(count * (count - 1));
    } else {
      alert("Not Remove any number, because number is 0");
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handleClick()}>Add</button>
      <button onClick={() => removeHandle()}>Substract</button>
      <button onClick={() => multipleHandle()}>
        Current And Previous Number Multiply
      </button>
    </div>
  );
};

export default App;
